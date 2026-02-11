import { docker, mongodb, nats, nestjs, nextjs, railway, redis, shadcnui, typescript } from '@/common/data/ability'
import type { Issue } from '@/common/interface'

export const looklookPet: Issue = {
	id: 'looklook-pet',
	title: 'LOOKLOOK PET',
	description:
		'LOOK LOOK stands out as the ultimate all-in-one lifestyle companion for pet parents, seamlessly integrating daily care tools like health tracking, AI-powered advice, and location-based services into a single platform. By aggregating essential resources—from discovering pet-friendly cafes and clinics to securing insurance and exclusive deals—the app not only simplifies the complexities of pet ownership but also fosters a vibrant community through local events, making life smarter and more enjoyable for you and your furry friends.',
	images: {
		thumbnail: '/issue/looklook.webp',
		banner: '/issue/looklook.webp',
		photos: [
			'/issue/looklook.webp',
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
	startDate: '2024-06-01'
}
