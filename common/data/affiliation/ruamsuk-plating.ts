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
		'Full Stack & SEO: Drove full-stack web application development while integrating targeted SEO and online marketing strategies. Digital Transformation: Led AI and digital organizational transformation, modernizing legacy workflows to increase operational efficiency.',
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
		'Full Stack & SEO: Drove full-stack web application development while integrating targeted SEO and online marketing strategies. Digital Transformation: Led AI and digital organizational transformation, modernizing legacy workflows to increase operational efficiency.',
	abilities: [css, seo, googleAnalytics, googleAds, facebookAds, onlineMarketing, artificialIntelligence],
	type: AffiliationType.FullTime,
	startDate: '2025-06-01'
}
