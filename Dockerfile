# Build context: repo root
# docker build -t nooobtimex .
#
# Bun installs dependencies; Node builds and serves.
# ─── Stage 1: Install ────────────────────────────────────────────────────────
FROM oven/bun:1-slim AS installer
WORKDIR /app

# Manifests only, so this layer is cached until dependencies actually change.
COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

# ─── Stage 2: Build ──────────────────────────────────────────────────────────
FROM node:26-slim AS builder
WORKDIR /app

# Copy bun executable from installer stage for script checks
COPY --from=installer /usr/local/bin/bun /usr/local/bin/bun
COPY --from=installer /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

# Run icon check via Bun, and Next.js build via Node.js
RUN bun run icons:check && npx next build

# ─── Stage 3: Runtime ────────────────────────────────────────────────────────
FROM node:26-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

ENV MALLOC_ARENA_MAX=2
ENV NODE_OPTIONS=--max-old-space-size=512

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Fallback for Railway if the service ever resolves a start command from
# package.json instead of railway.toml's startCommand / this CMD.
RUN node -e "const fs = require('fs'); const p = 'package.json'; const pkg = fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : {}; pkg.scripts = pkg.scripts || {}; pkg.scripts.start = 'node server.js'; fs.writeFileSync(p, JSON.stringify(pkg, null, 2));"

ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
