import { AffiliationId, AffiliationType, Position } from '@/common/enum'
import type { AffiliationItem } from '@/common/interface'
import { ruamsukPlating } from './companies-info'

export const ruamsukPlatingSoftwareEngineerPartTime: AffiliationItem = {
	id: AffiliationId.RuamsukPlatingSoftwareEngineerPartTime,
	affiliation: ruamsukPlating,
	position: Position.SoftwareEngineer,
	description:
		'Full Stack & SEO: Drove full-stack web application development while integrating targeted SEO and online marketing strategies. Digital Transformation: Led AI and digital organizational transformation, modernizing legacy workflows to increase operational efficiency.',
	type: AffiliationType.PartTime,
	startDate: '2021-08-01',
	endDate: '2025-05-31'
}
