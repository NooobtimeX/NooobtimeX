import { AbilityCategory } from '../enums'
import type { Ability } from '../interfaces'

// --- Category Metadata ---

export const categoryMetadata: Record<
	AbilityCategory,
	{ label: string; icon: string; description: string; color: string; shadow: string }
> = {
	[AbilityCategory.Frontend]: {
		label: 'Frontend',
		icon: 'material-symbols:laptop-chromebook',
		description: 'Modern web development and user interface abilities',
		color: '#3b82f6', // blue-500
		shadow: 'rgba(59, 130, 246, 0.5)'
	},
	[AbilityCategory.Backend]: {
		label: 'Backend',
		icon: 'material-symbols:database',
		description: 'Server-side development and database management',
		color: '#10b981', // emerald-500
		shadow: 'rgba(16, 185, 129, 0.5)'
	},
	[AbilityCategory.Infrastructure]: {
		label: 'Infrastructure',
		icon: 'material-symbols:cloud',
		description: 'Infrastructure, deployment, and cloud solutions',
		color: '#8b5cf6', // violet-500
		shadow: 'rgba(139, 92, 246, 0.5)'
	},
	[AbilityCategory.GrowthManagement]: {
		label: 'Growth & Management',
		icon: 'material-symbols:trending-up',
		description: 'Digital growth, marketing, and project management',
		color: '#f59e0b', // amber-500
		shadow: 'rgba(245, 158, 11, 0.5)'
	}
}

// --- Ability Definitions ---

// Frontend
const nextjs: Ability = {
	name: 'Next.js',
	icon: 'logos:nextjs-icon',
	category: AbilityCategory.Frontend,
	important: true
}

const nuxtjs: Ability = {
	name: 'Nuxt.js',
	icon: 'logos:nuxt-icon',
	category: AbilityCategory.Frontend
}

const react: Ability = {
	name: 'React',
	icon: 'logos:react',
	category: AbilityCategory.Frontend,
	important: true
}

const typescript: Ability = {
	name: 'TypeScript',
	icon: 'logos:typescript-icon',
	category: AbilityCategory.Frontend,
	important: true
}

const tailwindcss: Ability = {
	name: 'Tailwind CSS',
	icon: 'logos:tailwindcss-icon',
	category: AbilityCategory.Frontend,
	important: true
}

const shadcnui: Ability = {
	name: 'Shadcn/ui',
	icon: 'simple-icons:shadcnui',
	category: AbilityCategory.Frontend,
	important: true
}

const css: Ability = {
	name: 'CSS',
	icon: 'logos:css-3',
	category: AbilityCategory.Frontend
}

// Backend
const nodejs: Ability = {
	name: 'Node.js',
	icon: 'logos:nodejs-icon',
	category: AbilityCategory.Backend,
	important: true
}

const nestjs: Ability = {
	name: 'Nest.js',
	icon: 'logos:nestjs',
	category: AbilityCategory.Backend
}

const nats: Ability = {
	name: 'NATS',
	icon: 'logos:nats-icon',
	category: AbilityCategory.Backend
}

const python: Ability = {
	name: 'Python',
	icon: 'logos:python',
	category: AbilityCategory.Backend
}

const elysia: Ability = {
	name: 'Elysia.js',
	category: AbilityCategory.Backend,
	icon: 'material-symbols:flash-on',
	important: true
}

const sse: Ability = {
	name: 'SSE',
	icon: 'material-symbols:stream',
	category: AbilityCategory.Backend
}

const bun: Ability = {
	name: 'Bun.js',
	icon: 'logos:bun',
	category: AbilityCategory.Backend
}

const postgresql: Ability = {
	name: 'PostgreSQL',
	icon: 'logos:postgresql',
	category: AbilityCategory.Backend,
	important: true
}

const mongodb: Ability = {
	name: 'MongoDB',
	icon: 'logos:mongodb-icon',
	category: AbilityCategory.Backend,
	important: true
}

const prisma: Ability = {
	name: 'Prisma',
	icon: 'logos:prisma',
	category: AbilityCategory.Backend,
	whiteBg: true
}

const redis: Ability = {
	name: 'Redis',
	icon: 'logos:redis',
	category: AbilityCategory.Backend,
	important: true
}

const supabase: Ability = {
	name: 'Supabase',
	icon: 'logos:supabase-icon',
	category: AbilityCategory.Backend
}

// Infrastructure
const vercel: Ability = {
	name: 'Vercel',
	icon: 'logos:vercel-icon',
	category: AbilityCategory.Infrastructure,
	whiteBg: true,
	important: true
}

