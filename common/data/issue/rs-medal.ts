import { googleAds, nextjs, shadcnui, tailwindcss, vercel } from '@/common/data/ability'
import { AffiliationId } from '@/common/enum'
import type { Issue } from '@/common/interface'

export const rsMedal: Issue = {
	id: 'rs-medal',
	title: 'RS Medal (Legacy)',
	description:
		'[LEGACY] A medal showcase web application. This project has been succeeded by the unified RS TROPHY (rs-trophy.com) platform to provide a more robust and high-performance experience.',
	images: {
		banner: '/issue/rs-medal/banner.png',
		photos: ['/issue/rs-medal/banner.png']
	},
	abilities: [nextjs, vercel, tailwindcss, shadcnui, googleAds],
	links: {
		live: 'https://www.rs-medal.com'
	},
	startDate: '2022-08-01',
	linkedAffiliationId: AffiliationId.RuamsukPlatingSoftwareEngineerPartTime
}
