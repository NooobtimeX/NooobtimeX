import { AffiliationEntityType, AffiliationId, Location } from '@/common/enum'

export interface Affiliation {
	id: AffiliationId // concise logical ID, e.g. "blitzwerk", "jasmine", "university"
	name: string
	logo?: string
	location: Location
	type: AffiliationEntityType
	url?: string
}
