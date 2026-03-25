import { nextjs, nodejs, postgresql, prisma, typescript } from '@/common/data/ability'
import { AffiliationEntityType, AffiliationId, AffiliationType, Location, Position } from '@/common/enum'
import type { Affiliation, AffiliationItem } from '@/common/interface'

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
	description:
		'Collaborated on end-to-end web development projects, delivering scalable solutions tailored to client needs.',
	abilities: [nextjs, typescript, nodejs, postgresql, prisma],
	type: AffiliationType.Freelance,
	startDate: '2025-01-01',
	endDate: '2025-12-31'
}
