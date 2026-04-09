import {
	EmploymentType,
	EntityId,
	EntityType,
	ExperienceCategory,
	ExperienceId,
	Location,
	Position
} from '@/common/enums'
import type { Affiliation, AffiliationItem } from '@/common/interfaces'
import { sortByDateDesc } from '@/common/utils'
import { assets } from './assets'

// --- Entities ---

export const ruamsukPlating: Affiliation = {
	id: EntityId.RuamsukPlating,
	name: 'RUAMSUK PLATING LIMITED PARTNERSHIP',
	logo: assets.logos.rsTrophy,
	location: Location.PathumthaniThailand,
	type: EntityType.Company
}

export const jasmineTechnologySolution: Affiliation = {
	id: EntityId.JasmineTechnologySolution,
	name: 'Jasmine Technology Solution',
	logo: assets.logos.jasmineTech,
	location: Location.NonthaburiThailand,
	type: EntityType.Company
}

export const freelanceWithFriends: Affiliation = {
	id: EntityId.FreelanceBlitzwerk,
	name: 'Freelance with friends',
	logo: assets.logos.blitzwerk,
	location: Location.Remote,
	type: EntityType.Company
}

export const personalProjects: Affiliation = {
	id: EntityId.PersonalProjects,
	name: 'Personal Projects',
	logo: assets.logos.nooobtimex,
	location: Location.Remote,
	type: EntityType.Personal
}

export const thammasatUniversity: Affiliation = {
	id: EntityId.ThammasatUniversity,
	name: 'Thammasat University',
	logo: assets.logos.tuLogo,
	location: Location.PathumthaniThailand,
	type: EntityType.University
}

// --- Experiences/Roles ---

export const freelanceBlitzwerkAffiliation: AffiliationItem = {
	id: ExperienceId.FreelanceBlitzwerk,
	affiliation: freelanceWithFriends,
	position: Position.FullStackDeveloper,
	description:
		'Collaborated on end-to-end web development projects, delivering scalable solutions tailored to client needs.',
	type: EmploymentType.Freelance,
	category: ExperienceCategory.Work,
	startDate: '2025-01-01',
	endDate: '2025-12-31'
}

export const jasmineTechnologySolutionAffiliation: AffiliationItem = {
	id: ExperienceId.JasmineTechnologySolution,
	affiliation: jasmineTechnologySolution,
	position: Position.Developer,
	description:
		'Microservices Management: Orchestrate and maintain over 20 concurrent microservices for the LOOKLOOKPET application. CI/CD & Infrastructure: Architected and deployed a robust CI/CD pipeline managing Dockerized services on Railway. Agile Leadership: Partner directly with the Product Owner to define strategic project milestones.',
	type: EmploymentType.FullTime,
	category: ExperienceCategory.Work,
	startDate: '2025-07-16',
	endDate: '2026-05-31'
}

export const ruamsukPlatingSoftwareEngineerPartTime: AffiliationItem = {
	id: ExperienceId.RuamsukPlatingSoftwareEngineerPartTime,
	affiliation: ruamsukPlating,
	position: Position.SoftwareEngineer,
	description:
		'Full Stack & SEO: Drove full-stack web application development while integrating targeted SEO and online marketing strategies. Digital Transformation: Led digital organizational transformation, modernizing legacy workflows to increase operational efficiency.',
	type: EmploymentType.PartTime,
	category: ExperienceCategory.Work,
	startDate: '2021-08-01',
	endDate: '2025-05-31'
}

export const ruamsukPlatingSoftwareEngineerFullTime: AffiliationItem = {
	id: ExperienceId.RuamsukPlatingSoftwareEngineerFullTime,
	affiliation: ruamsukPlating,
	position: Position.SoftwareEngineer,
	description:
		'Full Stack & SEO: Drove full-stack web application development while integrating targeted SEO and online marketing strategies. Digital Transformation: Led digital organizational transformation, modernizing legacy workflows to increase operational efficiency.',
	type: EmploymentType.FullTime,
	category: ExperienceCategory.Work,
	startDate: '2025-06-01',
	endDate: '2025-07-15'
}

export const ruamsukPlatingTechnicalAdvisor: AffiliationItem = {
	id: ExperienceId.RuamsukPlatingTechnicalAdvisor,
	affiliation: ruamsukPlating,
	position: Position.TechnicalAdvisor,
	description:
		'Strategic Advisory & Engineering Lead: Providing high-level technical guidance and architectural oversight for the RS TROPHY ecosystem. Taking end-to-end ownership of the technical strategy, infrastructure scaling, and long-term technology roadmaps as the sole technical architect for the organization.',
	type: EmploymentType.Contract,
	category: ExperienceCategory.Work,
	startDate: '2026-01-01'
}

export const personalProjectsAffiliation: AffiliationItem = {
	id: ExperienceId.PersonalProjects,
	affiliation: personalProjects,
	position: Position.Developer,
	description: 'Developing and maintaining high-impact personal projects and open-source contributions.',
	type: EmploymentType.Freelance,
	category: ExperienceCategory.Personal,
	startDate: '2024-10-10'
}

export const thammasatUniversityAffiliation: AffiliationItem = {
	id: ExperienceId.ThammasatUniversity,
	affiliation: thammasatUniversity,
	position: Position.CollegeStudent,
	description:
		'Bachelor of Science in Computer Science. Specialized in full-stack development and system architecture through various academic and research projects.',
	type: EmploymentType.FullTime,
	category: ExperienceCategory.Education,
	startDate: '2021-06-01',
	endDate: '2025-06-30'
}

// --- Data Aggregation & Logic ---

const all: AffiliationItem[] = [
	freelanceBlitzwerkAffiliation,
	jasmineTechnologySolutionAffiliation,
	ruamsukPlatingSoftwareEngineerPartTime,
	ruamsukPlatingSoftwareEngineerFullTime,
	ruamsukPlatingTechnicalAdvisor,
	personalProjectsAffiliation,
	thammasatUniversityAffiliation
]

// All affiliations sorted by startDate (newest first)
export const affiliationData: AffiliationItem[] = [...all].sort(sortByDateDesc)

// Filtered slices by category
export const workExperienceData: AffiliationItem[] = all
	.filter(a => a.category === ExperienceCategory.Work)
	.sort(sortByDateDesc)

export const educationData: AffiliationItem[] = all
	.filter(a => a.category === ExperienceCategory.Education)
	.sort(sortByDateDesc)

export const personalProjectsData: AffiliationItem[] = all
	.filter(a => a.category === ExperienceCategory.Personal)
	.sort(sortByDateDesc)
