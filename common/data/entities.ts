import type { Organization } from '../interfaces'
import { assets } from './assets'

export const ruamsukPlating: Organization = {
	id: 'ruamsuk-plating',
	name: 'RUAMSUK PLATING LIMITED PARTNERSHIP',
	logo: assets.logos.rsTrophy,
	location: 'pathumthani-thailand',
	type: 'company'
}

export const jasmineTechnologySolution: Organization = {
	id: 'jasmine-technology-solution',
	name: 'Jasmine Technology Solution',
	logo: assets.logos.jasmineTech,
	location: 'nonthaburi-thailand',
	type: 'company'
}

export const freelanceWithFriends: Organization = {
	id: 'freelance-blitzwerk',
	name: 'Freelance with friends',
	logo: assets.logos.blitzwerk,
	location: 'remote',
	type: 'company'
}

export const personalProjects: Organization = {
	id: 'personal-projects',
	name: 'Personal Projects',
	logo: assets.logos.nooobtimex,
	location: 'remote',
	type: 'personal'
}

export const thammasatUniversity: Organization = {
	id: 'thammasat-university',
	name: 'Thammasat University',
	logo: assets.logos.tuLogo,
	location: 'pathumthani-thailand',
	type: 'university'
}

export const entitiesData: Organization[] = [
	ruamsukPlating,
	jasmineTechnologySolution,
	freelanceWithFriends,
	personalProjects,
	thammasatUniversity
]
