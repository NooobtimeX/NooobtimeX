import type { Project } from '../interfaces'
import { sortByDateDesc } from '../utils'
import { assets } from './assets'
import { type SkillId, skillById } from './skills'

/** Authoring shape: list skills by id (typed + autocompleted); resolved below. */
type ProjectDef = Omit<Project, 'skills'> & { skills: SkillId[] }

export const looklookPet: ProjectDef = {
	id: 'looklook-pet',
	title: 'LOOKLOOK PET Platform',
	description:
		'Architect and lead full-stack developer of the LOOKLOOK PET platform — a multi-surface pet-parent community and B2B2C multi-vendor marketplace. Owned the ecosystem end-to-end across three core scopes: (1) **Core Storefront & Microservices**: Scaled 15+ NestJS services over NATS (backed by MongoDB, Redis, and BullMQ) and fronted by a Next.js storefront. Designed a custom native payment UI with client-side Omise tokenization, inline PromptPay QR polling, card-lock promotional gating, and migrated headless WordPress to MongoDB with TipTap HTML rendering. (2) **B2B Partner Portal**: Built and owned ~55% of the console codebase, developing claim-an-unlisted-place flows, team switcher management with dynamic roles, analytics panels with CSV orders export, and custom Lottie route loaders. (3) **Mercur Multi-Vendor Marketplace**: Served as sole maintainer of the Medusa.js 2 marketplace and seller panels, upgrading to Sprint-46, building a workflow-based refund system, and launching bilingual TH/EN deal templates. Deployed on Railway with Docker and Cloudflare R2.',
	images: { banner: assets.projects.looklookPet.banner, photos: [assets.projects.looklookPet.banner] },
	skills: [
		'typescript',
		'next-js',
		'react',
		'flutter',
		'tailwind-css',
		'radix-ui',
		'tanstack-query',
		'better-auth',
		'nest-js',
		'node-js',
		'nats',
		'mongodb',
		'redis',
		'bullmq',
		'medusa',
		'mercur',
		'postgresql',
		'omise',
		'algolia',
		'minio',
		'resend',
		'docker',
		'railway',
		'git-github',
		'cloudflare-r2',
		'seo',
		'google-tag-manager'
	],
	links: { live: 'https://looklook.pet' },
	startDate: '2025-07-16',
	linkedOrganizationId: 'jasmine-technology-solution',
	timeline: [
		{
			date: '2025-10-30',
			title: 'Transport — NATS Message Bus → HTTP Service Calls',
			description:
				'Replaced the NATS/JetStream message bus with direct HTTP service calls for the internal BFF-to-service transport, simplifying the request path.',
			icon: 'mdi:transit-connection-variant'
		},
		{
			date: '2025-11-07',
			title: 'Hosting — Tencent Cloud VM → Railway + Docker',
			description:
				'Retired the self-managed Tencent Cloud VMs and their CircleCI + SSH pipelines for Railway across the fleet, deploying every service from a Dockerfile as config-as-code.',
			icon: 'simple-icons:railway'
		},
		{
			date: '2025-12-08',
			title: 'Marketplace — Medusa v2 Multi-Vendor Standup',
			description:
				'Stood up the Medusa v2 multi-vendor marketplace (Mercur) on Railway with Nixpacks, MinIO object storage, and a custom payment provider.',
			icon: 'mdi:storefront-outline'
		},
		{
			date: '2026-02-09',
			title: 'Payments — Omise Webhooks, Refunds, Native Checkout',
			description:
				'Hardened the Omise payment system — webhook signature security, an async event queue, refunds, and native card / PromptPay / mobile-banking checkout.',
			icon: 'mdi:credit-card-outline'
		},
		{
			date: '2026-03-09',
			title: 'Auth — Clerk → Better Auth (Partner Portal + BFF)',
			description:
				'Migrated the B2B partner portal and its NestJS BFF from Clerk to Better Auth end-to-end — re-architecting session handling behind a proxy and adapting the Mongoose layer to Better Auth string IDs.',
			icon: 'mdi:shield-key-outline'
		},
		{
			date: '2026-05-25',
			title: 'Content — Headless WordPress → MongoDB',
			description:
				'Cut the storefront and every BFF off headless WordPress (Faust + Apollo) onto a native MongoDB content model — the WordPress chapter, closed.',
			icon: 'simple-icons:mongodb'
		},
		{
			date: '2026-06-02',
			title: 'Media Storage — Tencent COS → Cloudflare R2',
			description:
				'Swapped the Tencent COS SDK for the AWS S3 SDK against Cloudflare R2 behind a StorageService abstraction — a runtime provider flip with zero downstream code changes.',
			icon: 'simple-icons:cloudflare'
		},
		{
			date: '2026-06-18',
			title: 'Marketplace — Medusa Sprint 46 + Bilingual TH/EN Templates',
			description:
				'Upgraded the marketplace to Medusa Sprint 46 and shipped a bilingual TH/EN deal-template system (title, description, T&C, per-language apply).',
			icon: 'mdi:translate'
		},
		{
			date: '2026-06-26',
			title: 'Video Pipeline — Range Streaming + Faster Transcode',
			description:
				'Added HTTP Range video streaming, browser-universal MP4 playback, and a faster ffmpeg transcode baked into the runtime image.',
			icon: 'mdi:play-box-outline'
		},
		{
			date: '2026-07-07',
			title: 'Architecture — 15 Polyrepos → Turborepo Monorepo',
			description:
				'Consolidated ~15 standalone repos into one Turborepo — every app plus a shared @looklookpet/common workspace package, with per-service Railway config and a single cached build graph.',
			icon: 'simple-icons:turborepo'
		}
	]
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
		'json-ld',
		'google-tag-manager'
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
	skills: ['wordpress', 'woocommerce', 'seo', 'google-analytics', 'google-ads', 'google-tag-manager'],
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
		'vercel',
		'google-tag-manager'
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
	skills: ['next-js', 'react', 'typescript', 'tailwind-css', 'shadcn-ui', 'vercel', 'google-ads', 'google-tag-manager'],
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
	skills: ['next-js', 'react', 'typescript', 'tailwind-css', 'shadcn-ui', 'vercel', 'google-ads', 'google-tag-manager'],
	links: { live: 'https://www.rs-award.com' },
	startDate: '2022-03-01',
	linkedOrganizationId: 'ruamsuk-plating'
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
		'json-ld',
		'google-tag-manager'
	],
	links: { live: 'https://github.com/NooobtimeX/NooobtimeX' },
	startDate: '2021-01-01',
	linkedOrganizationId: 'personal-projects'
}

