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
	resumeSummary:
		'Multi-surface pet-parent marketplace & B2B2C platform — 15+ NestJS microservices, a custom Omise / PromptPay checkout, a partner console, and a Medusa v2 multi-vendor marketplace. Next.js / MongoDB on Railway.',
	images: { banner: assets.projects.looklookPet.banner, photos: [...assets.projects.looklookPet.gallery] },
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
	linkedExperienceIds: ['jasmine-tech'],
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
		'A unified e-commerce and management platform for custom trophies, plaques, and medals — consolidating fragmented sibling brands into one high-performance system. Built as a Bun monorepo: a localized, SEO-optimized Next.js storefront, a real-time ElysiaJS API, and an admin console that share Mongoose schemas and types through a common workspace package. Runs on MongoDB with Redis caching and Cloudflare R2 object storage, containerized with Docker and deployed on Railway — and ships an AI copilot for natural-language shopping assistance. The platform evolved from an original WordPress + WooCommerce storefront into this unified Bun monorepo.',
	resumeSummary:
		'Unified e-commerce + admin platform for a custom-awards manufacturer, consolidating fragmented brands into one Bun monorepo — SEO storefront, ElysiaJS API, and an AI shopping copilot. MongoDB / Redis on Railway.',
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
		'google-tag-manager',
		'wordpress',
		'woocommerce'
	],
	links: { live: 'https://rs-trophy.com' },
	startDate: '2023-01-01',
	linkedExperienceIds: ['ruamsuk-software-engineer-part-time', 'ruamsuk-cto'],
	timeline: [
		{
			date: '2023-01-01',
			title: 'Discovery & Setup — WordPress + WooCommerce Foundation',
			description:
				'Stood up the original storefront on WordPress and WooCommerce — hosting, theme, and commerce plugin stack.',
			icon: 'simple-icons:woocommerce'
		},
		{
			date: '2023-02-01',
			title: 'Design — Storefront Theme & Catalog UX',
			description: 'Designed the storefront theme and catalog browsing experience.',
			icon: 'mdi:palette-outline'
		},
		{
			date: '2023-03-01',
			title: 'Development — Catalog, Cart & Marketing Integrations',
			description: 'Built the product catalog, cart and checkout flows, and marketing integrations.',
			icon: 'mdi:hammer-screwdriver'
		},
		{
			date: '2023-04-01',
			title: 'Launch — SEO, Analytics & Go-Live',
			description:
				'Went live with on-page SEO, analytics, and ad tracking — the storefront that ran until the modern rebuild.',
			icon: 'mdi:rocket-launch-outline'
		},
		{
			date: '2026-05-06',
			title: 'Foundation — Bun Monorepo, Railway from Day One',
			description:
				'Bootstrapped a Bun workspace monorepo — storefront, admin, ElysiaJS API, and shared UI + type packages — Railway-targeted with standalone output from the very first commit.',
			icon: 'simple-icons:bun'
		},
		{
			date: '2026-05-07',
			title: 'AI — OpenRouter Streaming Agent + MCP Tool Suite',
			description:
				'Built a custom high-performance OpenRouter streaming AI agent with a multi-tool MCP server, powering natural-language shopping assistance across the storefront and admin console.',
			icon: 'mdi:robot-outline'
		},
		{
			date: '2026-05-09',
			title: 'i18n — next-intl TH/EN + Shared UI Workspace',
			description:
				'Rolled out next-intl Thai/English localization and extracted the shadcn component set into a shared @rs-trophy/ui workspace package.',
			icon: 'mdi:translate'
		},
		{
			date: '2026-05-12',
			title: 'Design — Navy + Gold Token System',
			description:
				'Established a luxury navy-and-gold design-token system with the Anuphan typeface, replacing hardcoded values with a single themed source in the shared UI kit.',
			icon: 'mdi:palette-outline'
		},
		{
			date: '2026-05-13',
			title: 'Consolidation — Legacy WordPress Sibling Sites → One Platform',
			description:
				'Scraped and imported two legacy WordPress sibling sites into one unified platform, with legacy category-page redirects preserved.',
			icon: 'simple-icons:wordpress'
		},
		{
			date: '2026-06-04',
			title: 'Storage — MinIO → Cloudflare R2',
			description:
				'Migrated object storage from MinIO to Cloudflare R2 behind a provider-agnostic S3 layer, adding a streaming proxy and a separate private bucket for PII.',
			icon: 'simple-icons:cloudflare'
		},
		{
			date: '2026-06-07',
			title: 'Type Safety — End-to-End Eden Treaty Data Layer',
			description:
				'Migrated the entire web and admin data layer to type-safe Eden Treaty against the ElysiaJS API, plus production hardening — fail-fast secrets, graceful shutdown, health checks, and rate limiting.',
			icon: 'simple-icons:typescript'
		},
		{
			date: '2026-06-10',
			title: 'Launch — Live in Production on Railway + Cloudflare',
			description:
				'Shipped the platform to production on Railway with Cloudflare, folding the canonical-domain redirector into the monorepo.',
			icon: 'simple-icons:railway'
		},
		{
			date: '2026-06-22',
			title: 'Social — Autopilot Multi-Channel Publishing Suite',
			description:
				'Built an autopilot social-media suite — OAuth channels for Facebook, Instagram, YouTube and TikTok, AI content generation with brand voice, a drag-to-schedule calendar, and engagement-metrics dashboards.',
			icon: 'mdi:bullhorn-outline'
		},
		{
			date: '2026-07-02',
			title: 'Search — Semantic Vector Search',
			description:
				'Added semantic vector search over product and article embeddings (BullMQ embed queues), wired into both the storefront AI chat and the admin assistant.',
			icon: 'mdi:database-search-outline'
		}
	]
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
	linkedExperienceIds: ['freelance-blitzwerk-role'],
	timeline: [
		{
			date: '2025-06-09',
			title: "Kickoff — TypeScript Texas Hold'em on Next.js",
			description:
				"Started a real-time multiplayer Texas Hold'em project on Next.js with a component-driven UI and strict TypeScript.",
			icon: 'mdi:cards-playing-outline'
		},
		{
			date: '2025-06-11',
			title: 'Engine — Test-Driven Hand Evaluator',
			description: 'Built the poker hand-evaluation engine test-first, with dedicated unit suites for ranking logic.',
			icon: 'mdi:cards'
		},
		{
			date: '2025-06-11',
			title: 'Realtime — Rooms over Server-Sent Events',
			description: 'Streamed live room state to every player over Server-Sent Events.',
			icon: 'mdi:broadcast'
		},
		{
			date: '2025-06-12',
			title: 'Core — Showdown & Deck Logic',
			description: 'Implemented showdown resolution and deck management with full unit-test coverage.',
			icon: 'mdi:test-tube'
		},
		{
			date: '2025-07-05',
			title: 'Refactor — Modular Pot / Position / Betting Managers',
			description: 'Refactored the game engine into dedicated pot, position, and betting modules.',
			icon: 'mdi:cog-outline'
		},
		{
			date: '2025-08-05',
			title: 'Auth — Session-Based Authentication',
			description: 'Added session-based authentication for players and rooms.',
			icon: 'mdi:shield-key-outline'
		},
		{
			date: '2025-08-29',
			title: 'Odds — Monte Carlo Win-Probability',
			description: 'Built a Monte Carlo simulation for live hand-odds and win-probability estimates.',
			icon: 'mdi:chart-bell-curve-cumulative'
		},
		{
			date: '2025-09-07',
			title: 'Multiplayer — Lobby & Configurable Rooms',
			description: 'Delivered the multiplayer lobby with a create-room flow and host-configurable seat limits.',
			icon: 'mdi:account-group-outline'
		},
		{
			date: '2025-10-27',
			title: 'Tournament — Winner Mode + Spectator Roles',
			description:
				'Introduced tournament mode with viewer and player-elimination roles and a pre-showdown card-reveal phase.',
			icon: 'mdi:trophy-outline'
		},
		{
			date: '2026-02-03',
			title: 'Scale-Out — Docker, Job Queue & Redis Realtime',
			description:
				'Re-architected for scale — containerized deploy with a BullMQ job queue, persisted game logs, and Redis-backed realtime with retries.',
			icon: 'simple-icons:redis'
		}
	]
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
	linkedExperienceIds: ['personal-projects-role'],
	timeline: [
		{
			date: '2025-05-09',
			title: 'Foundation — Next.js Config Playground',
			description: 'Laid the Next.js foundation for a browser-based Prettier configuration builder.',
			icon: 'simple-icons:prettier'
		},
		{
			date: '2025-08-24',
			title: 'i18n — Internationalization Introduced',
			description: 'Introduced internationalization with locale-aware routing.',
			icon: 'mdi:translate'
		},
		{
			date: '2025-09-06',
			title: 'Launch — prettier-config.dev',
			description: 'Settled on the prettier-config.dev domain with centralized metadata and lint tooling.',
			icon: 'mdi:web'
		},
		{
			date: '2026-01-09',
			title: 'Rebuild — Metadata-Driven Config Generator',
			description: 'Rebuilt the UI around an option-metadata-driven config generator.',
			icon: 'mdi:cog-outline'
		},
		{
			date: '2026-05-05',
			title: 'i18n — 15 Locales + hreflang Sitemap',
			description: 'Scaled to fifteen locales with a dynamic multi-language sitemap and hreflang SEO.',
			icon: 'mdi:earth'
		},
		{
			date: '2026-05-27',
			title: 'Engine — Version Picker + Schema Options + Diff',
			description:
				'Auto-generated options from the Prettier schema for any selected version, with a GitHub-style diff preview.',
			icon: 'mdi:file-compare'
		},
		{
			date: '2026-05-29',
			title: 'Editor — Multi-Parser CodeMirror + Shareable URLs',
			description:
				'Shipped a multi-parser CodeMirror editor with URL-encoded shareable configs and existing-config import.',
			icon: 'simple-icons:codemirror'
		},
		{
			date: '2026-05-30',
			title: 'Extensibility — Presets + Third-Party Plugins',
			description: 'Added one-click preset configs and a third-party plugin system.',
			icon: 'mdi:puzzle-outline'
		}
	]
}

