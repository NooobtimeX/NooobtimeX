import { EntityId, IssueId } from '../enums'
import type { Issue } from '../interfaces'
import { sortByDateDesc } from '../utils'
import { abilitiesMap } from './abilities'
import { assets } from './assets'

export const looklookPet: Issue = {
	id: IssueId.LooklookPet,
	title: 'LOOKLOOK PET',
	description:
		'Architected a pet-parent community platform delivering a seamless user experience and integrated reward system. Engineered a robust backend featuring Redis-driven caching to handle complex data queries and reduce API response times.',
	images: {
		banner: assets.issues.looklookPet.banner,
		photos: [assets.issues.looklookPet.banner]
	},
	abilities: [
		abilitiesMap.nextjs,
		abilitiesMap.vercel,
		abilitiesMap.tailwindcss,
		abilitiesMap.shadcnui,
		abilitiesMap.googleAds,
		abilitiesMap.seo,
		abilitiesMap.aeo,
		abilitiesMap.geo,
		abilitiesMap.jsonld
	],
	links: {
		live: 'https://looklook-pet.com'
	},
	startDate: '2024-05-01',
	linkedAffiliationId: EntityId.JasmineTechnologySolution
}

export const rsTrophy: Issue = {
	id: IssueId.RsTrophy,
	title: 'RS TROPHY (rs-trophy.com)',
	description:
		'Leading the digital transformation of a legacy business into a definitive "Community Hub" for the Thai awards industry. Architecting the consolidation of fragmented legacy brands into a unified, high-performance system utilizing Bun, Elysia.js, and Next.js. Transitioning toward a Serverless/Zero-Maintenance model with Redis caching and MinIO asset management.',
	images: {
		banner: assets.issues.rsTrophy.banner,
		photos: [assets.issues.rsTrophy.banner]
	},
	abilities: [
		abilitiesMap.bun,
		abilitiesMap.elysia,
		abilitiesMap.nextjs,
		abilitiesMap.react,
		abilitiesMap.typescript,
		abilitiesMap.redis,
		abilitiesMap.minio,
		abilitiesMap.tailwindcss,
		abilitiesMap.shadcnui,
		abilitiesMap.docker,
		abilitiesMap.vercel,
		abilitiesMap.googleAds,
		abilitiesMap.googleAnalytics,
		abilitiesMap.seo,
		abilitiesMap.aeo,
		abilitiesMap.geo,
		abilitiesMap.jsonld
	],
	links: {
		live: 'https://rs-trophy.com'
	},
	startDate: '2026-03-01',
	linkedAffiliationId: EntityId.RuamsukPlating
}

export const rsTrophyV1: Issue = {
	id: IssueId.RsTrophyV1,
	title: 'RS TROPHY (Legacy WordPress)',
	description:
		'[LEGACY] The original e-commerce platform for RS TROPHY built on WordPress and WooCommerce. Managed the complete product catalog, customer orders, and digital marketing integrations before the transition to the modern high-performance system.',
	images: {
		banner: assets.issues.rsTrophyV1.banner,
		photos: [assets.issues.rsTrophyV1.banner]
	},
	abilities: [
		abilitiesMap.wordpress,
		abilitiesMap.woocommerce,
		abilitiesMap.seo,
		abilitiesMap.googleAnalytics,
		abilitiesMap.googleAds
	],
	links: {
		live: 'https://rs-trophy.com'
	},
	startDate: '2023-01-01',
	linkedAffiliationId: EntityId.RuamsukPlating
}

export const onlinePokerGame: Issue = {
	id: IssueId.OnlinePokerGame,
	title: 'Online Poker Game',
	description:
		'A real-time multiplayer online poker game featuring Server-Sent Events for live updates. Built with Next.js and PostgreSQL for a seamless, interactive card gaming experience.',
	images: {
		banner: assets.issues.onlinePokerGame.banner,
		photos: [...assets.issues.onlinePokerGame.gallery]
	},
	abilities: [
		abilitiesMap.nextjs,
		abilitiesMap.prisma,
		abilitiesMap.render,
		abilitiesMap.tailwindcss,
		abilitiesMap.sse,
		abilitiesMap.postgresql
	],
	links: {},
	startDate: '2025-03-01',
	linkedAffiliationId: EntityId.FreelanceBlitzwerk
}

export const tencentRailwayMigration: Issue = {
	id: IssueId.TencentRailwayMigration,
	title: 'Migration from Tencent VM (Prod and UAT split) to Railway',
	description:
		'Architected and executed the migration of 15+ microservices from Tencent Cloud VMs to Railway. Optimized deployment workflows by reusing a single Dockerfile with environment-specific configurations for Production and UAT splits. Managed complex environment setups for each service, integrating GitHub for CI/CD and MinIO for object storage.',
	images: {
		banner: assets.issues.tencentRailwayMigration.banner,
		photos: [assets.issues.tencentRailwayMigration.banner]
	},
	abilities: [abilitiesMap.docker, abilitiesMap.railway, abilitiesMap.nodejs, abilitiesMap.github, abilitiesMap.minio],
	links: {},
	startDate: '2025-11-01',
	linkedAffiliationId: EntityId.JasmineTechnologySolution
}

