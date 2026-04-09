import { AbilityCategory, AbilityLevel } from '@/common/enums'
import type { Ability, AbilityGroup, Issue } from '@/common/interfaces'

// --- Category Metadata ---

export const categoryMetadata: Record<
	AbilityCategory,
	{ icon: string; description: string; color: string; shadow: string }
> = {
	[AbilityCategory.Frontend]: {
		icon: 'material-symbols:laptop-chromebook',
		description: 'Modern web development and user interface abilities',
		color: '#3b82f6', // blue-500
		shadow: 'rgba(59, 130, 246, 0.5)'
	},
	[AbilityCategory.Backend]: {
		icon: 'material-symbols:database',
		description: 'Server-side development and database management',
		color: '#10b981', // emerald-500
		shadow: 'rgba(16, 185, 129, 0.5)'
	},
	[AbilityCategory.Infrastructure]: {
		icon: 'material-symbols:cloud',
		description: 'Infrastructure, deployment, and cloud solutions',
		color: '#8b5cf6', // violet-500
		shadow: 'rgba(139, 92, 246, 0.5)'
	},
	[AbilityCategory.GrowthManagement]: {
		icon: 'material-symbols:trending-up',
		description: 'Digital growth, marketing, and project management',
		color: '#f59e0b', // amber-500
		shadow: 'rgba(245, 158, 11, 0.5)'
	}
}

// --- Ability Definitions ---

// Frontend
export const nextjs: Ability = {
	name: 'Next.js',
	icon: 'logos:nextjs-icon',
	category: AbilityCategory.Frontend,
	level: AbilityLevel.Expert,
	important: true
}

export const nuxtjs: Ability = {
	name: 'Nuxt.js',
	icon: 'logos:nuxt-icon',
	category: AbilityCategory.Frontend,
	level: AbilityLevel.Advanced
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

export const supabase: Ability = {
	name: 'Supabase',
	icon: 'logos:supabase-icon',
	category: AbilityCategory.Backend,
	level: AbilityLevel.Advanced
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

export const aeo: Ability = {
	name: 'AEO',
	icon: 'material-symbols:auto-awesome',
	category: AbilityCategory.GrowthManagement,
	level: AbilityLevel.Advanced
}

export const geo: Ability = {
	name: 'GEO',
	icon: 'material-symbols:public',
	category: AbilityCategory.GrowthManagement,
	level: AbilityLevel.Intermediate
}

export const jsonld: Ability = {
	name: 'JSON-LD',
	icon: 'material-symbols:data-object',
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

// UI & Animation
export const radixui: Ability = {
	name: 'Radix UI',
	icon: 'simple-icons:radixui',
	category: AbilityCategory.Frontend,
	level: AbilityLevel.Advanced
}

export const framerMotion: Ability = {
	name: 'Framer Motion',
	icon: 'logos:framer',
	category: AbilityCategory.Frontend,
	level: AbilityLevel.Advanced
}

export const emblaCarousel: Ability = {
	name: 'Embla Carousel',
	icon: 'carbon:carousel-horizontal',
	category: AbilityCategory.Frontend,
	level: AbilityLevel.Intermediate
}

export const lucide: Ability = {
	name: 'Lucide Icons',
	icon: 'lucide:box',
	category: AbilityCategory.Frontend,
	level: AbilityLevel.Expert
}

export const heroicons: Ability = {
	name: 'Heroicons',
	icon: 'logos:heroicons',
	category: AbilityCategory.Frontend,
	level: AbilityLevel.Expert
}

export const reactIcons: Ability = {
	name: 'React Icons',
	icon: 'logos:react',
	category: AbilityCategory.Frontend,
	level: AbilityLevel.Expert
}

// Data & Analytics
export const recharts: Ability = {
	name: 'Recharts',
	icon: 'simple-icons:recharts',
	category: AbilityCategory.Frontend,
	level: AbilityLevel.Advanced
}

export const gtm: Ability = {
	name: 'Google Tag Manager',
	icon: 'logos:google-tag-manager',
	category: AbilityCategory.GrowthManagement,
	level: AbilityLevel.Advanced
}

export const datefns: Ability = {
	name: 'date-fns',
	icon: 'logos:javascript',
	category: AbilityCategory.Frontend,
	level: AbilityLevel.Advanced
}

export const orderedAbilities: Ability[] = [
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

// --- Dynamic Logic ---

export const getDynamicAbilities = (issuesData: Issue[]): AbilityGroup[] => {
	const abilityOrderMap = new Map<string, number>()
	orderedAbilities.forEach((ability, index) => {
		abilityOrderMap.set(ability.name, index)
	})

	const allAbilities: Ability[] = []
	const abilityFrequency = new Map<string, number>()

	// Collect from issues
	issuesData.forEach(issue => {
		issue.abilities.forEach(ability => {
			allAbilities.push(ability)
			abilityFrequency.set(ability.name, (abilityFrequency.get(ability.name) || 0) + 1)
		})
	})

	// Filter unique abilities by name
	const uniqueAbilitiesMap = new Map<string, Ability>()
	allAbilities.forEach(ability => {
		if (!uniqueAbilitiesMap.has(ability.name)) {
			uniqueAbilitiesMap.set(ability.name, ability)
		}
	})

	const uniqueAbilities = Array.from(uniqueAbilitiesMap.values())

	// Group by category
	const grouped = Object.values(AbilityCategory).map(category => {
		// Get abilities and sort by manual order first, then frequency
		const abilitiesInCategory = uniqueAbilities
			.filter(a => a.category === category)
			.sort((a, b) => {
				const orderA = abilityOrderMap.get(a.name) ?? 999
				const orderB = abilityOrderMap.get(b.name) ?? 999

				if (orderA !== orderB) return orderA - orderB

				const freqA = abilityFrequency.get(a.name) || 0
				const freqB = abilityFrequency.get(b.name) || 0
				return freqB - freqA
			})

		const metadata = categoryMetadata[category]

		// Calculate total frequency for this category to determine group sorting
		const totalCategoryFrequency = abilitiesInCategory.reduce((sum, a) => sum + (abilityFrequency.get(a.name) || 0), 0)

		// Calculate min order for this category to determine group sorting
		const minOrder = Math.min(...abilitiesInCategory.map(a => abilityOrderMap.get(a.name) ?? 999))

		return {
			category,
			description: metadata.description,
			icon: metadata.icon,
			abilities: abilitiesInCategory,
			totalFrequency: totalCategoryFrequency,
			minOrder
		}
	})

	// Filter out categories with no abilities and sort by minOrder (ascending)
	return grouped.filter(group => group.abilities.length > 0).sort((a, b) => a.minOrder - b.minOrder)
}
