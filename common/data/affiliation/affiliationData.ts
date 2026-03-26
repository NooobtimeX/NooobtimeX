import type { AffiliationItem } from '@/common/interface'
import {
	freelanceBlitzwerkAffiliation as freelanceBlitzwerk,
	jasmineTechnologySolutionAffiliation as jasmineTechnologySolution,
	personalProjectsAffiliation as personalProjects,
	ruamsukPlatingSoftwareEngineerFullTime,
	ruamsukPlatingSoftwareEngineerPartTime,
	ruamsukPlatingTechnicalAdvisor
} from './affiliations'

const affiliations = [
	freelanceBlitzwerk,
	jasmineTechnologySolution,
	ruamsukPlatingSoftwareEngineerPartTime,
	ruamsukPlatingSoftwareEngineerFullTime,
	ruamsukPlatingTechnicalAdvisor,
	personalProjects
]

// Sort affiliations by startDate in descending order (newest first)
export const affiliationData: AffiliationItem[] = affiliations.sort((a, b) => {
	return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
})
