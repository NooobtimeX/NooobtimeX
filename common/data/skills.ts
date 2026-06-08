import { SkillCategory } from '../enums'
import type { Skill } from '../interfaces'

// --- Category Metadata ---

export const categoryMetadata: Record<
	SkillCategory,
	{ label: string; icon: string; description: string; color: string; shadow: string }
> = {
	[SkillCategory.Frontend]: {
		label: 'Frontend',
		icon: 'material-symbols:laptop-chromebook',
		description: 'Modern web development and user interface skills',
		color: '#3b82f6', // blue-500
		shadow: 'rgba(59, 130, 246, 0.5)'
	},
	[SkillCategory.Backend]: {
		label: 'Backend',
		icon: 'material-symbols:database',
		description: 'Server-side development and database management',
		color: '#10b981', // emerald-500
		shadow: 'rgba(16, 185, 129, 0.5)'
	},
	[SkillCategory.Infrastructure]: {
		label: 'Infrastructure',
		icon: 'material-symbols:cloud',
		description: 'Infrastructure, deployment, and cloud solutions',
		color: '#8b5cf6', // violet-500
		shadow: 'rgba(139, 92, 246, 0.5)'
	},
	[SkillCategory.GrowthManagement]: {
		label: 'Growth & Management',
		icon: 'material-symbols:trending-up',
		description: 'Digital growth, marketing, and project management',
		color: '#f59e0b', // amber-500
		shadow: 'rgba(245, 158, 11, 0.5)'
	}
}

// --- Skill Definitions ---

// Frontend
const nextjs: Skill = {
	name: 'Next.js',
	icon: 'logos:nextjs-icon',
	category: SkillCategory.Frontend,
	important: true
}

const nuxtjs: Skill = {
	name: 'Nuxt.js',
	icon: 'logos:nuxt-icon',
	category: SkillCategory.Frontend
}

const react: Skill = {
	name: 'React',
	icon: 'logos:react',
	category: SkillCategory.Frontend,
	important: true
}

const typescript: Skill = {
	name: 'TypeScript',
	icon: 'logos:typescript-icon',
	category: SkillCategory.Frontend,
	important: true
}

const tailwindcss: Skill = {
	name: 'Tailwind CSS',
	icon: 'logos:tailwindcss-icon',
	category: SkillCategory.Frontend,
	important: true
}

const shadcnui: Skill = {
	name: 'Shadcn/ui',
	icon: 'simple-icons:shadcnui',
	category: SkillCategory.Frontend,
	important: true
}

const css: Skill = {
	name: 'CSS',
	icon: 'logos:css-3',
	category: SkillCategory.Frontend
}

// Backend
const nodejs: Skill = {
	name: 'Node.js',
	icon: 'logos:nodejs-icon',
	category: SkillCategory.Backend,
	important: true
}

const nestjs: Skill = {
	name: 'Nest.js',
	icon: 'logos:nestjs',
	category: SkillCategory.Backend
}

const nats: Skill = {
	name: 'NATS',
	icon: 'logos:nats-icon',
	category: SkillCategory.Backend
}

const python: Skill = {
	name: 'Python',
	icon: 'logos:python',
	category: SkillCategory.Backend
}

const elysia: Skill = {
	name: 'Elysia.js',
	category: SkillCategory.Backend,
	icon: 'material-symbols:flash-on',
	important: true
}

const sse: Skill = {
	name: 'SSE',
	icon: 'material-symbols:stream',
	category: SkillCategory.Backend
}

const bun: Skill = {
	name: 'Bun.js',
	icon: 'logos:bun',
	category: SkillCategory.Backend
}

const postgresql: Skill = {
	name: 'PostgreSQL',
	icon: 'logos:postgresql',
	category: SkillCategory.Backend,
	important: true
}

const mongodb: Skill = {
	name: 'MongoDB',
	icon: 'logos:mongodb-icon',
	category: SkillCategory.Backend,
	important: true
}

const prisma: Skill = {
	name: 'Prisma',
	icon: 'logos:prisma',
	category: SkillCategory.Backend,
	whiteBg: true
}

const redis: Skill = {
	name: 'Redis',
	icon: 'logos:redis',
	category: SkillCategory.Backend,
	important: true
}

const supabase: Skill = {
	name: 'Supabase',
	icon: 'logos:supabase-icon',
	category: SkillCategory.Backend
}

// Infrastructure
const vercel: Skill = {
	name: 'Vercel',
	icon: 'logos:vercel-icon',
	category: SkillCategory.Infrastructure,
	whiteBg: true,
	important: true
}

const railway: Skill = {
	name: 'Railway',
	icon: 'simple-icons:railway',
	category: SkillCategory.Infrastructure
}

const docker: Skill = {
	name: 'Docker',
	icon: 'logos:docker-icon',
	category: SkillCategory.Infrastructure,
	important: true
}

const render: Skill = {
	name: 'Render',
	icon: 'simple-icons:render',
	category: SkillCategory.Infrastructure
}

const github: Skill = {
	name: 'Git/GitHub',
	icon: 'logos:github-icon',
	category: SkillCategory.Infrastructure,
	whiteBg: true,
	important: true
}

