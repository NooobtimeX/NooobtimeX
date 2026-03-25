import { betterauth, minio, nestjs, nextjs, tailwindcss } from '@/common/data/ability'
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
	description:
		'Microservices Management: Orchestrate and maintain over 20 concurrent microservices for the LOOKLOOKPET application. CI/CD & Infrastructure: Architected and deployed a robust CI/CD pipeline managing Dockerized services on Railway. Agile Leadership: Partner directly with the Product Owner to define strategic project milestones.',
	abilities: [nextjs, nestjs, tailwindcss, minio, betterauth],
	type: AffiliationType.Work,
	startDate: '2025-06-01'
}
