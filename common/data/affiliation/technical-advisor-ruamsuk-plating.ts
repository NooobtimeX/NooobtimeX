import { AffiliationId, AffiliationType, Position } from '@/common/enum'
import type { AffiliationItem } from '@/common/interface'
import { ruamsukPlating } from './companies-info'

export const ruamsukPlatingTechnicalAdvisor: AffiliationItem = {
	id: AffiliationId.RuamsukPlatingTechnicalAdvisor,
	affiliation: ruamsukPlating,
	position: Position.TechnicalAdvisor,
	description:
		'Strategic Advisory & Engineering Lead: Providing high-level technical guidance and architectural oversight for the RS TROPHY ecosystem. Taking end-to-end ownership of the technical strategy, infrastructure scaling, and long-term technology roadmaps as the sole technical architect for the organization.',
	type: AffiliationType.Contract,
	startDate: '2026-01-01'
}
