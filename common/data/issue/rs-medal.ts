import { googleAds, mongodb, nextjs, railway, shadcnui, tailwindcss, vercel } from '@/common/data/ability'
import { AffiliationId } from '@/common/enum'
import type { Issue } from '@/common/interface'

export const rsMedal: Issue = {
	id: 'rs-medal',
	title: 'RS Medal',
	description: 'A medal showcase web application built to display awards and accolades in an elegant layout.',
	images: {
		thumbnail: '/issue/RSMEDAL.png',
		banner: '/issue/RSMEDAL.png',
		photos: ['/issue/RSMEDAL.png']
	},
	abilities: [nextjs, vercel, tailwindcss, shadcnui, mongodb, railway, googleAds],
	links: {
		live: 'https://www.rs-medal.com'
	},
	startDate: '2022-08-01',
	linkedAffiliationId: AffiliationId.RuamsukPlatingSoftwareEngineerPartTime
}
