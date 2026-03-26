import { assets } from '@/common/data/assets'
import { AffiliationId } from '@/common/enum'
import type { Issue } from '@/common/interface'
import {
	bun,
	docker,
	elysia,
	github,
	googleAds,
	googleAnalytics,
	minio,
	n8n,
	nextjs,
	nodejs,
	postgresql,
	prisma,
	railway,
	react,
	redis,
	render,
	resend,
	seo,
	shadcnui,
	sse,
	tailwindcss,
	typescript,
	vercel,
	woocommerce,
	wordpress
} from './../ability/abilities'

export const looklookPet: Issue = {
	id: 'looklook-pet',
	title: 'LOOKLOOK PET',
	description:
		'Architected a pet-parent community platform delivering a seamless user experience and integrated reward system. Engineered a robust backend featuring Redis-driven caching to handle complex data queries and reduce API response times.',
	images: {
		banner: assets.issues.looklookPet.banner,
		photos: [assets.issues.looklookPet.banner]
	},
	abilities: [nextjs, vercel, tailwindcss, shadcnui, googleAds],
	links: {
		live: 'https://looklook-pet.com'
	},
	startDate: '2024-05-01',
	linkedAffiliationId: AffiliationId.JasmineTechnologySolution
}

export const rsTrophy: Issue = {
	id: 'rs-trophy',
	title: 'RS TROPHY (rs-trophy.com)',
	description:
		'Leading the digital transformation of a legacy business into a definitive "Community Hub" for the Thai awards industry. Architecting the consolidation of fragmented legacy brands into a unified, high-performance system utilizing Bun, Elysia.js, and Next.js. Transitioning toward a Serverless/Zero-Maintenance model with Redis caching and MinIO asset management.',
	images: {
		banner: assets.issues.rsTrophy.banner,
		photos: [assets.issues.rsTrophy.banner]
	},
	abilities: [
		bun,
		elysia,
		nextjs,
		react,
		typescript,
		redis,
		minio,
		tailwindcss,
		shadcnui,
		docker,
		vercel,
		googleAds,
		googleAnalytics
	],
	links: {
		live: 'https://rs-trophy.com'
	},
	startDate: '2026-03-01',
	linkedAffiliationId: AffiliationId.RuamsukPlatingTechnicalAdvisor
}

export const rsTrophyV1: Issue = {
	id: 'rs-trophy-v1',
	title: 'RS TROPHY (Legacy WordPress)',
	description:
		'[LEGACY] The original e-commerce platform for RS TROPHY built on WordPress and WooCommerce. Managed the complete product catalog, customer orders, and digital marketing integrations before the transition to the modern high-performance system.',
	images: {
		banner: assets.issues.rsTrophyV1.banner,
		photos: [assets.issues.rsTrophyV1.banner]
	},
	abilities: [wordpress, woocommerce, seo, googleAnalytics, googleAds],
	links: {
		live: 'https://rs-trophy.com'
	},
	startDate: '2023-01-01',
	linkedAffiliationId: AffiliationId.RuamsukPlatingSoftwareEngineerPartTime
}

export const onlinePokerGame: Issue = {
	id: 'online-poker-game',
	title: 'Online Poker Game',
	description:
		'A real-time multiplayer online poker game featuring Server-Sent Events for live updates. Built with Next.js and PostgreSQL for a seamless, interactive card gaming experience.',
	images: {
		banner: assets.issues.onlinePokerGame.banner,
		photos: [...assets.issues.onlinePokerGame.gallery]
	},
	abilities: [nextjs, prisma, render, tailwindcss, sse, postgresql],
	links: {},
	startDate: '2025-03-01',
	linkedAffiliationId: AffiliationId.FreelanceBlitzwerk
}

export const n8nRailway: Issue = {
	id: 'n8n-railway',
	title: 'n8n + Railway',
	description:
		'Architected and deployed a self-hosted n8n automation engine on Railway utilizing Docker containers. Developed custom automated workflows to streamline internal business processes, lead management, and cross-platform data synchronization, resulting in a significant reduction in manual operational tasks.',
	images: {
		banner: assets.issues.n8nRailway.banner,
		photos: [assets.issues.n8nRailway.banner]
	},
	abilities: [n8n, railway, docker, nodejs, resend],
	links: {},
	startDate: '2025-06-15',
	linkedAffiliationId: AffiliationId.RuamsukPlatingSoftwareEngineerFullTime
}

export const tencentRailwayMigration: Issue = {
	id: 'tencent-railway-migration',
	title: 'Migration from Tencent VM (Prod and UAT split) to Railway',
	description:
		'Architected and executed the migration of 15+ microservices from Tencent Cloud VMs to Railway. Optimized deployment workflows by reusing a single Dockerfile with environment-specific configurations for Production and UAT splits. Managed complex environment setups for each service, integrating GitHub for CI/CD and MinIO for object storage.',
	images: {
		banner: assets.issues.tencentRailwayMigration.banner,
		photos: [assets.issues.tencentRailwayMigration.banner]
	},
	abilities: [docker, railway, nodejs, github, minio],
	links: {},
	startDate: '2025-11-01',
	linkedAffiliationId: AffiliationId.JasmineTechnologySolution
}

export const prettierConfig: Issue = {
	id: 'prettier-config',
	title: 'Prettier Config Generator',
	description: 'Generate your .prettierrc file effortlessly with this interactive Prettier configuration tool.',
	images: {
		banner: assets.issues.prettierConfig.banner,
		photos: [assets.issues.prettierConfig.banner]
	},
	abilities: [nextjs, vercel, tailwindcss],
	links: {
		live: 'https://prettier-config-generator.com/'
	},
	startDate: '2025-07-11',
	linkedAffiliationId: AffiliationId.PersonalProjects
}

export const rsMedal: Issue = {
	id: 'rs-medal',
	title: 'RS Medal (Legacy)',
	description:
		'[LEGACY] A medal showcase web application. This project has been succeeded by the unified RS TROPHY (rs-trophy.com) platform to provide a more robust and high-performance experience.',
	images: {
		banner: assets.issues.rsMedal.banner,
		photos: [assets.issues.rsMedal.banner]
	},
	abilities: [nextjs, vercel, tailwindcss, shadcnui, googleAds],
	links: {
		live: 'https://www.rs-medal.com'
	},
	startDate: '2022-08-01',
	linkedAffiliationId: AffiliationId.RuamsukPlatingSoftwareEngineerPartTime
}

export const rsAward: Issue = {
	id: 'rs-award',
	title: 'RS Award (Legacy)',
	description:
		'[LEGACY] A plaque showcase web application. This project has been succeeded by the unified RS TROPHY (rs-trophy.com) platform as part of a major digital transformation.',
	images: {
		banner: assets.issues.rsAward.banner,
		photos: [assets.issues.rsAward.banner]
	},
	abilities: [nextjs, vercel, tailwindcss, shadcnui, googleAds],
	links: {
		live: 'https://www.rs-award.com'
	},
	startDate: '2022-03-01',
	linkedAffiliationId: AffiliationId.RuamsukPlatingSoftwareEngineerPartTime
}
