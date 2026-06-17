import type { Project } from '../interfaces'
import { sortByDateDesc } from '../utils'
import { assets } from './assets'
import { type SkillId, skillById } from './skills'

/** Authoring shape: list skills by id (typed + autocompleted); resolved below. */
type ProjectDef = Omit<Project, 'skills'> & { skills: SkillId[] }

export const looklookPet: ProjectDef = {
	id: 'looklook-pet',
	title: 'LOOKLOOK PET',
	description:
		'Architected and scaled a multi-service pet-parent community marketplace — 15+ NestJS microservices communicating over NATS, backed by MongoDB with Redis caching and BullMQ job queues, fronted by Next.js + Radix web apps and a Medusa commerce layer. Led the infrastructure migration from Tencent Cloud VMs to Railway, running a single Dockerfile across Production and UAT via environment config wired through GitHub CI/CD, and migrated object storage from Tencent COS to Cloudflare R2 for cheaper, S3-compatible asset delivery.',
	images: { banner: assets.projects.looklookPet.banner, photos: [assets.projects.looklookPet.banner] },
	skills: [
		'typescript',
		'next-js',
		'react',
		'flutter',
		'tailwind-css',
		'radix-ui',
		'tanstack-query',
		'nest-js',
		'node-js',
		'nats',
		'mongodb',
		'redis',
		'bullmq',
		'medusa',
		'docker',
		'railway',
		'git-github',
		'cloudflare-r2',
		'seo'
	],
	links: { live: 'https://looklook.pet' },
	startDate: '2024-05-01',
	linkedOrganizationId: 'jasmine-technology-solution'
}

export const rsTrophy: ProjectDef = {
	id: 'rs-trophy',
	title: 'RS TROPHY (rs-trophy.com)',
	description:
		'A unified e-commerce and management platform for custom trophies, plaques, and medals — consolidating fragmented legacy brands into one high-performance system. Built as a Bun monorepo: a localized, SEO-optimized Next.js storefront, a real-time ElysiaJS API, and an admin console that share Mongoose schemas and types through a common workspace package. Runs on MongoDB with Redis caching and Cloudflare R2 object storage, containerized with Docker and deployed on Railway — and ships an AI copilot for natural-language shopping assistance.',
	images: { banner: assets.projects.rsTrophy.banner, photos: [assets.projects.rsTrophy.banner] },
	skills: [
		'bun-js',
		'elysia-js',
		'next-js',
		'react',
		'typescript',
		'mongodb',
		'redis',
		'docker',
		'railway',
		'cloudflare-r2',
		'tailwind-css',
		'shadcn-ui',
		'google-ads',
		'google-analytics',
		'seo',
		'aeo',
		'geo',
		'json-ld'
	],
	links: { live: 'https://rs-trophy.com' },
	startDate: '2026-03-01',
	linkedOrganizationId: 'ruamsuk-plating'
}

export const rsTrophyV1: ProjectDef = {
	id: 'rs-trophy-v1',
	title: 'RS TROPHY (Legacy WordPress)',
	description:
		'[LEGACY] The original e-commerce platform for RS TROPHY built on WordPress and WooCommerce. Managed the complete product catalog, customer orders, and digital marketing integrations before the transition to the modern high-performance system.',
	images: { banner: assets.projects.rsTrophyV1.banner, photos: [assets.projects.rsTrophyV1.banner] },
	skills: ['wordpress', 'woocommerce', 'seo', 'google-analytics', 'google-ads'],
	links: { live: 'https://rs-trophy.com' },
	startDate: '2023-01-01',
	linkedOrganizationId: 'ruamsuk-plating'
}

export const onlinePokerGame: ProjectDef = {
	id: 'online-poker-game',
	title: 'Online Poker Game',
	description:
		'A real-time multiplayer online poker game featuring Server-Sent Events for live updates. Built with Next.js and PostgreSQL for a seamless, interactive card gaming experience.',
	images: { banner: assets.projects.onlinePokerGame.banner, photos: [...assets.projects.onlinePokerGame.gallery] },
	skills: ['next-js', 'react', 'typescript', 'prisma', 'render', 'tailwind-css', 'sse', 'postgresql'],
	links: {},
	startDate: '2025-03-01',
	linkedOrganizationId: 'freelance-blitzwerk'
}

export const prettierConfig: ProjectDef = {
	id: 'prettier-config',
	title: 'Prettier Config',
	description:
		'The fastest way to build, share, and try a Prettier configuration — visually, in the browser. Runs the official prettier/standalone fully client-side for instant live formatting, with a CodeMirror 6 editor spanning JS/TS, CSS, HTML, JSON, Markdown, Vue, and more, plus shareable URL-encoded configs and i18n. Built on Next.js, React, TypeScript, and Tailwind CSS v4 with shadcn/ui on Base UI.',
	images: { banner: assets.projects.prettierConfig.banner, photos: [assets.projects.prettierConfig.banner] },
	skills: [
		'next-js',
		'react',
		'typescript',
		'tailwind-css',
		'shadcn-ui',
		'base-ui',
		'codemirror',
		'prettier',
		'vercel'
	],
	links: { live: 'https://prettier-config.dev' },
	startDate: '2025-07-09',
	linkedOrganizationId: 'personal-projects'
}

