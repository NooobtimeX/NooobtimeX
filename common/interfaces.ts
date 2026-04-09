import { IconType } from 'react-icons'
import {
	AbilityCategory,
	AbilityLevel,
	AffiliationCategory,
	AffiliationEntityType,
	AffiliationId,
	EmploymentType,
	IssueId,
	Location,
	Position,
	SocialPlatform
} from './enums'

// --- Base Interfaces ---

export interface IconInfo {
	name: string
	icon: IconType // Direct icon component from react-icons
	description?: string
}

export interface IconObject {
	name: string
	icon: string // Icon name for @iconify/react
	description: string
}

export interface MenuItem {
	title: string
	href: string
	icon: IconObject
}

export interface SocialLink {
	platform: SocialPlatform
	url: string
	icon: IconType
	username?: string
}

// --- Domain Interfaces ---

export interface Ability {
	name: string
	category: AbilityCategory
	level: AbilityLevel
	icon: string // Icon name for @iconify/react
	whiteBg?: boolean
	important?: boolean
}

export interface AbilityGroup {
	category: string
	description: string
	icon: string // Icon name for @iconify/react
	abilities: Ability[]
	totalFrequency?: number
}

export interface Affiliation {
	id: AffiliationId // concise logical ID, e.g. "blitzwerk", "jasmine", "university"
	name: string
	logo?: string
	location: Location
	type: AffiliationEntityType
	url?: string
}

export interface AffiliationItem {
	id: AffiliationId
	affiliation: Affiliation
	position: Position
	description: string
	type: EmploymentType
	category: AffiliationCategory
	startDate: string
	endDate?: string
}

export interface Issue {
	id: IssueId
	title: string
	description: string
	images: {
		banner: string // Used for issue detail page header and card previews
		photos: string[] // Gallery of issue screenshots/photos
	}
	abilities: Ability[]
	links: {
		live?: string
	}
	startDate: string // YYYY-MM-DD
	endDate?: string // YYYY-MM-DD or undefined if ongoing/single release
	linkedAffiliationId?: AffiliationId // ID of the Affiliation this issue belongs to
}

export interface PersonalData {
	name: string
	title: string
	tagline: string
	avatar: string
	about: {
		bio: string
		highlights: string[]
	}
	contact: {
		email: string
		location: string
		availability: string
	}
	birthDate: string
	socialLinks: SocialLink[]
}

export interface PortfolioData {
	personal: PersonalData
	issues: Issue[]
	abilities: Ability[]
	affiliations: AffiliationItem[]
}
