import { mongodb, nestjs, nextjs } from '@/common/data/ability'
import { AffiliationEntityType, AffiliationId, AffiliationType, Location, Position } from '@/common/enum'
import type { Affiliation, AffiliationItem } from '@/common/interface'

export const jasmineTechnologySolution: Affiliation = {
	id: 'jasmine-technology-solution',
	name: 'Jasmine Technology Solution',
	logo: '/logo/JTS.png',
	location: Location.NonthaburiThailand,
	type: AffiliationEntityType.Company
}

export const jasmineTechnologySolutionAffiliation: AffiliationItem = {
	id: AffiliationId.JasmineTechnologySolution,
	affiliation: jasmineTechnologySolution,
	position: Position.Developer,
	description: 'Technology consulting company specializing in enterprise software solutions.',
	abilities: [nextjs, nestjs, mongodb],
	type: AffiliationType.Work,
	startDate: '2025-07-16'
}
