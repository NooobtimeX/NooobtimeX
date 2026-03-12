import { googleAds, mongodb, nextjs, railway, shadcnui, tailwindcss, vercel } from '@/common/data/ability'
import { AffiliationId } from '@/common/enum'
import type { Issue } from '@/common/interface'

export const rsAward: Issue = {
	id: 'rs-award',
	title: 'RS Award',
	description: 'A plaque showcase web application built to display awards and accolades in an elegant layout.',
	images: {
		thumbnail: '/issue/RSAWARD.png',
		banner: '/issue/RSAWARD.png',
		photos: ['/issue/RSAWARD.png']
	},
	abilities: [nextjs, vercel, tailwindcss, shadcnui, mongodb, railway, googleAds],
	links: {
		live: 'https://www.rs-award.com'
	},
	startDate: '2022-03-01',
	linkedAffiliationId: AffiliationId.RuamsukPlatingSoftwareEngineerPartTime
}
