import { docker, mongodb, nats, nestjs, nextjs, railway, redis, shadcnui, typescript } from '@/common/data/ability'
import { AffiliationId } from '@/common/enum'
import type { Issue } from '@/common/interface'

export const looklookPet: Issue = {
	id: 'looklook-pet',
	title: 'LOOKLOOK PET',
	description:
		'Architected a pet-parent community platform delivering a seamless user experience and integrated reward system. Engineered a robust backend featuring Redis-driven caching to handle complex data queries and reduce API response times.',
	images: {
		banner: '/issue/looklook-pet/banner.webp',
		photos: [
			'/issue/looklook-pet/banner.webp',
			'/issue/looklook-pet/1.webp',
			'/issue/looklook-pet/2.webp',
			'/issue/looklook-pet/3.webp',
			'/issue/looklook-pet/4.webp',
			'/issue/looklook-pet/5.webp',
			'/issue/looklook-pet/6.webp',
			'/issue/looklook-pet/7.webp',
			'/issue/looklook-pet/8.webp'
		]
	},
	abilities: [nextjs, shadcnui, nestjs, nats, mongodb, redis, typescript, docker, railway],
	links: {
		live: 'https://looklook.pet/'
	},
	startDate: '2025-07-15',
	linkedAffiliationId: AffiliationId.JasmineTechnologySolution
}
