# Build context: repo root
# docker build -t nooobtimex .
#
# Bun installs and builds; Node serves. See the runtime stage for why.
# ─── Stage 1: Install ────────────────────────────────────────────────────────
FROM oven/bun:1-slim AS installer
WORKDIR /app

# Manifests only, so this layer is cached until dependencies actually change.
COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

# ─── Stage 2: Build ──────────────────────────────────────────────────────────
FROM oven/bun:1-slim AS builder
WORKDIR /app

COPY --from=installer /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

# No build ARGs needed. /github is a dynamic route (ƒ in the build output), so
# nothing here calls the GitHub API — lib/github.ts reads the optional
# GITHUB_TOKEN at request time, which is a plain Railway service variable.
RUN bun run build

# ─── Stage 3: Runtime ────────────────────────────────────────────────────────
# Node, not Bun: the Next standalone server leaks RSS under Bun's Node-compat
# HTTP layer (oven-sh/bun#27514 — buffers are freed by GC but never returned to
# the OS). Bun still installs + builds above; only serving runs on Node.
FROM node:24-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# glibc (this is Debian) hands each thread its own malloc arena — up to 8 × ncores —
# and their free lists are rarely returned to the OS. On a many-core Railway host that
# is tens of MB of RSS the heap profiler cannot see. One process, so 2 arenas is ample.
ENV MALLOC_ARENA_MAX=2

# Without this, V8 sizes its old-space cap from os.totalmem(), which inside a container
# usually reports the HOST's memory — so the heap can drift for hundreds of MB before a
# major GC. Rule of thumb: 0.6–0.75 × the service's memory limit (Railway dashboard →
# service → Settings). 512 suits any plan here; the served output is prerendered HTML
# and the live JS heap sits well under 100 MB.
ENV NODE_OPTIONS=--max-old-space-size=512

# `output: 'standalone'` traces the server's real imports (sharp included, which
# the /_next/image optimizer needs at runtime). .next/static is never traced and
# must come across explicitly; public/ currently is copied by Next itself, but
# copying it here keeps this correct if that ever changes.
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Fallback for Railway if the service ever resolves a start command from
# package.json instead of railway.toml's startCommand / this CMD.
RUN node -e "const fs = require('fs'); const p = 'package.json'; const pkg = fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : {}; pkg.scripts = pkg.scripts || {}; pkg.scripts.start = 'node server.js'; fs.writeFileSync(p, JSON.stringify(pkg, null, 2));"

# Bind to all interfaces — the default 'localhost' is unreachable from Railway's
# edge. PORT is injected by Railway and read by server.js on its own.
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
