import { bun, elysia, minio, nextjs, redis } from '@/common/data/ability'
import { AffiliationId } from '@/common/enum'
import type { Issue } from '@/common/interface'

export const rsTrophy: Issue = {
	id: 'rs-trophy',
	title: 'RS TROPHY (rs-trophy.com)',
	description:
		'Leading the digital transformation of a legacy business into a definitive "Community Hub" for the Thai awards industry. Architecting the consolidation of fragmented legacy brands into a unified, high-performance system utilizing Bun, Elysia.js, and Next.js. Transitioning toward a Serverless/Zero-Maintenance model with Redis caching and MinIO asset management.',
	images: {
		thumbnail: '/issue/rs-trophy.webp',
		banner: '/issue/rs-trophy.webp',
		photos: ['/issue/rs-trophy.webp']
	},
	abilities: [bun, elysia, nextjs, redis, minio],
	links: {
		github: 'https://github.com/NooobtimeX',
		live: 'https://rs-trophy.com'
	},
	startDate: '2025-05-01',
	linkedAffiliationId: AffiliationId.RuamsukPlatingSoftwareEngineerFullTime
}
