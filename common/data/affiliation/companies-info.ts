import { AffiliationEntityType, Location } from '@/common/enum'
import type { Affiliation } from '@/common/interface'

export const ruamsukPlating: Affiliation = {
	id: 'ruamsuk-plating',
	name: 'RUAMSUK PLATING LIMITED PARTNERSHIP',
	logo: '/logo/RSTROPHY.png',
	location: Location.PathumthaniThailand,
	type: AffiliationEntityType.Company
}

export const jasmineTechnologySolution: Affiliation = {
	id: 'jasmine-technology-solution',
	name: 'Jasmine Technology Solution',
	logo: '/logo/JTS.png',
	location: Location.NonthaburiThailand,
	type: AffiliationEntityType.Company
}

export const freelanceWithFriends: Affiliation = {
	id: 'freelance-blitzwerk',
	name: 'Freelance with friends',
	logo: '/logo/blitzwerk.png',
	location: Location.Remote,
	type: AffiliationEntityType.Company
}

export const privateLife: Affiliation = {
	id: 'private-life',
	name: 'Private Life',
	location: Location.BangkokThailand,
	type: AffiliationEntityType.Personal
}
