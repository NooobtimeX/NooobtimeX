import type { ExperienceItem } from '../interfaces'
import { sortByDateDesc } from '../utils'
import { freelanceWithFriends, jasmineTechnologySolution, personalProjects, ruamsukPlating } from './entities'

// --- Roles ---

export const freelanceBlitzwerkExperience: ExperienceItem = {
	id: 'freelance-blitzwerk-role',
	organization: freelanceWithFriends,
	position: 'full-stack-developer',
	description:
		'Collaborated on end-to-end web development projects, delivering scalable solutions tailored to client needs.',
	type: 'freelance',
	category: 'work',
	startDate: '2025-01-01',
	endDate: '2025-12-31'
}

export const jasmineTechnologySolutionExperience: ExperienceItem = {
	id: 'jasmine-tech',
	organization: jasmineTechnologySolution,
	position: 'developer',
	description:
		'Microservices Management: Orchestrate and maintain over 20 concurrent microservices for the LOOKLOOKPET application. CI/CD & Infrastructure: Architected and deployed a robust CI/CD pipeline managing Dockerized services on Railway. Agile Leadership: Partner directly with the Product Owner to define strategic project milestones.',
	type: 'full-time',
	category: 'work',
	startDate: '2025-07-16',
	endDate: '2026-07-31'
}

export const ruamsukPlatingSoftwareEngineerPartTime: ExperienceItem = {
	id: 'ruamsuk-software-engineer-part-time',
	organization: ruamsukPlating,
	position: 'software-engineer',
	description:
		'Full Stack & SEO: Drove full-stack web application development while integrating targeted SEO and online marketing strategies. Digital Transformation: Led digital organizational transformation, modernizing legacy workflows to increase operational efficiency.',
	type: 'part-time',
	category: 'work',
	startDate: '2021-08-01',
	endDate: '2025-05-31'
}

export const ruamsukPlatingSoftwareEngineerFullTime: ExperienceItem = {
	id: 'ruamsuk-software-engineer-full-time',
	organization: ruamsukPlating,
	position: 'software-engineer',
	description:
		'Full Stack & SEO: Drove full-stack web application development while integrating targeted SEO and online marketing strategies. Digital Transformation: Led digital organizational transformation, modernizing legacy workflows to increase operational efficiency.',
	type: 'full-time',
	category: 'work',
	startDate: '2025-06-01',
	endDate: '2025-07-15'
}

export const ruamsukPlatingProductLead: ExperienceItem = {
	id: 'ruamsuk-product-lead',
	organization: ruamsukPlating,
	position: 'product-lead',
	description:
		'Solo Full Stack Ownership: Single-handedly delivered end-to-end web application projects, owning every stage from architecture to deployment. Product & Design Leadership: Acted as sole PM, PO, and UI/UX designer, authoring all project documentation independently. Supply Chain & AI Automation: Built supply chain solutions and AI automation workflows, and served as PM for a no-code web application. Finance Optimization: Worked directly with the accountant to streamline and optimize financial processes.',
	type: 'full-time',
	category: 'work',
	startDate: '2026-08-01'
}

export const personalProjectsExperience: ExperienceItem = {
	id: 'personal-projects-role',
	organization: personalProjects,
	position: 'developer',
	description: 'Developing and maintaining high-impact personal projects and open-source contributions.',
	type: 'freelance',
	category: 'personal',
	startDate: '2024-10-10'
}

// --- Aggregation ---

const all: ExperienceItem[] = [
	freelanceBlitzwerkExperience,
	jasmineTechnologySolutionExperience,
	ruamsukPlatingSoftwareEngineerPartTime,
	ruamsukPlatingSoftwareEngineerFullTime,
	ruamsukPlatingProductLead,
	personalProjectsExperience
]

export const experiencesData: ExperienceItem[] = [...all].sort(sortByDateDesc)

export const workExperienceData: ExperienceItem[] = all.filter(a => a.category === 'work').sort(sortByDateDesc)
export const educationData: ExperienceItem[] = all.filter(a => a.category === 'education').sort(sortByDateDesc)
export const personalProjectsData: ExperienceItem[] = all.filter(a => a.category === 'personal').sort(sortByDateDesc)
