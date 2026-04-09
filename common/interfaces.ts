import {
	AbilityCategory,
	AbilityLevel,
	EmploymentType,
	EntityId,
	EntityType,
	ExperienceCategory,
	ExperienceId,
	IssueId,
	Location,
	Position,
	SocialPlatform
} from './enums'

// --- Base Interfaces ---

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
	icon: string // Icon name for @iconify/react
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
}

export interface Affiliation {
	id: EntityId // concise logical ID for the entity
	name: string
	logo?: string
	location: Location
	type: EntityType
	url?: string
}

export interface AffiliationItem {
	id: ExperienceId
	affiliation: Affiliation
	position: Position
	description: string
	type: EmploymentType
	category: ExperienceCategory
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
	linkedAffiliationId?: EntityId // ID of the Entity this issue belongs to
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
