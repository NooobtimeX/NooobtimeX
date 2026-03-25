import { AffiliationId, AffiliationType, Position } from '@/common/enum'
import type { AffiliationItem } from '@/common/interface'
import { jasmineTechnologySolution } from './companies-info'

export const jasmineTechnologySolutionAffiliation: AffiliationItem = {
	id: AffiliationId.JasmineTechnologySolution,
	affiliation: jasmineTechnologySolution,
	position: Position.Developer,
	description:
		'Microservices Management: Orchestrate and maintain over 20 concurrent microservices for the LOOKLOOKPET application. CI/CD & Infrastructure: Architected and deployed a robust CI/CD pipeline managing Dockerized services on Railway. Agile Leadership: Partner directly with the Product Owner to define strategic project milestones.',
	type: AffiliationType.Work,
	startDate: '2025-06-01'
}
