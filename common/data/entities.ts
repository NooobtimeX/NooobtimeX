import type { Organization } from '../interfaces'

export const ruamsukPlating: Organization = {
	id: 'ruamsuk-plating',
	name: 'RUAMSUK PLATING LIMITED PARTNERSHIP',
	logo: '/logo/RSTROPHY.png',
	location: 'pathumthani-thailand',
	type: 'company'
}

export const jasmineTechnologySolution: Organization = {
	id: 'jasmine-technology-solution',
	name: 'Jasmine Technology Solution',
	logo: '/logo/JTS.png',
	location: 'nonthaburi-thailand',
	type: 'company'
}

export const freelanceWithFriends: Organization = {
	id: 'freelance-blitzwerk',
	name: 'Freelance with friends',
	logo: '/logo/blitzwerk.png',
	location: 'remote',
	type: 'company'
}

export const personalProjects: Organization = {
	id: 'personal-projects',
	name: 'Personal Projects',
	logo: '/logo/logo.jpg',
	location: 'remote',
	type: 'personal'
}

export const thammasatUniversity: Organization = {
	id: 'thammasat-university',
	name: 'Thammasat University',
	logo: '/logo/tu-logo.jpg',
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
