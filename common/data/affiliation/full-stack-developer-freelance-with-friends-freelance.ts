import { AffiliationId, AffiliationType, Position } from '@/common/enum'
import type { AffiliationItem } from '@/common/interface'
import { freelanceWithFriends } from './companies-info'

export const freelanceBlitzwerkAffiliation: AffiliationItem = {
	id: AffiliationId.FreelanceBlitzwerk,
	affiliation: freelanceWithFriends,
	position: Position.FullStackDeveloper,
	description:
		'Collaborated on end-to-end web development projects, delivering scalable solutions tailored to client needs.',
	type: AffiliationType.Freelance,
	startDate: '2025-01-01',
	endDate: '2025-12-31'
}
