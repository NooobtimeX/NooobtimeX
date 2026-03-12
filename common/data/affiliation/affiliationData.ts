import type { AffiliationItem } from '@/common/interface'
import { freelanceBlitzwerkAffiliation as freelanceBlitzwerk } from './freelance-blitzwerk'
import { jasmineTechnologySolutionAffiliation as jasmineTechnologySolution } from './jasmine-technology-solution'
import { born } from './personal'
import { ruamsukPlatingSoftwareEngineerFullTime, ruamsukPlatingSoftwareEngineerPartTime } from './ruamsuk-plating'

const affiliations = [
	born,
	freelanceBlitzwerk,
	jasmineTechnologySolution,
	ruamsukPlatingSoftwareEngineerPartTime,
	ruamsukPlatingSoftwareEngineerFullTime
]

// Sort affiliations by startDate in descending order (newest first)
export const affiliationData: AffiliationItem[] = affiliations.sort((a, b) => {
	return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
})
