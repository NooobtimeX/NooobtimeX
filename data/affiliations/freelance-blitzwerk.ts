import { AffiliationEntityType, AffiliationId, AffiliationType, Location, Position } from '@/common/enum'
import type { Affiliation, AffiliationItem } from '@/common/interface'
import { nextjs, nodejs, postgresql, prisma, typescript } from '../abilities'

export const freelanceBlitzwerk: Affiliation = {
	id: 'freelance-blitzwerk',
	name: 'Freelance with friends',
	logo: '/logo/blitzwerk.png',
	location: Location.Remote,
	type: AffiliationEntityType.Company
}

export const freelanceBlitzwerkAffiliation: AffiliationItem = {
	id: AffiliationId.FreelanceBlitzwerk,
	affiliation: freelanceBlitzwerk,
	position: Position.FullStackDeveloper,
	description: 'Collaborative freelance work developing modern web applications for various clients.',
	abilities: [nextjs, typescript, nodejs, postgresql, prisma],
	type: AffiliationType.Freelance,
	startDate: '2025-01-01',
	endDate: '2025-12-31'
}