export const rsMedal: ProjectDef = {
	id: 'rs-medal',
	title: 'RS Medal',
	description:
		'A medal showcase and catalog web app — first built on WordPress, later remade as a localized Next.js application with structured data and a reusable product data model.',
	images: { banner: assets.projects.rsMedal.banner, photos: [assets.projects.rsMedal.banner] },
	skills: [
		'wordpress',
		'next-js',
		'react',
		'typescript',
		'tailwind-css',
		'shadcn-ui',
		'vercel',
		'google-ads',
		'google-tag-manager'
	],
	links: { live: 'https://www.rs-medal.com' },
	startDate: '2022-08-01',
	linkedExperienceIds: ['ruamsuk-software-engineer-part-time', 'ruamsuk-software-engineer-full-time'],
	timeline: [
		{
			date: '2022-08-01',
			title: 'Discovery & Setup — WordPress Foundation',
			description: 'Scoped the catalog and stood up the WordPress foundation — hosting, theme base, and plugin stack.',
			icon: 'simple-icons:wordpress'
		},
		{
			date: '2022-09-01',
			title: 'Design — Brand-Aligned Catalog Theme',
			description: 'Designed a brand-aligned theme and information architecture for the medal catalog.',
			icon: 'mdi:palette-outline'
		},
		{
			date: '2022-10-01',
			title: 'Development — Catalog & CMS Content',
			description: 'Built out the product catalog, content pages, and CMS workflows.',
			icon: 'mdi:hammer-screwdriver'
		},
		{
			date: '2022-11-01',
			title: 'Launch — SEO, Analytics & Go-Live',
			description: 'Went live with on-page SEO, analytics, and ad tracking wired in.',
			icon: 'mdi:rocket-launch-outline'
		},
		{
			date: '2025-05-30',
			title: 'Next.js Remake — Localized Storefront Foundation',
			description:
				'Began the ground-up Next.js remake — a localized, statically-optimized showcase replacing the WordPress build.',
			icon: 'simple-icons:nextdotjs'
		},
		{
			date: '2025-06-06',
			title: 'Content & SEO — Blog System + JSON-LD',
			description: 'Added a blog system with structured data (JSON-LD), sitemap, and SEO fixes.',
			icon: 'mdi:post-outline'
		},
		{
			date: '2025-06-23',
			title: 'Catalog — Product Landing Pages + Reusable Data',
			description: 'Shipped product landing pages with a reusable product data model and customer-logo carousel.',
			icon: 'mdi:view-grid-outline'
		},
		{
			date: '2026-02-25',
			title: 'Redesign — UI Overhaul + WebP Optimization',
			description: 'Refreshed the UI design and moved imagery to WebP for faster loads.',
			icon: 'mdi:palette-swatch-outline'
		}
	]
}