export const rsMedal: ProjectDef = {
	id: 'rs-medal',
	title: 'RS Medal (Legacy)',
	description:
		'[LEGACY] A medal showcase web application. This project has been succeeded by the unified RS TROPHY (rs-trophy.com) platform to provide a more robust and high-performance experience.',
	images: { banner: assets.projects.rsMedal.banner, photos: [assets.projects.rsMedal.banner] },
	skills: ['next-js', 'react', 'typescript', 'tailwind-css', 'shadcn-ui', 'vercel', 'google-ads'],
	links: { live: 'https://www.rs-medal.com' },
	startDate: '2022-08-01',
	linkedOrganizationId: 'ruamsuk-plating'
}

export const rsAward: ProjectDef = {
	id: 'rs-award',
	title: 'RS Award (Legacy)',
	description:
		'[LEGACY] A plaque showcase web application. This project has been succeeded by the unified RS TROPHY (rs-trophy.com) platform as part of a major digital transformation.',
	images: { banner: assets.projects.rsAward.banner, photos: [assets.projects.rsAward.banner] },
	skills: ['next-js', 'react', 'typescript', 'tailwind-css', 'shadcn-ui', 'vercel', 'google-ads'],
	links: { live: 'https://www.rs-award.com' },
	startDate: '2022-03-01',
	linkedOrganizationId: 'ruamsuk-plating'
}

export const qrFood: ProjectDef = {
	id: 'qr-food',
	title: 'QR-Food (Thesis Project)',
	description:
		'Developed a comprehensive QR-based food ordering and management system for restaurants. Features include real-time menu browsing, digital ordering, and a dashboard for restaurant owners to manage orders and kitchen workflows.',
	images: { banner: assets.projects.qrFood.banner, photos: [assets.projects.qrFood.banner] },
	skills: ['nuxt-js', 'typescript', 'tailwind-css', 'prisma', 'supabase', 'postgresql', 'vercel'],
	links: { live: 'https://github.com/NooobtimeX/QR-Food' },
	startDate: '2023-11-01',
	linkedOrganizationId: 'thammasat-university'
}

export const portfolio: ProjectDef = {
	id: 'portfolio',
	title: '🚀 Portfolio – Wongsaphat Puangsorn',
	description:
		'This site — a Cyberpunk 2077–inspired portfolio built on Next.js (App Router, Turbopack) with a fully custom Tailwind v4 design system and shadcn/ui on Base UI. Features a ⌘K command palette, a gig-board project journal, a vertical career-trace timeline, and a print-ready CV with a slide-presentation mode. Deployed on Vercel.',
	images: { banner: assets.projects.portfolio.banner, photos: [assets.projects.portfolio.banner] },
	skills: [
		'typescript',
		'next-js',
		'react',
		'tailwind-css',
		'shadcn-ui',
		'base-ui',
		'embla-carousel',
		'bun-js',
		'vercel',
		'seo',
		'aeo',
		'geo',
		'json-ld'
	],
	links: { live: 'https://github.com/NooobtimeX/NooobtimeX' },
	startDate: '2021-01-01',
	linkedOrganizationId: 'personal-projects'
}

export const monomaxEplPortal: ProjectDef = {
	id: 'monomax-epl-portal',
	title: 'MONOMax EPL Licensing Portal',
	description:
		'A full-stack SaaS platform that issues and verifies English Premier League commercial-broadcast licenses for Thai venues — restaurants, hotels, and pubs. Business owners sign in with email OTP, register their company and each physical venue with its screen count, and the system automatically provisions the required MONOMax Sports Premium accounts while guaranteeing each account is bound to a single active venue. Admins review submissions and issue a verifiable digital certificate (with QR code) per venue. Built with Next.js 16 (App Router) and React 19 in strict TypeScript, MongoDB for data, Tailwind CSS v4 with shadcn/ui, validation shared across client and server, document uploads to cloud object storage, transactional email, and an interactive map venue picker — containerized with Docker and shipped through a GitHub Actions CI/CD pipeline. Delivered as a focused 3-day sprint.',
	images: {
		banner: assets.projects.monomaxEplPortal.banner,
		photos: [assets.projects.monomaxEplPortal.banner]
	},
	skills: [
		'next-js',
		'react',
		'typescript',
		'mongodb',
		'tailwind-css',
		'shadcn-ui',
		'recharts',
		'docker',
		'git-github'
	],
	links: {},
	startDate: '2026-06-15',
	linkedOrganizationId: 'jasmine-technology-solution'
}

const defs: ProjectDef[] = [
	monomaxEplPortal,
	rsTrophy,
	looklookPet,
	onlinePokerGame,
	prettierConfig,
	rsTrophyV1,
	rsAward,
	rsMedal,
	portfolio,
	qrFood
]

// Resolve skill ids → Skill objects, then sort newest first.
export const projectsData: Project[] = defs
	.map(d => ({ ...d, skills: d.skills.map(id => skillById[id]) }))
	.sort(sortByDateDesc)

/** Hand-picked projects for the home page (in this order). Edit to curate. */
const featuredProjectIds = ['monomax-epl-portal', 'rs-trophy', 'looklook-pet']
export const featuredProjects: Project[] = featuredProjectIds
	.map(id => projectsData.find(p => p.id === id))
	.filter((p): p is Project => Boolean(p))
