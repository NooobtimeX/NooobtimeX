import type { AffiliationItem } from '@/common/interface'
import {
	born,
	freelanceBlitzwerkAffiliation as freelanceBlitzwerk,
	jasmineTechnologySolutionAffiliation as jasmineTechnologySolution,
	ruamsukPlatingSoftwareEngineerFullTime,
	ruamsukPlatingSoftwareEngineerPartTime,
	ruamsukPlatingTechnicalAdvisor
} from './affiliations'

const affiliations = [
	born,
	freelanceBlitzwerk,
	jasmineTechnologySolution,
	ruamsukPlatingSoftwareEngineerPartTime,
	ruamsukPlatingSoftwareEngineerFullTime,
	ruamsukPlatingTechnicalAdvisor
]

// Sort affiliations by startDate in descending order (newest first)
export const affiliationData: AffiliationItem[] = affiliations.sort((a, b) => {
	return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
})
