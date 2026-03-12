import {
	artificialIntelligence,
	css,
	facebookAds,
	googleAds,
	googleAnalytics,
	onlineMarketing,
	seo
} from '@/common/data/ability'
import { AffiliationEntityType, AffiliationId, AffiliationType, Location, Position } from '@/common/enum'
import type { Affiliation, AffiliationItem } from '@/common/interface'

export const ruamsukPlating: Affiliation = {
	id: 'ruamsuk-plating',
	name: 'RUAMSUK PLATING LIMITED PARTNERSHIP',
	logo: '/logo/RSTROPHY.png',
	location: Location.PathumthaniThailand,
	type: AffiliationEntityType.Company
}

export const ruamsukPlatingSoftwareEngineerPartTime: AffiliationItem = {
	id: AffiliationId.RuamsukPlatingSoftwareEngineerPartTime,
	affiliation: ruamsukPlating,
	position: Position.SoftwareEngineer,
	description:
		'Developing WordPress websites and managing digital marketing campaigns for a leading trophy and award manufacturing company.',
	abilities: [css, seo, googleAnalytics, googleAds, facebookAds, onlineMarketing, artificialIntelligence],
	type: AffiliationType.PartTime,
	startDate: '2021-08-01',
	endDate: '2025-05-31'
}

export const ruamsukPlatingSoftwareEngineerFullTime: AffiliationItem = {
	id: AffiliationId.RuamsukPlatingSoftwareEngineerFullTime,
	affiliation: ruamsukPlating,
	position: Position.SoftwareEngineer,
	description:
		'Developing WordPress websites and managing digital marketing campaigns for a leading trophy and award manufacturing company.',
	abilities: [css, seo, googleAnalytics, googleAds, facebookAds, onlineMarketing, artificialIntelligence],
	type: AffiliationType.FullTime,
	startDate: '2025-06-01',
	endDate: '2025-07-15'
}
