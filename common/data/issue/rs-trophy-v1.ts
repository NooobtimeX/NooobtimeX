import { googleAds, googleAnalytics, seo, woocommerce, wordpress } from '@/common/data/ability'
import { AffiliationId } from '@/common/enum'
import type { Issue } from '@/common/interface'

export const rsTrophyV1: Issue = {
	id: 'rs-trophy-v1',
	title: 'RS TROPHY (Legacy WordPress)',
	description:
		'[LEGACY] The original e-commerce platform for RS TROPHY built on WordPress and WooCommerce. Managed the complete product catalog, customer orders, and digital marketing integrations before the transition to the modern high-performance system.',
	images: {
		thumbnail: '/issue/RSTROPHY.png',
		banner: '/issue/RSTROPHY.png',
		photos: ['/issue/RSTROPHY.png']
	},
	abilities: [wordpress, woocommerce, seo, googleAnalytics, googleAds],
	links: {
		live: 'https://rs-trophy.com'
	},
	startDate: '2023-01-01',
	linkedAffiliationId: AffiliationId.RuamsukPlatingSoftwareEngineerPartTime
}
