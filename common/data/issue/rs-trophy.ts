import {
	bullmq,
	bun,
	docker,
	elysia,
	googleAds,
	googleAnalytics,
	minio,
	nextjs,
	react,
	redis,
	shadcnui,
	tailwindcss,
	typescript,
	vercel
} from '@/common/data/ability'
import { AffiliationId } from '@/common/enum'
import type { Issue } from '@/common/interface'

export const rsTrophy: Issue = {
	id: 'rs-trophy',
	title: 'RS TROPHY (rs-trophy.com)',
	description:
		'Leading the digital transformation of a legacy business into a definitive "Community Hub" for the Thai awards industry. Architecting the consolidation of fragmented legacy brands into a unified, high-performance system utilizing Bun, Elysia.js, and Next.js. Transitioning toward a Serverless/Zero-Maintenance model with Redis caching and MinIO asset management.',
	images: {
		thumbnail: '/issue/RSTROPHY.png',
		banner: '/issue/RSTROPHY.png',
		photos: ['/issue/RSTROPHY.png']
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
		bullmq,
		docker,
		vercel,
		googleAds,
		googleAnalytics
	],
	links: {
		github: 'https://github.com/NooobtimeX',
		live: 'https://rs-trophy.com'
	},
	startDate: '2026-03-01',
	linkedAffiliationId: AffiliationId.RuamsukPlatingTechnicalAdvisor
}
