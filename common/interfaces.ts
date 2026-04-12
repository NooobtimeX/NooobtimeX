/**
 * Core interfaces and types for the NooobtimeX project.
 * All domain models and shared data structures are defined here.
 */
import {
	AbilityCategory,
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

/** Shared icon object using Iconify icons */
export interface IconObject {
	name: string
	icon: string // Icon name for @iconify/react
	description: string
}

/** Navigation menu item structure */
export interface MenuItem {
	title: string
	href: string
	icon: IconObject
}

/** Social media link configuration */
export interface SocialLink {
	platform: SocialPlatform
	url: string
	icon: string // Icon name for @iconify/react
	username?: string
}

// --- Domain Interfaces ---

/** Individual technical ability or skill */
export interface Ability {
	name: string
	category: AbilityCategory
	icon: string // Icon name for @iconify/react
	whiteBg?: boolean
	important?: boolean
}

/** Grouped abilities for display by category */
export interface AbilityGroup {
	category: AbilityCategory
	label: string
	description: string
	icon: string // Icon name for @iconify/react
	abilities: Ability[]
}

/** An organization, university, or entity */
export interface Affiliation {
	id: EntityId // concise logical ID for the entity
	name: string
	logo?: string
	location: Location
	type: EntityType
	url?: string
}

/** A specific role or experience period at an affiliation */
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

/** A project, milestone, or significant achievement */
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

/** Global personal information and settings */
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
