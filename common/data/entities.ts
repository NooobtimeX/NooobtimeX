import type { Organization } from '../interfaces'
import { assets } from './assets'

export const ruamsukPlating: Organization = {
	id: 'ruamsuk-plating',
	name: 'RUAMSUK PLATING LIMITED PARTNERSHIP',
	logo: assets.logos.rsTrophy,
	location: 'pathumthani-thailand',
	type: 'company',
	description:
		'Thai awards manufacturer behind the RS TROPHY, RS Medal, and RS Award storefronts — custom trophies, plaques, and medals, with the entire technology stack built and run in house.'
}

export const jasmineTechnologySolution: Organization = {
	id: 'jasmine-technology-solution',
	name: 'Jasmine Technology Solution',
	logo: assets.logos.jasmineTech,
	location: 'nonthaburi-thailand',
	type: 'company',
	description:
		'Software solutions company — home of the LOOKLOOK PET platform work: storefront, B2B partner console, microservices, and multi-vendor marketplace.'
}

export const jasTv: Organization = {
	id: 'jas-tv',
	name: 'JAS TV',
	location: 'nonthaburi-thailand',
	type: 'company',
	url: 'https://www.jasmine.com/en/our-business/jas-tv',
	description:
		"Jasmine International's Premier League broadcast arm — holder of the exclusive English Premier League and Emirates FA Cup rights for Thailand, Laos, and Cambodia (seasons 2025/26–2030/31)."
}

export const monomax: Organization = {
	id: 'monomax',
	name: 'MONOMax',
	location: 'bangkok-thailand',
	type: 'company',
	url: 'https://www.monomax.me',
	description:
		"Mono Group streaming platform (Mono Next PCL). MONOMax Sports Premium is JAS's marketing and distribution partner for the Premier League — the platform the EPL licensing portal provisions venue accounts for."
}

export const freelanceWithFriends: Organization = {
	id: 'freelance-blitzwerk',
	name: 'Freelance with friends',
	logo: assets.logos.blitzwerk,
	location: 'remote',
	type: 'company',
	description: 'A small freelance collective delivering end-to-end web projects, from scoping to deployment.'
}

export const personalProjects: Organization = {
	id: 'personal-projects',
	name: 'Personal Projects',
	logo: assets.logos.nooobtimex,
	location: 'remote',
	type: 'personal',
	description: 'The umbrella for self-directed builds, experiments, tooling, and open-source work.'
}

export const thammasatUniversity: Organization = {
	id: 'thammasat-university',
	name: 'Thammasat University',
	logo: assets.logos.tuLogo,
	location: 'pathumthani-thailand',
	type: 'university',
	description: "One of Thailand's leading universities — where the engineering foundation was laid."
}

export const entitiesData: Organization[] = [
	ruamsukPlating,
	jasmineTechnologySolution,
	jasTv,
	monomax,
	freelanceWithFriends,
	personalProjects,
	thammasatUniversity
]