export const rsAward: ProjectDef = {
	id: 'rs-award',
	title: 'RS Award',
	description:
		'A plaque and award showcase web app — first built on WordPress, later remade as a localized Next.js application with SEO/AEO structured data and client-side search.',
	images: { banner: assets.projects.rsAward.banner, photos: [assets.projects.rsAward.banner] },
	skills: [
		'wordpress',
		'next-js',
		'react',
		'typescript',
		'tailwind-css',
		'shadcn-ui',
		'vercel',
		'google-ads',
		'google-tag-manager'
	],
	links: { live: 'https://www.rs-award.com' },
	startDate: '2022-03-01',
	linkedExperienceIds: ['ruamsuk-software-engineer-part-time', 'ruamsuk-software-engineer-full-time'],
	timeline: [
		{
			date: '2022-03-01',
			title: 'Discovery & Setup — WordPress Foundation',
			description: 'Scoped the plaque and award catalog and stood up the WordPress foundation.',
			icon: 'simple-icons:wordpress'
		},
		{
			date: '2022-04-01',
			title: 'Design — Brand-Aligned Showcase Theme',
			description: 'Designed a brand-aligned showcase theme and site structure.',
			icon: 'mdi:palette-outline'
		},
		{
			date: '2022-05-01',
			title: 'Development — Catalog & CMS Content',
			description: 'Built the award catalog, content pages, and CMS workflows.',
			icon: 'mdi:hammer-screwdriver'
		},
		{
			date: '2022-06-01',
			title: 'Launch — SEO, Analytics & Go-Live',
			description: 'Went live with on-page SEO, analytics, and ad tracking.',
			icon: 'mdi:rocket-launch-outline'
		},
		{
			date: '2025-12-04',
			title: 'Next.js Remake — Foundation + SEO',
			description:
				'Kicked off the Next.js remake with SEO metadata, structured data, robots, and sitemap from day one.',
			icon: 'simple-icons:nextdotjs'
		},
		{
			date: '2026-01-28',
			title: 'Data — Prisma/Postgres → MongoDB',
			description: 'Migrated the data layer from Prisma/Postgres to MongoDB mid-build.',
			icon: 'simple-icons:mongodb'
		},
		{
			date: '2026-01-30',
			title: 'Design — New Design System + Thai Localization',
			description: 'Adopted a new design system with motion primitives and localized the UI to Thai.',
			icon: 'mdi:palette-swatch-outline'
		},
		{
			date: '2026-02-10',
			title: 'SEO/AEO — Product Pages + Client-Side Search',
			description: 'Shipped product pages with SEO/AEO structured data, client-side search, and a Dockerized deploy.',
			icon: 'mdi:magnify'
		}
	]
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
	linkedExperienceIds: ['personal-projects-role'],
	timeline: [
		{
			date: '2025-08-25',
			title: 'Inception — Repo + Personal Profile Scaffold',
			description: 'Bootstrapped the repository as a personal GitHub profile with the first structured content.',
			icon: 'mdi:rocket-launch-outline'
		},
		{
			date: '2025-12-23',
			title: 'GitHub Profile — Automated README System',
			description:
				'Built an automated profile README with scheduled workflows for activity stats and a contribution snake.',
			icon: 'simple-icons:github'
		},
		{
			date: '2026-02-03',
			title: 'Pivot — Static Profile → Full Web App',
			description: 'Pivoted from a static profile into a statically-generated Next.js web app with a performance pass.',
			icon: 'simple-icons:nextdotjs'
		},
		{
			date: '2026-03-25',
			title: 'Content — CV, Global Search & Presentation Mode',
			description: 'Shipped a print-ready CV page, site-wide command-palette search, and a slide-presentation mode.',
			icon: 'mdi:file-document-outline'
		},
		{
			date: '2026-04-09',
			title: 'Revamp — Home UI + Component-Library Migration',
			description: 'Revamped the home page and migrated the UI onto a headless component library.',
			icon: 'mdi:home-outline'
		},
		{
			date: '2026-06-08',
			title: 'Redesign — Cyberpunk Design System',
			description:
				'Rebuilt the entire site on a custom Cyberpunk 2077–inspired design system — neon signal colors, notched HUD panels, glitch and scanline accents.',
			icon: 'mdi:palette-outline'
		},
		{
			date: '2026-06-08',
			title: 'Skills — Force-Directed Skill Graph + Game-UI Pages',
			description:
				'Modeled skills as a connected node graph wired by real tech dependencies, with game-style detail pages for skills, projects, and roles.',
			icon: 'mdi:graph-outline'
		},
		{
			date: '2026-06-08',
			title: 'GitHub Stats — Token-Free Coding Stats (ISR)',
			description:
				'Added a dedicated GitHub stats page with contribution insights, fetched token-free and cached with incremental static regeneration.',
			icon: 'mdi:chart-box-outline'
		},
		{
			date: '2026-06-12',
			title: 'Tooling — Self-Owned SVG README Generator',
			description:
				'Replaced third-party badge services with a self-owned SVG asset generator, refreshed on a scheduled CI cron.',
			icon: 'mdi:cog-outline'
		},
		{
			date: '2026-07-12',
			title: 'Feature — Per-Project Milestone Timelines',
			description: 'Shipped a reusable milestone-timeline component so every project can tell its build story.',
			icon: 'mdi:timeline-check-outline'
		}
	]
}

