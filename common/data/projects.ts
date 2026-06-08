import { EntityId, ProjectId } from '../enums'
import type { Project } from '../interfaces'
import { sortByDateDesc } from '../utils'
import { assets } from './assets'
import { skillsMap } from './skills'

export const looklookPet: Project = {
	id: ProjectId.LooklookPet,
	title: 'LOOKLOOK PET',
	description:
		'Architected a pet-parent community platform delivering a seamless user experience and integrated reward system. Engineered a robust backend featuring Redis-driven caching to handle complex data queries and reduce API response times.',
	images: {
		banner: assets.issues.looklookPet.banner,
		photos: [assets.issues.looklookPet.banner]
	},
	skills: [
		skillsMap.nextjs,
		skillsMap.vercel,
		skillsMap.tailwindcss,
		skillsMap.shadcnui,
		skillsMap.googleAds,
		skillsMap.seo,
		skillsMap.aeo,
		skillsMap.geo,
		skillsMap.jsonld
	],
	links: {
		live: 'https://looklook-pet.com'
	},
	startDate: '2024-05-01',
	linkedOrganizationId: EntityId.JasmineTechnologySolution
}

export const rsTrophy: Project = {
	id: ProjectId.RsTrophy,
	title: 'RS TROPHY (rs-trophy.com)',
	description:
		'Leading the digital transformation of a legacy business into a definitive "Community Hub" for the Thai awards industry. Architecting the consolidation of fragmented legacy brands into a unified, high-performance system utilizing Bun, Elysia.js, and Next.js. Transitioning toward a Serverless/Zero-Maintenance model with Redis caching and MinIO asset management.',
	images: {
		banner: assets.issues.rsTrophy.banner,
		photos: [assets.issues.rsTrophy.banner]
	},
	skills: [
		skillsMap.bun,
		skillsMap.elysia,
		skillsMap.nextjs,
		skillsMap.react,
		skillsMap.typescript,
		skillsMap.redis,
		skillsMap.minio,
		skillsMap.tailwindcss,
		skillsMap.shadcnui,
		skillsMap.docker,
		skillsMap.vercel,
		skillsMap.googleAds,
		skillsMap.googleAnalytics,
		skillsMap.seo,
		skillsMap.aeo,
		skillsMap.geo,
		skillsMap.jsonld
	],
	links: {
		live: 'https://rs-trophy.com'
	},
	startDate: '2026-03-01',
	linkedOrganizationId: EntityId.RuamsukPlating
}

export const rsTrophyV1: Project = {
	id: ProjectId.RsTrophyV1,
	title: 'RS TROPHY (Legacy WordPress)',
	description:
		'[LEGACY] The original e-commerce platform for RS TROPHY built on WordPress and WooCommerce. Managed the complete product catalog, customer orders, and digital marketing integrations before the transition to the modern high-performance system.',
	images: {
		banner: assets.issues.rsTrophyV1.banner,
		photos: [assets.issues.rsTrophyV1.banner]
	},
	skills: [skillsMap.wordpress, skillsMap.woocommerce, skillsMap.seo, skillsMap.googleAnalytics, skillsMap.googleAds],
	links: {
		live: 'https://rs-trophy.com'
	},
	startDate: '2023-01-01',
	linkedOrganizationId: EntityId.RuamsukPlating
}

export const onlinePokerGame: Project = {
	id: ProjectId.OnlinePokerGame,
	title: 'Online Poker Game',
	description:
		'A real-time multiplayer online poker game featuring Server-Sent Events for live updates. Built with Next.js and PostgreSQL for a seamless, interactive card gaming experience.',
	images: {
		banner: assets.issues.onlinePokerGame.banner,
		photos: [...assets.issues.onlinePokerGame.gallery]
	},
	skills: [
		skillsMap.nextjs,
		skillsMap.prisma,
		skillsMap.render,
		skillsMap.tailwindcss,
		skillsMap.sse,
		skillsMap.postgresql
	],
	links: {},
	startDate: '2025-03-01',
	linkedOrganizationId: EntityId.FreelanceBlitzwerk
}

