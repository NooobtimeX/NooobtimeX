import { AffiliationEntityType, AffiliationId, AffiliationType, Location, Position } from '@/common/enum'
import type { Affiliation, AffiliationItem } from '@/common/interface'
import {
	artificialIntelligence,
	css,
	facebookAds,
	fullStackDevelopment,
	googleAds,
	googleAnalytics,
	onlineMarketing,
	seo,
	woocommerce,
	wordpress
} from '../abilities'

export const ruamsukPlating: Affiliation = {
	id: 'ruamsuk-plating',
	name: 'RUAMSUK PLATING LIMITED PARTNERSHIP',
	logo: '/logo/RSTROPHY.png',
	location: Location.PathumthaniThailand,
	type: AffiliationEntityType.Company
}

export const ruamsukPlatingAdvisor: AffiliationItem = {
	id: AffiliationId.RuamsukPlatingAdvisor,
	affiliation: ruamsukPlating,
	position: Position.Advisor,
	description: 'Providing strategic technology advice and overseeing IT infrastructure upgrades.',
	abilities: [onlineMarketing, artificialIntelligence, seo, fullStackDevelopment],
	type: AffiliationType.Work,
	startDate: '2026-01-01'
}

export const ruamsukPlatingJunior: AffiliationItem = {
	id: AffiliationId.RuamsukPlatingJunior,
	affiliation: ruamsukPlating,
	position: Position.JuniorITSupport,
	description:
		'Developing WordPress websites and managing digital marketing campaigns for a leading trophy and award manufacturing company.',
	abilities: [
		wordpress,
		woocommerce,
		css,
		seo,
		googleAnalytics,
		googleAds,
		facebookAds,
		onlineMarketing,
		artificialIntelligence,
		fullStackDevelopment
	],
	type: AffiliationType.Work,
	startDate: '2021-08-01',
	endDate: '2025-07-15'
}