export const monomaxEplPortal: ProjectDef = {
	id: 'monomax-epl-portal',
	title: 'MONOMax EPL Licensing Portal',
	description:
		'A full-stack SaaS platform that issues and verifies English Premier League commercial-broadcast licenses for Thai venues — restaurants, hotels, and pubs. Business owners sign in with email OTP, register their company and each physical venue with its screen count, and the system provisions the required MONOMax Sports Premium accounts while guaranteeing — enforced at the database level — that every account is bound to a single active venue. Admins review submissions in a dedicated console with its own auth realm and issue a verifiable digital certificate, complete with an in-house-generated QR code, for each approved venue. Built with Next.js 16 (App Router) and React 19 in strict TypeScript: two isolated better-auth realms for users and admins, MongoDB/Mongoose, zod schemas validated identically on client and server with react-hook-form, an interactive Leaflet venue-map picker, presigned document uploads to S3-compatible object storage, transactional email, and Tailwind v4 with shadcn/ui. Containerized with Docker and shipped through a GitHub Actions → GHCR → cloud-VM (Caddy) CI/CD pipeline, with PDPA-conscious data residency. Delivered as a focused 3-day sprint.',
	images: {
		banner: assets.projects.monomaxEplPortal.banner,
		photos: [assets.projects.monomaxEplPortal.banner]
	},
	skills: [
		'next-js',
		'react',
		'typescript',
		'mongodb',
		'better-auth',
		'zod',
		'react-hook-form',
		'tailwind-css',
		'shadcn-ui',
		'leaflet',
		'aws-s3',
		'mailgun',
		'recharts',
		'vitest',
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
	portfolio
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