export const prettierConfig: Issue = {
	id: IssueId.PrettierConfig,
	title: 'Prettier Config Generator',
	description: 'Generate your .prettierrc file effortlessly with this interactive Prettier configuration tool.',
	images: {
		banner: assets.issues.prettierConfig.banner,
		photos: [assets.issues.prettierConfig.banner]
	},
	abilities: [abilitiesMap.nextjs, abilitiesMap.vercel, abilitiesMap.tailwindcss],
	links: {
		live: 'https://prettier-config-generator.com/'
	},
	startDate: '2025-07-09',
	linkedAffiliationId: EntityId.PersonalProjects
}

export const rsMedal: Issue = {
	id: IssueId.RsMedal,
	title: 'RS Medal (Legacy)',
	description:
		'[LEGACY] A medal showcase web application. This project has been succeeded by the unified RS TROPHY (rs-trophy.com) platform to provide a more robust and high-performance experience.',
	images: {
		banner: assets.issues.rsMedal.banner,
		photos: [assets.issues.rsMedal.banner]
	},
	abilities: [
		abilitiesMap.nextjs,
		abilitiesMap.vercel,
		abilitiesMap.tailwindcss,
		abilitiesMap.shadcnui,
		abilitiesMap.googleAds
	],
	links: {
		live: 'https://www.rs-medal.com'
	},
	startDate: '2022-08-01',
	linkedAffiliationId: EntityId.RuamsukPlating
}

export const rsAward: Issue = {
	id: IssueId.RsAward,
	title: 'RS Award (Legacy)',
	description:
		'[LEGACY] A plaque showcase web application. This project has been succeeded by the unified RS TROPHY (rs-trophy.com) platform as part of a major digital transformation.',
	images: {
		banner: assets.issues.rsAward.banner,
		photos: [assets.issues.rsAward.banner]
	},
	abilities: [
		abilitiesMap.nextjs,
		abilitiesMap.vercel,
		abilitiesMap.tailwindcss,
		abilitiesMap.shadcnui,
		abilitiesMap.googleAds
	],
	links: {
		live: 'https://www.rs-award.com'
	},
	startDate: '2022-03-01',
	linkedAffiliationId: EntityId.RuamsukPlating
}

export const qrFood: Issue = {
	id: IssueId.QrFood,
	title: 'QR-Food (Thesis Project)',
	description:
		'Developed a comprehensive QR-based food ordering and management system for restaurants. Features include real-time menu browsing, digital ordering, and a dashboard for restaurant owners to manage orders and kitchen workflows.',
	images: {
		banner: assets.issues.qrFood.banner,
		photos: [assets.issues.qrFood.banner]
	},
	abilities: [
		abilitiesMap.nuxtjs,
		abilitiesMap.tailwindcss,
		abilitiesMap.prisma,
		abilitiesMap.supabase,
		abilitiesMap.postgresql,
		abilitiesMap.vercel
	],
	links: {
		live: 'https://github.com/NooobtimeX/QR-Food'
	},
	startDate: '2023-11-01',
	linkedAffiliationId: EntityId.ThammasatUniversity
}

export const portfolio: Issue = {
	id: IssueId.Portfolio,
	title: '🚀 Portfolio – Wongsaphat Puangsorn',
	description:
		'A professionalized, high-performance portfolio specialized in modern web development. Features a dynamic comic-book aesthetic, responsive navigation, and real-time data visualization of skills and affiliations.',
	images: {
		banner: assets.issues.portfolio.banner,
		photos: [assets.issues.portfolio.banner]
	},
	abilities: [
		abilitiesMap.nextjs,
		abilitiesMap.tailwindcss,
		abilitiesMap.radixui,
		abilitiesMap.framerMotion,
		abilitiesMap.recharts,
		abilitiesMap.typescript,
		abilitiesMap.seo,
		abilitiesMap.aeo,
		abilitiesMap.geo,
		abilitiesMap.jsonld
	],
	links: {
		live: 'https://github.com/NooobtimeX/NooobtimeX'
	},
	startDate: '2021-01-01',
	linkedAffiliationId: EntityId.PersonalProjects
}

const issues = [
	rsTrophy,
	tencentRailwayMigration,
	looklookPet,
	onlinePokerGame,
	prettierConfig,
	rsTrophyV1,
	rsAward,
	rsMedal,
	portfolio,
	qrFood
]

export const issuesData: Issue[] = issues.sort(sortByDateDesc)