const minio: Skill = {
	name: 'MinIO',
	category: SkillCategory.Infrastructure,
	icon: 'simple-icons:minio'
}

const resend: Skill = {
	name: 'Resend',
	icon: 'simple-icons:resend',
	category: SkillCategory.Infrastructure
}

// Growth & Management
const seo: Skill = {
	name: 'SEO',
	icon: 'material-symbols:search',
	category: SkillCategory.GrowthManagement
}

const aeo: Skill = {
	name: 'AEO',
	icon: 'material-symbols:auto-awesome',
	category: SkillCategory.GrowthManagement
}

const geo: Skill = {
	name: 'GEO',
	icon: 'material-symbols:public',
	category: SkillCategory.GrowthManagement
}

const jsonld: Skill = {
	name: 'JSON-LD',
	icon: 'material-symbols:data-object',
	category: SkillCategory.GrowthManagement
}

const googleAnalytics: Skill = {
	name: 'Google Analytics',
	icon: 'logos:google-analytics',
	category: SkillCategory.GrowthManagement
}

const googleAds: Skill = {
	name: 'Google Ads',
	icon: 'logos:google-ads',
	category: SkillCategory.GrowthManagement
}

const wordpress: Skill = {
	name: 'WordPress',
	icon: 'simple-icons:wordpress',
	category: SkillCategory.GrowthManagement
}

const woocommerce: Skill = {
	name: 'WooCommerce',
	icon: 'simple-icons:woocommerce',
	category: SkillCategory.GrowthManagement
}

// UI & Animation
const radixui: Skill = {
	name: 'Radix UI',
	icon: 'simple-icons:radixui',
	category: SkillCategory.Frontend
}

const framerMotion: Skill = {
	name: 'Framer Motion',
	icon: 'logos:framer',
	category: SkillCategory.Frontend
}

const emblaCarousel: Skill = {
	name: 'Embla Carousel',
	icon: 'carbon:carousel-horizontal',
	category: SkillCategory.Frontend
}

const lucide: Skill = {
	name: 'Lucide Icons',
	icon: 'lucide:box',
	category: SkillCategory.Frontend
}

const heroicons: Skill = {
	name: 'Heroicons',
	icon: 'logos:heroicons',
	category: SkillCategory.Frontend
}

const reactIcons: Skill = {
	name: 'React Icons',
	icon: 'logos:react',
	category: SkillCategory.Frontend
}

// Data & Analytics
const recharts: Skill = {
	name: 'Recharts',
	icon: 'simple-icons:recharts',
	category: SkillCategory.Frontend
}

const gtm: Skill = {
	name: 'Google Tag Manager',
	icon: 'logos:google-tag-manager',
	category: SkillCategory.GrowthManagement
}

const datefns: Skill = {
	name: 'date-fns',
	icon: 'logos:javascript',
	category: SkillCategory.Frontend
}

// --- Newly added skills (placeholder icons — TODO: replace with custom image) ---
const prettier: Skill = {
	name: 'Prettier',
	icon: 'logos:prettier', // TODO: custom image
	category: SkillCategory.Frontend
}

const codemirror: Skill = {
	name: 'CodeMirror',
	icon: 'simple-icons:codemirror', // TODO: custom image
	category: SkillCategory.Frontend
}

const baseui: Skill = {
	name: 'Base UI',
	icon: 'mdi:cube-outline', // TODO: custom image
	category: SkillCategory.Frontend
}

const tanstackQuery: Skill = {
	name: 'TanStack Query',
	icon: 'logos:react-query-icon', // TODO: custom image
	category: SkillCategory.Frontend
}

const reactNative: Skill = {
	name: 'React Native',
	icon: 'tabler:brand-react-native', // TODO: custom image
	category: SkillCategory.Frontend
}

const mongoose: Skill = {
	name: 'Mongoose',
	icon: 'simple-icons:mongoose', // TODO: custom image
	category: SkillCategory.Backend
}

const bullmq: Skill = {
	name: 'BullMQ',
	icon: 'mdi:format-list-numbered', // TODO: custom image
	category: SkillCategory.Backend
}

const medusa: Skill = {
	name: 'Medusa',
	icon: 'simple-icons:medusa', // TODO: custom image
	category: SkillCategory.Backend
}

const cloudflareR2: Skill = {
	name: 'Cloudflare R2',
	icon: 'simple-icons:cloudflare', // TODO: custom image
	category: SkillCategory.Infrastructure
}

export const skillsMap = {
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
	datefns,
	prettier,
	codemirror,
	baseui,
	tanstackQuery,
	reactNative,
	mongoose,
	bullmq,
	medusa,
	cloudflareR2
}

// Deprecated: Use skillsMap instead. Keeping for backward compatibility during transition.
export const skills = skillsMap

export const skillsData: Skill[] = [
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
	datefns,
	aeo,
	geo,
	jsonld,
	prettier,
	codemirror,
	baseui,
	tanstackQuery,
	reactNative,
	mongoose,
	bullmq,
	medusa,
	cloudflareR2
]

// Deprecated: Use skillsData instead.
export const orderedSkills = skillsData
