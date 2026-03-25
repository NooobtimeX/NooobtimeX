import type { AffiliationItem } from '@/common/interface'
import { jasmineTechnologySolutionAffiliation as jasmineTechnologySolution } from './developer-jasmine-technology-solution-work'
import { freelanceBlitzwerkAffiliation as freelanceBlitzwerk } from './full-stack-developer-freelance-with-friends-freelance'
import { born } from './newborn-private-life-life-event'
import { ruamsukPlatingSoftwareEngineerFullTime } from './software-engineer-ruamsuk-plating-full-time'
import { ruamsukPlatingSoftwareEngineerPartTime } from './software-engineer-ruamsuk-plating-part-time'
import { ruamsukPlatingTechnicalAdvisor } from './technical-advisor-ruamsuk-plating'

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
