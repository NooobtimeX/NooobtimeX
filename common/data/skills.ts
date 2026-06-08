import type { SkillCategory } from '../enums'
import type { Skill } from '../interfaces'

// --- Category metadata (label + icon only) ---

export const categoryMetadata: Record<SkillCategory, { label: string; icon: string }> = {
	'frontend': { label: 'Frontend', icon: 'material-symbols:laptop-chromebook' },
	'backend': { label: 'Backend', icon: 'material-symbols:database' },
	'infrastructure': { label: 'Infrastructure', icon: 'material-symbols:cloud' },
	'growth-management': { label: 'Growth & Management', icon: 'material-symbols:trending-up' }
}

/** Identity helper that preserves the literal `id` so SkillId can be derived. */
const skill = <const T extends Skill>(s: T): T => s

// --- Frontend ---
const nextjs = skill({
	id: 'next-js',
	name: 'Next.js',
	icon: 'logos:nextjs-icon',
	category: 'frontend',
	important: true
})
const nuxtjs = skill({ id: 'nuxt-js', name: 'Nuxt.js', icon: 'logos:nuxt-icon', category: 'frontend' })
const react = skill({ id: 'react', name: 'React', icon: 'logos:react', category: 'frontend', important: true })
const typescript = skill({
	id: 'typescript',
	name: 'TypeScript',
	icon: 'logos:typescript-icon',
	category: 'frontend',
	important: true
})
const tailwindcss = skill({
	id: 'tailwind-css',
	name: 'Tailwind CSS',
	icon: 'logos:tailwindcss-icon',
	category: 'frontend',
	important: true
})
const shadcnui = skill({
	id: 'shadcn-ui',
	name: 'Shadcn/ui',
	icon: 'simple-icons:shadcnui',
	category: 'frontend',
	important: true
})
const css = skill({ id: 'css', name: 'CSS', icon: 'logos:css-3', category: 'frontend' })
const radixui = skill({ id: 'radix-ui', name: 'Radix UI', icon: 'simple-icons:radixui', category: 'frontend' })
const baseui = skill({ id: 'base-ui', name: 'Base UI', icon: 'mdi:cube-outline', category: 'frontend' })
const framerMotion = skill({ id: 'framer-motion', name: 'Framer Motion', icon: 'logos:framer', category: 'frontend' })
const emblaCarousel = skill({
	id: 'embla-carousel',
	name: 'Embla Carousel',
	icon: 'carbon:carousel-horizontal',
	category: 'frontend'
})
const tanstackQuery = skill({
	id: 'tanstack-query',
	name: 'TanStack Query',
	icon: 'logos:react-query-icon',
	category: 'frontend'
})
const lucide = skill({ id: 'lucide-icons', name: 'Lucide Icons', icon: 'lucide:box', category: 'frontend' })
const heroicons = skill({ id: 'heroicons', name: 'Heroicons', icon: 'logos:heroicons', category: 'frontend' })
const reactIcons = skill({ id: 'react-icons', name: 'React Icons', icon: 'logos:react', category: 'frontend' })
const recharts = skill({ id: 'recharts', name: 'Recharts', icon: 'simple-icons:recharts', category: 'frontend' })
const datefns = skill({ id: 'date-fns', name: 'date-fns', icon: 'logos:javascript', category: 'frontend' })
const flutter = skill({ id: 'flutter', name: 'Flutter', icon: 'logos:flutter', category: 'frontend' })
const prettier = skill({ id: 'prettier', name: 'Prettier', icon: 'logos:prettier', category: 'frontend' })
const codemirror = skill({
	id: 'codemirror',
	name: 'CodeMirror',
	icon: 'simple-icons:codemirror',
	category: 'frontend'
})

// --- Backend ---
const nodejs = skill({
	id: 'node-js',
	name: 'Node.js',
	icon: 'logos:nodejs-icon',
	category: 'backend',
	important: true
})
const nestjs = skill({ id: 'nest-js', name: 'Nest.js', icon: 'logos:nestjs', category: 'backend' })
const nats = skill({ id: 'nats', name: 'NATS', icon: 'logos:nats-icon', category: 'backend' })
const python = skill({ id: 'python', name: 'Python', icon: 'logos:python', category: 'backend' })
const elysia = skill({
	id: 'elysia-js',
	name: 'Elysia.js',
	icon: 'material-symbols:flash-on',
	category: 'backend',
	important: true
})
const sse = skill({ id: 'sse', name: 'SSE', icon: 'material-symbols:stream', category: 'backend' })
const bun = skill({ id: 'bun-js', name: 'Bun.js', icon: 'logos:bun', category: 'backend' })
const postgresql = skill({
	id: 'postgresql',
	name: 'PostgreSQL',
	icon: 'logos:postgresql',
	category: 'backend',
	important: true
})
const mongodb = skill({
	id: 'mongodb',
	name: 'MongoDB',
	icon: 'logos:mongodb-icon',
	category: 'backend',
	important: true
})
const mongoose = skill({ id: 'mongoose', name: 'Mongoose', icon: 'simple-icons:mongoose', category: 'backend' })
const prisma = skill({ id: 'prisma', name: 'Prisma', icon: 'logos:prisma', category: 'backend', whiteBg: true })
const redis = skill({ id: 'redis', name: 'Redis', icon: 'logos:redis', category: 'backend', important: true })
const supabase = skill({ id: 'supabase', name: 'Supabase', icon: 'logos:supabase-icon', category: 'backend' })
const bullmq = skill({ id: 'bullmq', name: 'BullMQ', icon: 'mdi:format-list-numbered', category: 'backend' })
const medusa = skill({ id: 'medusa', name: 'Medusa', icon: 'simple-icons:medusa', category: 'backend' })

