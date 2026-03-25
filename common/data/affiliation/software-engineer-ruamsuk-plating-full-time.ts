import { AffiliationId, AffiliationType, Position } from '@/common/enum'
import type { AffiliationItem } from '@/common/interface'
import { ruamsukPlating } from './companies-info'

export const ruamsukPlatingSoftwareEngineerFullTime: AffiliationItem = {
	id: AffiliationId.RuamsukPlatingSoftwareEngineerFullTime,
	affiliation: ruamsukPlating,
	position: Position.SoftwareEngineer,
	description:
		'Full Stack & SEO: Drove full-stack web application development while integrating targeted SEO and online marketing strategies. Digital Transformation: Led AI and digital organizational transformation, modernizing legacy workflows to increase operational efficiency.',
	type: AffiliationType.FullTime,
	startDate: '2025-06-01',
	endDate: '2025-07-15'
}
