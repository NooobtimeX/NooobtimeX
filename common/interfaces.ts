/**
 * Core interfaces and types for the NooobtimeX project.
 * All domain models and shared data structures are defined here.
 */
import {
	EmploymentType,
	EntityId,
	EntityType,
	ExperienceCategory,
	ExperienceId,
	Location,
	Position,
	ProjectId,
	SkillCategory,
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
export interface Skill {
	name: string
	category: SkillCategory
	icon: string // Icon name for @iconify/react
	whiteBg?: boolean
	important?: boolean
}

/** Grouped skills for display by category */
export interface SkillGroup {
	category: SkillCategory
	label: string
	description: string
	icon: string // Icon name for @iconify/react
	skills: Skill[]
}

/** An organization, university, or entity */
export interface Organization {
	id: EntityId // concise logical ID for the entity
	name: string
	logo?: string
	location: Location
	type: EntityType
	url?: string
}

/** A specific role or experience period at an organization */
export interface ExperienceItem {
	id: ExperienceId
	organization: Organization
	position: Position
	description: string
	type: EmploymentType
	category: ExperienceCategory
	startDate: string
	endDate?: string
}

/** A project, milestone, or significant achievement */
export interface Project {
	id: ProjectId
	title: string
	description: string
	images: {
		banner: string // Used for issue detail page header and card previews
		photos: string[] // Gallery of issue screenshots/photos
	}
	skills: Skill[]
	links: {
		live?: string
	}
	startDate: string // YYYY-MM-DD
	endDate?: string // YYYY-MM-DD or undefined if ongoing/single release
	linkedOrganizationId?: EntityId // ID of the Entity this issue belongs to
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
