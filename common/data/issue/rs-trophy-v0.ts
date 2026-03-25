import { googleAds, googleAnalytics, makewebeasy, seo } from '@/common/data/ability'
import { AffiliationId } from '@/common/enum'
import type { Issue } from '@/common/interface'

export const rsTrophyV0: Issue = {
	id: 'rs-trophy-v0',
	title: 'RS TROPHY (Legacy MakeWebEasy)',
	description:
		'[LEGACY] The initial digital storefront for RS TROPHY built using the MakeWebEasy CMS. This version focused on basic online visibility but suffered from slow page speeds and limited customization, leading to a later migration to WordPress.',
	images: {
		thumbnail: '/issue/RSTROPHY.png',
		banner: '/issue/RSTROPHY.png',
		photos: ['/issue/RSTROPHY.png']
	},
	abilities: [makewebeasy, seo, googleAnalytics, googleAds],
	links: {
		live: 'https://rs-trophy.com'
	},
	startDate: '2021-01-01',
	linkedAffiliationId: AffiliationId.RuamsukPlatingSoftwareEngineerPartTime
}
