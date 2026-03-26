import type { AffiliationItem } from '@/common/interface'
import {
	freelanceBlitzwerkAffiliation as freelanceBlitzwerk,
	jasmineTechnologySolutionAffiliation as jasmineTechnologySolution,
	personalProjectsAffiliation as personalProjects,
	ruamsukPlatingSoftwareEngineerFullTime,
	ruamsukPlatingSoftwareEngineerPartTime,
	ruamsukPlatingTechnicalAdvisor,
	thammasatUniversityAffiliation as thammasatUniversity
} from './affiliations'

const affiliations = [
	freelanceBlitzwerk,
	jasmineTechnologySolution,
	ruamsukPlatingSoftwareEngineerPartTime,
	ruamsukPlatingSoftwareEngineerFullTime,
	ruamsukPlatingTechnicalAdvisor,
	personalProjects,
	thammasatUniversity
]

// Sort affiliations by startDate in descending order (newest first)
export const affiliationData: AffiliationItem[] = affiliations.sort((a, b) => {
	return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
})
