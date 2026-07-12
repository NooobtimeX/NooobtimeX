import type { ExperienceItem } from '../interfaces'
import { sortByDateDesc } from '../utils'
import { freelanceWithFriends, jasmineTechnologySolution, personalProjects, ruamsukPlating } from './entities'

// --- Roles ---

export const freelanceBlitzwerkExperience: ExperienceItem = {
	id: 'freelance-blitzwerk-role',
	organization: freelanceWithFriends,
	position: 'developer',
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
		'Full-Stack Platform Ownership: Led full-stack development of the LOOKLOOK PET platform across storefront, B2B partner console, and Medusa-based Mercur marketplace. Microservices & Checkout: Managed 20+ NestJS microservices communicating over NATS, and built a custom native payment UI featuring client-side Omise card tokenization, inline PromptPay QR polling, and card-lock promotions. Team & Claim Workflows: Owned the B2B portal (~55% commits) delivering organization switchers, dynamic roles, and claim-an-unlisted-place verification logic. Infrastructure: Maintained Dockerized services on Railway via GitHub CI/CD, and migrated storage to Cloudflare R2.',
	type: 'full-time',
	category: 'work',
	startDate: '2025-07-16',
	endDate: '2026-07-31'
}

export const ruamsukPlatingDevelopereerPartTime: ExperienceItem = {
	id: 'ruamsuk-software-engineer-part-time',
	organization: ruamsukPlating,
	position: 'developer',
	description:
		'Full Stack & SEO: Drove full-stack web application development while integrating targeted SEO and online marketing strategies. Digital Transformation: Led digital organizational transformation, modernizing legacy workflows to increase operational efficiency.',
	type: 'part-time',
	category: 'work',
	startDate: '2021-08-01',
	endDate: '2025-05-31'
}

export const ruamsukPlatingDeveloperFullTime: ExperienceItem = {
	id: 'ruamsuk-software-engineer-full-time',
	organization: ruamsukPlating,
	position: 'developer',
	description:
		'Full Stack & SEO: Drove full-stack web application development while integrating targeted SEO and online marketing strategies. Digital Transformation: Led digital organizational transformation, modernizing legacy workflows to increase operational efficiency.',
	type: 'full-time',
	category: 'work',
	startDate: '2025-06-01',
	endDate: '2025-07-15'
}

export const ruamsukPlatingCto: ExperienceItem = {
	id: 'ruamsuk-cto',
	organization: ruamsukPlating,
	position: 'chief-technology-officer',
	description:
		'Total Technology Ownership: As CTO, own every technology decision and system in the company end-to-end — from setting the technical strategy to single-handedly delivering each software project from architecture to deployment. Full-Stack & Infrastructure: Build and run all web applications, services, cloud infrastructure, CI/CD, and reliability. IT, Hardware & Systems: Handle all non-software technology as well — IT support, hardware, networking, device and equipment setup, and technology procurement and vendor management across the office and factory floor. Product & Design Leadership: Act as sole PM, PO, and UI/UX designer, authoring all product documentation and roadmaps. AI, Automation & Data: Build AI automation workflows, supply chain solutions, and internal tooling that streamline operations across the business. Cross-Functional Impact: Partner directly with finance and operations to digitize and optimize every process — the single point of ownership for everything technical the company runs on.',
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
	startDate: '2021-06-01'
}

// --- Aggregation ---

const all: ExperienceItem[] = [
	freelanceBlitzwerkExperience,
	jasmineTechnologySolutionExperience,
	ruamsukPlatingDevelopereerPartTime,
	ruamsukPlatingDeveloperFullTime,
	ruamsukPlatingCto,
	personalProjectsExperience
]

export const experiencesData: ExperienceItem[] = [...all].sort(sortByDateDesc)

export const workExperienceData: ExperienceItem[] = all.filter(a => a.category === 'work').sort(sortByDateDesc)
export const educationData: ExperienceItem[] = all.filter(a => a.category === 'education').sort(sortByDateDesc)
export const personalProjectsData: ExperienceItem[] = all.filter(a => a.category === 'personal').sort(sortByDateDesc)
