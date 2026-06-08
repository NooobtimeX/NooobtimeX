import { EntityId, ProjectId } from '../enums'
import type { Project } from '../interfaces'
import { sortByDateDesc } from '../utils'
import { assets } from './assets'
import { skillsMap } from './skills'

export const looklookPet: Project = {
	id: ProjectId.LooklookPet,
	title: 'LOOKLOOK PET',
	description:
		'Architected and scaled a multi-service pet-parent community marketplace — 15+ NestJS microservices communicating over NATS, backed by MongoDB with Redis caching and BullMQ job queues, fronted by Next.js + Radix web apps and a Medusa commerce layer. Led the infrastructure migration from Tencent Cloud VMs to Railway, running a single Dockerfile across Production and UAT via environment config wired through GitHub CI/CD, and migrated object storage from Tencent COS to Cloudflare R2 for cheaper, S3-compatible asset delivery.',
	images: {
		banner: assets.issues.looklookPet.banner,
		photos: [assets.issues.looklookPet.banner]
	},
	skills: [
		skillsMap.typescript,
		skillsMap.nextjs,
		skillsMap.react,
		skillsMap.tailwindcss,
		skillsMap.radixui,
		skillsMap.nestjs,
		skillsMap.nodejs,
		skillsMap.nats,
		skillsMap.mongodb,
		skillsMap.redis,
		skillsMap.docker,
		skillsMap.railway,
		skillsMap.github,
		skillsMap.seo
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
		'A unified e-commerce and management platform for custom trophies, plaques, and medals — consolidating fragmented legacy brands into one high-performance system. Built as a Bun monorepo: a localized, SEO-optimized Next.js storefront, a real-time ElysiaJS API, and an admin console that share Mongoose schemas and types through a common workspace package. Runs on MongoDB with Redis caching and Cloudflare R2 object storage, containerized with Docker and deployed on Railway — and ships an AI copilot for natural-language shopping assistance.',
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
		skillsMap.mongodb,
		skillsMap.redis,
		skillsMap.docker,
		skillsMap.railway,
		skillsMap.tailwindcss,
		skillsMap.shadcnui,
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
		'This site — a Cyberpunk 2077–inspired portfolio built on Next.js (App Router, Turbopack) with a fully custom Tailwind v4 design system and shadcn/ui on Base UI. Features a ⌘K command palette, a gig-board project journal, a vertical career-trace timeline, and a print-ready CV with a slide-presentation mode. Deployed on Vercel.',
	images: {
		banner: assets.issues.portfolio.banner,
		photos: [assets.issues.portfolio.banner]
	},
	skills: [
		skillsMap.typescript,
		skillsMap.nextjs,
		skillsMap.react,
		skillsMap.tailwindcss,
		skillsMap.shadcnui,
		skillsMap.vercel,
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

const issues = [rsTrophy, looklookPet, onlinePokerGame, prettierConfig, rsTrophyV1, rsAward, rsMedal, portfolio, qrFood]

export const projectsData: Project[] = issues.sort(sortByDateDesc)
