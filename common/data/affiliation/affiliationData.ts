import { AffiliationCategory } from '@/common/enum'
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

const sortDesc = (a: AffiliationItem, b: AffiliationItem) =>
	new Date(b.startDate).getTime() - new Date(a.startDate).getTime()

const all: AffiliationItem[] = [
	freelanceBlitzwerk,
	jasmineTechnologySolution,
	ruamsukPlatingSoftwareEngineerPartTime,
	ruamsukPlatingSoftwareEngineerFullTime,
	ruamsukPlatingTechnicalAdvisor,
	personalProjects,
	thammasatUniversity
]

// All affiliations sorted by startDate (newest first)
export const affiliationData: AffiliationItem[] = [...all].sort(sortDesc)

// Filtered slices by category
export const workExperienceData: AffiliationItem[] = all
	.filter(a => a.category === AffiliationCategory.Work)
	.sort(sortDesc)

export const educationData: AffiliationItem[] = all
	.filter(a => a.category === AffiliationCategory.Education)
	.sort(sortDesc)

export const personalProjectsData: AffiliationItem[] = all
	.filter(a => a.category === AffiliationCategory.Personal)
	.sort(sortDesc)