// --- Infrastructure ---
const vercel = skill({
	id: 'vercel',
	name: 'Vercel',
	icon: 'logos:vercel-icon',
	category: 'infrastructure',
	whiteBg: true,
	important: true
})
const railway = skill({ id: 'railway', name: 'Railway', icon: 'simple-icons:railway', category: 'infrastructure' })
const docker = skill({
	id: 'docker',
	name: 'Docker',
	icon: 'logos:docker-icon',
	category: 'infrastructure',
	important: true
})
const render = skill({ id: 'render', name: 'Render', icon: 'simple-icons:render', category: 'infrastructure' })
const github = skill({
	id: 'git-github',
	name: 'Git/GitHub',
	icon: 'logos:github-icon',
	category: 'infrastructure',
	whiteBg: true,
	important: true
})
const minio = skill({ id: 'minio', name: 'MinIO', icon: 'simple-icons:minio', category: 'infrastructure' })
const resend = skill({ id: 'resend', name: 'Resend', icon: 'simple-icons:resend', category: 'infrastructure' })
const cloudflareR2 = skill({
	id: 'cloudflare-r2',
	name: 'Cloudflare R2',
	icon: 'simple-icons:cloudflare',
	category: 'infrastructure'
})

// --- Growth & Management ---
const seo = skill({ id: 'seo', name: 'SEO', icon: 'material-symbols:search', category: 'growth-management' })
const aeo = skill({ id: 'aeo', name: 'AEO', icon: 'material-symbols:auto-awesome', category: 'growth-management' })
const geo = skill({ id: 'geo', name: 'GEO', icon: 'material-symbols:public', category: 'growth-management' })
const jsonld = skill({
	id: 'json-ld',
	name: 'JSON-LD',
	icon: 'material-symbols:data-object',
	category: 'growth-management'
})
const googleAnalytics = skill({
	id: 'google-analytics',
	name: 'Google Analytics',
	icon: 'logos:google-analytics',
	category: 'growth-management'
})
const googleAds = skill({
	id: 'google-ads',
	name: 'Google Ads',
	icon: 'logos:google-ads',
	category: 'growth-management'
})
const gtm = skill({
	id: 'google-tag-manager',
	name: 'Google Tag Manager',
	icon: 'logos:google-tag-manager',
	category: 'growth-management'
})
const wordpress = skill({
	id: 'wordpress',
	name: 'WordPress',
	icon: 'simple-icons:wordpress',
	category: 'growth-management'
})
const woocommerce = skill({
	id: 'woocommerce',
	name: 'WooCommerce',
	icon: 'simple-icons:woocommerce',
	category: 'growth-management'
})

// Display order (grouped by category). The literal tuple is what derives SkillId.
const allSkills = [
	// frontend
	nextjs,
	nuxtjs,
	react,
	typescript,
	tailwindcss,
	shadcnui,
	css,
	radixui,
	baseui,
	framerMotion,
	emblaCarousel,
	tanstackQuery,
	lucide,
	heroicons,
	reactIcons,
	recharts,
	datefns,
	flutter,
	prettier,
	codemirror,
	// backend
	nodejs,
	nestjs,
	nats,
	python,
	elysia,
	sse,
	bun,
	postgresql,
	mongodb,
	mongoose,
	prisma,
	redis,
	supabase,
	bullmq,
	medusa,
	// infrastructure
	vercel,
	railway,
	docker,
	render,
	github,
	minio,
	resend,
	cloudflareR2,
	// growth & management
	seo,
	aeo,
	geo,
	jsonld,
	googleAnalytics,
	googleAds,
	gtm,
	wordpress,
	woocommerce
]

/** Every valid skill id — gives autocomplete + typo errors where projects list their skills. */
export type SkillId = (typeof allSkills)[number]['id']

export const skillsData: Skill[] = allSkills

/** Lookup a skill by id (used to resolve a project's skill ids). */
export const skillById = Object.fromEntries(skillsData.map(s => [s.id, s])) as Record<SkillId, Skill>
