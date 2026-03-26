import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

// Frontend
export const nextjs: Ability = {
	name: 'Next.js',
	icon: 'logos:nextjs-icon',
	category: AbilityCategory.Frontend,
	level: AbilityLevel.Expert,
	important: true
}

export const react: Ability = {
	name: 'React',
	icon: 'logos:react',
	category: AbilityCategory.Frontend,
	level: AbilityLevel.Expert,
	important: true
}

export const typescript: Ability = {
	name: 'TypeScript',
	icon: 'logos:typescript-icon',
	category: AbilityCategory.Frontend,
	level: AbilityLevel.Expert,
	important: true
}

export const tailwindcss: Ability = {
	name: 'Tailwind CSS',
	icon: 'logos:tailwindcss-icon',
	category: AbilityCategory.Frontend,
	level: AbilityLevel.Expert,
	important: true
}

export const shadcnui: Ability = {
	name: 'Shadcn/ui',
	icon: 'simple-icons:shadcnui',
	category: AbilityCategory.Frontend,
	level: AbilityLevel.Advanced,
	important: true
}

export const css: Ability = {
	name: 'CSS',
	icon: 'logos:css-3',
	category: AbilityCategory.Frontend,
	level: AbilityLevel.Advanced
}

// Backend
export const nodejs: Ability = {
	name: 'Node.js',
	icon: 'logos:nodejs-icon',
	category: AbilityCategory.Backend,
	level: AbilityLevel.Advanced,
	important: true
}

export const nestjs: Ability = {
	name: 'Nest.js',
	icon: 'logos:nestjs',
	category: AbilityCategory.Backend,
	level: AbilityLevel.Advanced
}

export const nats: Ability = {
	name: 'NATS',
	icon: 'logos:nats-icon',
	category: AbilityCategory.Backend,
	level: AbilityLevel.Intermediate
}

export const python: Ability = {
	name: 'Python',
	icon: 'logos:python',
	category: AbilityCategory.Backend,
	level: AbilityLevel.Intermediate
}

export const elysia: Ability = {
	name: 'Elysia.js',
	category: AbilityCategory.Backend,
	level: AbilityLevel.Intermediate,
	icon: 'material-symbols:flash-on',
	important: true
}

export const sse: Ability = {
	name: 'SSE',
	icon: 'material-symbols:stream',
	category: AbilityCategory.Backend,
	level: AbilityLevel.Intermediate
}

export const bun: Ability = {
	name: 'Bun.js',
	icon: 'logos:bun',
	category: AbilityCategory.Backend,
	level: AbilityLevel.Intermediate
}

export const postgresql: Ability = {
	name: 'PostgreSQL',
	icon: 'logos:postgresql',
	category: AbilityCategory.Backend,
	level: AbilityLevel.Advanced,
	important: true
}

export const mongodb: Ability = {
	name: 'MongoDB',
	icon: 'logos:mongodb-icon',
	category: AbilityCategory.Backend,
	level: AbilityLevel.Intermediate,
	important: true
}

export const prisma: Ability = {
	name: 'Prisma',
	icon: 'logos:prisma',
	category: AbilityCategory.Backend,
	level: AbilityLevel.Advanced,
	whiteBg: true
}

export const redis: Ability = {
	name: 'Redis',
	icon: 'logos:redis',
	category: AbilityCategory.Backend,
	level: AbilityLevel.Intermediate,
	important: true
}

// Infrastructure
export const vercel: Ability = {
	name: 'Vercel',
	icon: 'logos:vercel-icon',
	category: AbilityCategory.Infrastructure,
	level: AbilityLevel.Advanced,
	whiteBg: true,
	important: true
}

export const railway: Ability = {
	name: 'Railway',
	icon: 'simple-icons:railway',
	category: AbilityCategory.Infrastructure,
	level: AbilityLevel.Intermediate
}

export const docker: Ability = {
	name: 'Docker',
	icon: 'logos:docker-icon',
	category: AbilityCategory.Infrastructure,
	level: AbilityLevel.Advanced,
	important: true
}

export const render: Ability = {
	name: 'Render',
	icon: 'simple-icons:render',
	category: AbilityCategory.Infrastructure,
	level: AbilityLevel.Intermediate
}

export const github: Ability = {
	name: 'Git/GitHub',
	icon: 'logos:github-icon',
	category: AbilityCategory.Infrastructure,
	level: AbilityLevel.Advanced,
	whiteBg: true,
	important: true
}

export const minio: Ability = {
	name: 'MinIO',
	category: AbilityCategory.Infrastructure,
	level: AbilityLevel.Intermediate,
	icon: 'simple-icons:minio'
}

export const n8n: Ability = {
	name: 'n8n',
	icon: 'simple-icons:n8n',
	category: AbilityCategory.Infrastructure,
	level: AbilityLevel.Expert
}

export const resend: Ability = {
	name: 'Resend',
	icon: 'simple-icons:resend',
	category: AbilityCategory.Infrastructure,
	level: AbilityLevel.Expert
}

// Growth & Management
export const seo: Ability = {
	name: 'SEO',
	icon: 'material-symbols:search',
	category: AbilityCategory.GrowthManagement,
	level: AbilityLevel.Advanced
}

export const googleAnalytics: Ability = {
	name: 'Google Analytics',
	icon: 'logos:google-analytics',
	category: AbilityCategory.GrowthManagement,
	level: AbilityLevel.Intermediate
}

export const googleAds: Ability = {
	name: 'Google Ads',
	icon: 'logos:google-ads',
	category: AbilityCategory.GrowthManagement,
	level: AbilityLevel.Intermediate
}

export const wordpress: Ability = {
	name: 'WordPress',
	icon: 'simple-icons:wordpress',
	category: AbilityCategory.GrowthManagement,
	level: AbilityLevel.Expert
}

export const woocommerce: Ability = {
	name: 'WooCommerce',
	icon: 'simple-icons:woocommerce',
	category: AbilityCategory.GrowthManagement,
	level: AbilityLevel.Expert
}

export const orderedAbilities = [
	nextjs,
	react,
	typescript,
	tailwindcss,
	shadcnui,
	css,
	nodejs,
	nestjs,
	nats,
	python,
	elysia,
	sse,
	minio,
	bun,
	postgresql,
	mongodb,
	prisma,
	redis,
	vercel,
	railway,
	docker,
	render,
	github,
	seo,
	googleAnalytics,
	googleAds,
	wordpress,
	woocommerce,
	n8n,
	resend
]
