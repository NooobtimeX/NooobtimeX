import { EmploymentType, ExperienceCategory, ExperienceId, Position } from '../enums'
import type { ExperienceItem } from '../interfaces'
import { sortByDateDesc } from '../utils'
import {
	freelanceWithFriends,
	jasmineTechnologySolution,
	personalProjects,
	ruamsukPlating,
	thammasatUniversity
} from './entities'

// --- Experiences/Roles ---

export const freelanceBlitzwerkExperience: ExperienceItem = {
	id: ExperienceId.FreelanceBlitzwerk,
	organization: freelanceWithFriends,
	position: Position.FullStackDeveloper,
	description:
		'Collaborated on end-to-end web development projects, delivering scalable solutions tailored to client needs.',
	type: EmploymentType.Freelance,
	category: ExperienceCategory.Work,
	startDate: '2025-01-01',
	endDate: '2025-12-31'
}

export const jasmineTechnologySolutionExperience: ExperienceItem = {
	id: ExperienceId.JasmineTechnologySolution,
	organization: jasmineTechnologySolution,
	position: Position.Developer,
	description:
		'Microservices Management: Orchestrate and maintain over 20 concurrent microservices for the LOOKLOOKPET application. CI/CD & Infrastructure: Architected and deployed a robust CI/CD pipeline managing Dockerized services on Railway. Agile Leadership: Partner directly with the Product Owner to define strategic project milestones.',
	type: EmploymentType.FullTime,
	category: ExperienceCategory.Work,
	startDate: '2025-07-16',
	endDate: '2026-07-31'
}

export const ruamsukPlatingSoftwareEngineerPartTime: ExperienceItem = {
	id: ExperienceId.RuamsukPlatingSoftwareEngineerPartTime,
	organization: ruamsukPlating,
	position: Position.SoftwareEngineer,
	description:
		'Full Stack & SEO: Drove full-stack web application development while integrating targeted SEO and online marketing strategies. Digital Transformation: Led digital organizational transformation, modernizing legacy workflows to increase operational efficiency.',
	type: EmploymentType.PartTime,
	category: ExperienceCategory.Work,
	startDate: '2021-08-01',
	endDate: '2025-05-31'
}

export const ruamsukPlatingSoftwareEngineerFullTime: ExperienceItem = {
	id: ExperienceId.RuamsukPlatingSoftwareEngineerFullTime,
	organization: ruamsukPlating,
	position: Position.SoftwareEngineer,
	description:
		'Full Stack & SEO: Drove full-stack web application development while integrating targeted SEO and online marketing strategies. Digital Transformation: Led digital organizational transformation, modernizing legacy workflows to increase operational efficiency.',
	type: EmploymentType.FullTime,
	category: ExperienceCategory.Work,
	startDate: '2025-06-01',
	endDate: '2025-07-15'
}

export const ruamsukPlatingProductLead: ExperienceItem = {
	id: ExperienceId.RuamsukPlatingProductLead,
	organization: ruamsukPlating,
	position: Position.ProductLead,
	description:
		'Solo Full Stack Ownership: Single-handedly delivered end-to-end web application projects, owning every stage from architecture to deployment. Product & Design Leadership: Acted as sole PM, PO, and UI/UX designer, authoring all project documentation independently. Supply Chain & AI Automation: Built supply chain solutions and AI automation workflows, and served as PM for a no-code web application. Finance Optimization: Worked directly with the accountant to streamline and optimize financial processes.',
	type: EmploymentType.FullTime,
	category: ExperienceCategory.Work,
	startDate: '2026-08-01'
}

export const personalProjectsExperience: ExperienceItem = {
	id: ExperienceId.PersonalProjects,
	organization: personalProjects,
	position: Position.Developer,
	description: 'Developing and maintaining high-impact personal projects and open-source contributions.',
	type: EmploymentType.Freelance,
	category: ExperienceCategory.Personal,
	startDate: '2024-10-10'
}

export const thammasatUniversityExperience: ExperienceItem = {
	id: ExperienceId.ThammasatUniversity,
	organization: thammasatUniversity,
	position: Position.CollegeStudent,
	description:
		'Bachelor of Science in Computer Science. Specialized in full-stack development and system architecture through various academic and research projects.',
	type: EmploymentType.FullTime,
	category: ExperienceCategory.Education,
	startDate: '2021-06-01',
	endDate: '2025-06-30'
}

// --- Data Aggregation & Logic ---

const all: ExperienceItem[] = [
	freelanceBlitzwerkExperience,
	jasmineTechnologySolutionExperience,
	ruamsukPlatingSoftwareEngineerPartTime,
	ruamsukPlatingSoftwareEngineerFullTime,
	ruamsukPlatingProductLead,
	personalProjectsExperience,
	thammasatUniversityExperience
]

// All affiliations sorted by startDate (newest first)
export const experiencesData: ExperienceItem[] = [...all].sort(sortByDateDesc)

// Filtered slices by category
export const workExperienceData: ExperienceItem[] = all
	.filter(a => a.category === ExperienceCategory.Work)
	.sort(sortByDateDesc)

export const educationData: ExperienceItem[] = all
	.filter(a => a.category === ExperienceCategory.Education)
	.sort(sortByDateDesc)

export const personalProjectsData: ExperienceItem[] = all
	.filter(a => a.category === ExperienceCategory.Personal)
	.sort(sortByDateDesc)

// Backward compatibility aliasing
export const experienceData = experiencesData