const railway: Ability = {
	name: 'Railway',
	icon: 'simple-icons:railway',
	category: AbilityCategory.Infrastructure
}

const docker: Ability = {
	name: 'Docker',
	icon: 'logos:docker-icon',
	category: AbilityCategory.Infrastructure,
	important: true
}

const render: Ability = {
	name: 'Render',
	icon: 'simple-icons:render',
	category: AbilityCategory.Infrastructure
}

const github: Ability = {
	name: 'Git/GitHub',
	icon: 'logos:github-icon',
	category: AbilityCategory.Infrastructure,
	whiteBg: true,
	important: true
}

const minio: Ability = {
	name: 'MinIO',
	category: AbilityCategory.Infrastructure,
	icon: 'simple-icons:minio'
}

const resend: Ability = {
	name: 'Resend',
	icon: 'simple-icons:resend',
	category: AbilityCategory.Infrastructure
}

// Growth & Management
const seo: Ability = {
	name: 'SEO',
	icon: 'material-symbols:search',
	category: AbilityCategory.GrowthManagement
}

const aeo: Ability = {
	name: 'AEO',
	icon: 'material-symbols:auto-awesome',
	category: AbilityCategory.GrowthManagement
}

const geo: Ability = {
	name: 'GEO',
	icon: 'material-symbols:public',
	category: AbilityCategory.GrowthManagement
}

const jsonld: Ability = {
	name: 'JSON-LD',
	icon: 'material-symbols:data-object',
	category: AbilityCategory.GrowthManagement
}

const googleAnalytics: Ability = {
	name: 'Google Analytics',
	icon: 'logos:google-analytics',
	category: AbilityCategory.GrowthManagement
}

const googleAds: Ability = {
	name: 'Google Ads',
	icon: 'logos:google-ads',
	category: AbilityCategory.GrowthManagement
}

const wordpress: Ability = {
	name: 'WordPress',
	icon: 'simple-icons:wordpress',
	category: AbilityCategory.GrowthManagement
}

const woocommerce: Ability = {
	name: 'WooCommerce',
	icon: 'simple-icons:woocommerce',
	category: AbilityCategory.GrowthManagement
}

// UI & Animation
const radixui: Ability = {
	name: 'Radix UI',
	icon: 'simple-icons:radixui',
	category: AbilityCategory.Frontend
}

const framerMotion: Ability = {
	name: 'Framer Motion',
	icon: 'logos:framer',
	category: AbilityCategory.Frontend
}

const emblaCarousel: Ability = {
	name: 'Embla Carousel',
	icon: 'carbon:carousel-horizontal',
	category: AbilityCategory.Frontend
}

const lucide: Ability = {
	name: 'Lucide Icons',
	icon: 'lucide:box',
	category: AbilityCategory.Frontend
}

const heroicons: Ability = {
	name: 'Heroicons',
	icon: 'logos:heroicons',
	category: AbilityCategory.Frontend
}

const reactIcons: Ability = {
	name: 'React Icons',
	icon: 'logos:react',
	category: AbilityCategory.Frontend
}

// Data & Analytics
const recharts: Ability = {
	name: 'Recharts',
	icon: 'simple-icons:recharts',
	category: AbilityCategory.Frontend
}

const gtm: Ability = {
	name: 'Google Tag Manager',
	icon: 'logos:google-tag-manager',
	category: AbilityCategory.GrowthManagement
}

const datefns: Ability = {
	name: 'date-fns',
	icon: 'logos:javascript',
	category: AbilityCategory.Frontend
}

export const abilitiesMap = {
	nextjs,
	nuxtjs,
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
	bun,
	postgresql,
	mongodb,
	prisma,
	redis,
	supabase,
	vercel,
	railway,
	docker,
	render,
	github,
	minio,
	resend,
	seo,
	aeo,
	geo,
	jsonld,
	googleAnalytics,
	googleAds,
	wordpress,
	woocommerce,
	radixui,
	framerMotion,
	emblaCarousel,
	lucide,
	heroicons,
	reactIcons,
	recharts,
	gtm,
	datefns
}

// Deprecated: Use abilitiesMap instead. Keeping for backward compatibility during transition.
export const skills = abilitiesMap

export const abilitiesData: Ability[] = [
	nextjs,
	nuxtjs,
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
	supabase,
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
	resend,
	radixui,
	framerMotion,
	recharts,
	emblaCarousel,
	lucide,
	heroicons,
	reactIcons,
	gtm,
	datefns
]

// Deprecated: Use abilitiesData instead.
export const orderedAbilities = abilitiesData