export const monomaxEplPortal: ProjectDef = {
	id: 'monomax-epl-portal',
	title: 'MONOMax EPL Licensing Portal',
	description:
		'A full-stack SaaS platform that issues and verifies English Premier League commercial-broadcast licenses for Thai venues — restaurants, hotels, and pubs. Business owners sign in with email OTP, register their company and each physical venue with its screen count, and the system provisions the required MONOMax Sports Premium accounts while guaranteeing — enforced at the database level — that every account is bound to a single active venue. Admins review submissions in a dedicated console with its own auth realm and issue a verifiable digital certificate, complete with an in-house-generated QR code, for each approved venue. Built with Next.js 16 (App Router) and React 19 in strict TypeScript: two isolated better-auth realms for users and admins, MongoDB/Mongoose, zod schemas validated identically on client and server with react-hook-form, an interactive Leaflet venue-map picker, presigned document uploads to S3-compatible object storage, transactional email, and Tailwind v4 with shadcn/ui. Containerized with Docker and shipped through a GitHub Actions → GHCR → cloud-VM (Caddy) CI/CD pipeline, with PDPA-conscious data residency. Delivered as a focused 3-day sprint.',
	resumeSummary:
		'Full-stack SaaS issuing & verifying English Premier League broadcast licenses for Thai venues — dual isolated auth realms, a geospatial venue model, and in-house QR e-certificates. Next.js 16 / MongoDB, Dockerized CI/CD. Built in a 3-day sprint.',
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
	clientOrganizationId: 'monomax',
	viaOrganizationId: 'jas-tv',
	linkedExperienceIds: ['jasmine-tech'],
	timeline: [
		{
			date: '2026-06-15',
			title: 'Replatform — Firebase SPA → Next.js 16 Full-Stack',
			description:
				'Re-architected a client-built Firebase single-page prototype into a Next.js 16 App Router full-stack application in strict TypeScript.',
			icon: 'simple-icons:nextdotjs'
		},
		{
			date: '2026-06-15',
			title: 'CI/CD — GitHub Actions → GHCR → Dockerized Cloud VM',
			description:
				'Wired a config-as-code pipeline — GitHub Actions builds and pushes a Docker image to GHCR, then deploys to a cloud VM behind Caddy auto-HTTPS.',
			icon: 'simple-icons:githubactions'
		},
		{
			date: '2026-06-16',
			title: 'Auth — Two Isolated Realms, Email-OTP + 2FA',
			description:
				'Built two isolated authentication realms (customer and admin) with email-OTP sign-in and 2FA, moving off the initial NextAuth scaffold to better-auth.',
			icon: 'mdi:shield-key-outline'
		},
		{
			date: '2026-06-16',
			title: 'Certificate Engine — Per-Venue Approval + Branded E-Cert Email',
			description:
				'Built the licensing-certificate engine — per-venue admin approval that issues a verifiable digital certificate, delivered by branded transactional email.',
			icon: 'mdi:certificate-outline'
		},
		{
			date: '2026-06-16',
			title: 'In-House QR Verification',
			description:
				'Replaced an external QR web service with in-house QR generation for tamper-checkable certificate verification.',
			icon: 'mdi:qrcode'
		},
		{
			date: '2026-06-16',
			title: 'Geospatial Data Model — GeoJSON Places + 2dsphere',
			description:
				'Modeled venues as GeoJSON points with a 2dsphere index and a database-enforced constraint binding each provisioned account to a single active venue.',
			icon: 'mdi:map-marker-radius-outline'
		},
		{
			date: '2026-06-17',
			title: 'Admin Command Center — Company-First Console + Excel Export',
			description:
				'Built a company-first admin command center with dashboards, paginated data tables, and styled Excel export.',
			icon: 'mdi:view-dashboard-outline'
		},
		{
			date: '2026-06-17',
			title: 'Data Migration — Historical Import Pipeline',
			description:
				'Built a historical data-migration pipeline — an offline transform step feeding a gated, previewed web import with change diffs.',
			icon: 'mdi:database-import-outline'
		},
		{
			date: '2026-07-03',
			title: 'Integration — Partner Account-Verification API',
			description:
				"Integrated the partner's commercial account-verification API with admin-side sync and reconciliation.",
			icon: 'mdi:api'
		},
		{
			date: '2026-07-04',
			title: 'Admin Export Wizard — Filters + Column Picker',
			description: 'Shipped an admin export wizard with custom filters and a column picker for tailored data exports.',
			icon: 'mdi:file-export-outline'
		}
	]
}

const defs: ProjectDef[] = [
	monomaxEplPortal,
	rsTrophy,
	looklookPet,
	onlinePokerGame,
	prettierConfig,
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
