import { EntityId, EntityType, Location } from '../enums'
import type { Organization } from '../interfaces'
import { assets } from './assets'

export const ruamsukPlating: Organization = {
	id: EntityId.RuamsukPlating,
	name: 'RUAMSUK PLATING LIMITED PARTNERSHIP',
	logo: assets.logos.rsTrophy,
	location: Location.PathumthaniThailand,
	type: EntityType.Company
}

export const jasmineTechnologySolution: Organization = {
	id: EntityId.JasmineTechnologySolution,
	name: 'Jasmine Technology Solution',
	logo: assets.logos.jasmineTech,
	location: Location.NonthaburiThailand,
	type: EntityType.Company
}

export const freelanceWithFriends: Organization = {
	id: EntityId.FreelanceBlitzwerk,
	name: 'Freelance with friends',
	logo: assets.logos.blitzwerk,
	location: Location.Remote,
	type: EntityType.Company
}

export const personalProjects: Organization = {
	id: EntityId.PersonalProjects,
	name: 'Personal Projects',
	logo: assets.logos.nooobtimex,
	location: Location.Remote,
	type: EntityType.Personal
}

export const thammasatUniversity: Organization = {
	id: EntityId.ThammasatUniversity,
	name: 'Thammasat University',
	logo: assets.logos.tuLogo,
	location: Location.PathumthaniThailand,
	type: EntityType.University
}

export const entitiesMap = {
	ruamsukPlating,
	jasmineTechnologySolution,
	freelanceWithFriends,
	personalProjects,
	thammasatUniversity
}

export const entitiesData: Organization[] = [
	ruamsukPlating,
	jasmineTechnologySolution,
	freelanceWithFriends,
	personalProjects,
	thammasatUniversity
]
