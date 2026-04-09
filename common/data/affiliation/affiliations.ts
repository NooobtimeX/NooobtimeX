import { assets } from '@/common/data/assets'
import {
	AffiliationCategory,
	AffiliationEntityType,
	AffiliationId,
	EmploymentType,
	Location,
	Position
} from '@/common/enum'
import type { Affiliation, AffiliationItem } from '@/common/interface'

// --- Entities ---

export const ruamsukPlating: Affiliation = {
	id: AffiliationId.EntityRuamsukPlating,
	name: 'RUAMSUK PLATING LIMITED PARTNERSHIP',
	logo: assets.logos.rsTrophy,
	location: Location.PathumthaniThailand,
	type: AffiliationEntityType.Company
}

export const jasmineTechnologySolution: Affiliation = {
	id: AffiliationId.EntityJasmineTechnologySolution,
	name: 'Jasmine Technology Solution',
	logo: assets.logos.jasmineTech,
	location: Location.NonthaburiThailand,
	type: AffiliationEntityType.Company
}

export const freelanceWithFriends: Affiliation = {
	id: AffiliationId.EntityFreelanceBlitzwerk,
	name: 'Freelance with friends',
	logo: assets.logos.blitzwerk,
	location: Location.Remote,
	type: AffiliationEntityType.Company
}

export const personalProjects: Affiliation = {
	id: AffiliationId.EntityPersonalProjects,
	name: 'Personal Projects',
	logo: assets.logos.nooobtimex,
	location: Location.Remote,
	type: AffiliationEntityType.Personal
}

export const thammasatUniversity: Affiliation = {
	id: AffiliationId.EntityThammasatUniversity,
	name: 'Thammasat University',
	logo: assets.logos.tuLogo,
	location: Location.PathumthaniThailand,
	type: AffiliationEntityType.University
}

// --- Experiences/Roles ---

export const freelanceBlitzwerkAffiliation: AffiliationItem = {
	id: AffiliationId.FreelanceBlitzwerk,
	affiliation: freelanceWithFriends,
	position: Position.FullStackDeveloper,
	description:
		'Collaborated on end-to-end web development projects, delivering scalable solutions tailored to client needs.',
	type: EmploymentType.Freelance,
	category: AffiliationCategory.Work,
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
	category: AffiliationCategory.Work,
	startDate: '2025-07-16',
	endDate: '2026-05-31'
}

export const ruamsukPlatingSoftwareEngineerPartTime: AffiliationItem = {
	id: AffiliationId.RuamsukPlatingSoftwareEngineerPartTime,
	affiliation: ruamsukPlating,
	position: Position.SoftwareEngineer,
	description:
		'Full Stack & SEO: Drove full-stack web application development while integrating targeted SEO and online marketing strategies. Digital Transformation: Led digital organizational transformation, modernizing legacy workflows to increase operational efficiency.',
	type: EmploymentType.PartTime,
	category: AffiliationCategory.Work,
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
	category: AffiliationCategory.Work,
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
	category: AffiliationCategory.Work,
	startDate: '2026-01-01'
}

export const personalProjectsAffiliation: AffiliationItem = {
	id: AffiliationId.PersonalProjects,
	affiliation: personalProjects,
	position: Position.Developer,
	description: 'Developing and maintaining high-impact personal projects and open-source contributions.',
	type: EmploymentType.Freelance,
	category: AffiliationCategory.Personal,
	startDate: '2024-10-10'
}

export const thammasatUniversityAffiliation: AffiliationItem = {
	id: AffiliationId.ThammasatUniversity,
	affiliation: thammasatUniversity,
	position: Position.CollegeStudent,
	description:
		'Bachelor of Science in Computer Science. Specialized in full-stack development and system architecture through various academic and research projects.',
	type: EmploymentType.FullTime,
	category: AffiliationCategory.Education,
	startDate: '2021-06-01',
	endDate: '2025-06-30'
}
