import { assets } from '@/common/data/assets'
import { AffiliationEntityType, AffiliationId, EmploymentType, Location, Position } from '@/common/enum'
import type { Affiliation, AffiliationItem } from '@/common/interface'

// --- Companies/Entities ---

export const ruamsukPlating: Affiliation = {
	id: 'ruamsuk-plating',
	name: 'RUAMSUK PLATING LIMITED PARTNERSHIP',
	logo: assets.logos.rsTrophy,
	location: Location.PathumthaniThailand,
	type: AffiliationEntityType.Company
}

export const jasmineTechnologySolution: Affiliation = {
	id: 'jasmine-technology-solution',
	name: 'Jasmine Technology Solution',
	logo: assets.logos.jasmineTech,
	location: Location.NonthaburiThailand,
	type: AffiliationEntityType.Company
}

export const freelanceWithFriends: Affiliation = {
	id: 'freelance-blitzwerk',
	name: 'Freelance with friends',
	logo: assets.logos.blitzwerk,
	location: Location.Remote,
	type: AffiliationEntityType.Company
}

export const privateLife: Affiliation = {
	id: 'private-life',
	name: 'Private Life',
	location: Location.BangkokThailand,
	type: AffiliationEntityType.Personal
}

// --- Experiences/Roles ---

export const born: AffiliationItem = {
	id: 'born',
	affiliation: privateLife,
	position: Position.NewBorn,
	description: 'The beginning of the journey.',
	type: EmploymentType.LifeEvent,
	startDate: '1999-01-01'
}

export const freelanceBlitzwerkAffiliation: AffiliationItem = {
	id: AffiliationId.FreelanceBlitzwerk,
	affiliation: freelanceWithFriends,
	position: Position.FullStackDeveloper,
	description:
		'Collaborated on end-to-end web development projects, delivering scalable solutions tailored to client needs.',
	type: EmploymentType.Freelance,
	startDate: '2025-01-01',
	endDate: '2025-12-31'
}

export const jasmineTechnologySolutionAffiliation: AffiliationItem = {
	id: AffiliationId.JasmineTechnologySolution,
	affiliation: jasmineTechnologySolution,
	position: Position.Developer,
	description:
		'Microservices Management: Orchestrate and maintain over 20 concurrent microservices for the LOOKLOOKPET application. CI/CD & Infrastructure: Architected and deployed a robust CI/CD pipeline managing Dockerized services on Railway. Agile Leadership: Partner directly with the Product Owner to define strategic project milestones.',
	type: EmploymentType.FullTime,
	startDate: '2025-06-01'
}

export const ruamsukPlatingSoftwareEngineerPartTime: AffiliationItem = {
	id: AffiliationId.RuamsukPlatingSoftwareEngineerPartTime,
	affiliation: ruamsukPlating,
	position: Position.SoftwareEngineer,
	description:
		'Full Stack & SEO: Drove full-stack web application development while integrating targeted SEO and online marketing strategies. Digital Transformation: Led digital organizational transformation, modernizing legacy workflows to increase operational efficiency.',
	type: EmploymentType.PartTime,
	startDate: '2021-08-01',
	endDate: '2025-05-31'
}

export const ruamsukPlatingSoftwareEngineerFullTime: AffiliationItem = {
	id: AffiliationId.RuamsukPlatingSoftwareEngineerFullTime,
	affiliation: ruamsukPlating,
	position: Position.SoftwareEngineer,
	description:
		'Full Stack & SEO: Drove full-stack web application development while integrating targeted SEO and online marketing strategies. Digital Transformation: Led digital organizational transformation, modernizing legacy workflows to increase operational efficiency.',
	type: EmploymentType.FullTime,
	startDate: '2025-06-01',
	endDate: '2025-07-15'
}

export const ruamsukPlatingTechnicalAdvisor: AffiliationItem = {
	id: AffiliationId.RuamsukPlatingTechnicalAdvisor,
	affiliation: ruamsukPlating,
	position: Position.TechnicalAdvisor,
	description:
		'Strategic Advisory & Engineering Lead: Providing high-level technical guidance and architectural oversight for the RS TROPHY ecosystem. Taking end-to-end ownership of the technical strategy, infrastructure scaling, and long-term technology roadmaps as the sole technical architect for the organization.',
	type: EmploymentType.Contract,
	startDate: '2026-01-01'
}
