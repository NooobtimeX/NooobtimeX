import { googleAds, nextjs, shadcnui, tailwindcss, vercel } from '@/common/data/ability'
import { AffiliationId } from '@/common/enum'
import type { Issue } from '@/common/interface'

export const rsAward: Issue = {
	id: 'rs-award',
	title: 'RS Award (Legacy)',
	description:
		'[LEGACY] A plaque showcase web application. This project has been succeeded by the unified RS TROPHY (rs-trophy.com) platform as part of a major digital transformation.',
	images: {
		thumbnail: '/issue/RSTROPHY.png',
		banner: '/issue/RSTROPHY.png',
		photos: ['/issue/RSTROPHY.png']
	},
	abilities: [nextjs, vercel, tailwindcss, shadcnui, googleAds],
	links: {
		live: 'https://www.rs-award.com'
	},
	startDate: '2022-03-01',
	linkedAffiliationId: AffiliationId.RuamsukPlatingSoftwareEngineerPartTime
}