export const tencentRailwayMigration: Project = {
	id: ProjectId.TencentRailwayMigration,
	title: 'Migration from Tencent VM (Prod and UAT split) to Railway',
	description:
		'Architected and executed the migration of 15+ microservices from Tencent Cloud VMs to Railway. Optimized deployment workflows by reusing a single Dockerfile with environment-specific configurations for Production and UAT splits. Managed complex environment setups for each service, integrating GitHub for CI/CD and MinIO for object storage.',
	images: {
		banner: assets.issues.tencentRailwayMigration.banner,
		photos: [assets.issues.tencentRailwayMigration.banner]
	},
	skills: [skillsMap.docker, skillsMap.railway, skillsMap.nodejs, skillsMap.github, skillsMap.minio],
	links: {},
	startDate: '2025-11-01',
	linkedOrganizationId: EntityId.JasmineTechnologySolution
}

export const prettierConfig: Project = {
	id: ProjectId.PrettierConfig,
	title: 'Prettier Config Generator',
	description: 'Generate your .prettierrc file effortlessly with this interactive Prettier configuration tool.',
	images: {
		banner: assets.issues.prettierConfig.banner,
		photos: [assets.issues.prettierConfig.banner]
	},
	skills: [skillsMap.nextjs, skillsMap.vercel, skillsMap.tailwindcss],
	links: {
		live: 'https://prettier-config-generator.com/'
	},
	startDate: '2025-07-09',
	linkedOrganizationId: EntityId.PersonalProjects
}

export const rsMedal: Project = {
	id: ProjectId.RsMedal,
	title: 'RS Medal (Legacy)',
	description:
		'[LEGACY] A medal showcase web application. This project has been succeeded by the unified RS TROPHY (rs-trophy.com) platform to provide a more robust and high-performance experience.',
	images: {
		banner: assets.issues.rsMedal.banner,
		photos: [assets.issues.rsMedal.banner]
	},
	skills: [skillsMap.nextjs, skillsMap.vercel, skillsMap.tailwindcss, skillsMap.shadcnui, skillsMap.googleAds],
	links: {
		live: 'https://www.rs-medal.com'
	},
	startDate: '2022-08-01',
	linkedOrganizationId: EntityId.RuamsukPlating
}

export const rsAward: Project = {
	id: ProjectId.RsAward,
	title: 'RS Award (Legacy)',
	description:
		'[LEGACY] A plaque showcase web application. This project has been succeeded by the unified RS TROPHY (rs-trophy.com) platform as part of a major digital transformation.',
	images: {
		banner: assets.issues.rsAward.banner,
		photos: [assets.issues.rsAward.banner]
	},
	skills: [skillsMap.nextjs, skillsMap.vercel, skillsMap.tailwindcss, skillsMap.shadcnui, skillsMap.googleAds],
	links: {
		live: 'https://www.rs-award.com'
	},
	startDate: '2022-03-01',
	linkedOrganizationId: EntityId.RuamsukPlating
}

export const qrFood: Project = {
	id: ProjectId.QrFood,
	title: 'QR-Food (Thesis Project)',
	description:
		'Developed a comprehensive QR-based food ordering and management system for restaurants. Features include real-time menu browsing, digital ordering, and a dashboard for restaurant owners to manage orders and kitchen workflows.',
	images: {
		banner: assets.issues.qrFood.banner,
		photos: [assets.issues.qrFood.banner]
	},
	skills: [
		skillsMap.nuxtjs,
		skillsMap.tailwindcss,
		skillsMap.prisma,
		skillsMap.supabase,
		skillsMap.postgresql,
		skillsMap.vercel
	],
	links: {
		live: 'https://github.com/NooobtimeX/QR-Food'
	},
	startDate: '2023-11-01',
	linkedOrganizationId: EntityId.ThammasatUniversity
}

export const portfolio: Project = {
	id: ProjectId.Portfolio,
	title: '🚀 Portfolio – Wongsaphat Puangsorn',
	description:
		'A professionalized, high-performance portfolio specialized in modern web development. Features a dynamic comic-book aesthetic, responsive navigation, and real-time data visualization of skills and affiliations.',
	images: {
		banner: assets.issues.portfolio.banner,
		photos: [assets.issues.portfolio.banner]
	},
	skills: [
		skillsMap.nextjs,
		skillsMap.tailwindcss,
		skillsMap.radixui,
		skillsMap.framerMotion,
		skillsMap.recharts,
		skillsMap.typescript,
		skillsMap.seo,
		skillsMap.aeo,
		skillsMap.geo,
		skillsMap.jsonld
	],
	links: {
		live: 'https://github.com/NooobtimeX/NooobtimeX'
	},
	startDate: '2021-01-01',
	linkedOrganizationId: EntityId.PersonalProjects
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

export const projectsData: Project[] = issues.sort(sortByDateDesc)
