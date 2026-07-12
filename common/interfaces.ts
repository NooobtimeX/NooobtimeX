/**
 * Core interfaces for the NooobtimeX project. All domain models live here.
 */
import {
	EmploymentType,
	EntityId,
	EntityType,
	ExperienceCategory,
	ExperienceId,
	Location,
	Position,
	SkillCategory,
	SocialPlatform
} from './enums'

// --- Base ---

/** Social media link configuration */
export interface SocialLink {
	platform: SocialPlatform
	url: string
	icon: string // Icon name for @iconify/react
	username?: string
}

// --- Domain ---

/** A technical skill */
export interface Skill {
	id: string // url-safe id, e.g. 'next-js'
	name: string
	category: SkillCategory
	icon: string // Icon name for @iconify/react
	whiteBg?: boolean
}

/** An organization, university, or entity */
export interface Organization {
	id: EntityId
	name: string
	logo?: string
	location: Location
	type: EntityType
	url?: string
}

/** A role/experience period at an organization */
export interface ExperienceItem {
	id: ExperienceId // url-safe id
	organization: Organization
	position: Position
	description: string
	type: EmploymentType
	category: ExperienceCategory
	startDate: string
	endDate?: string
}

/** A single milestone on a project's evolution timeline */
export interface Milestone {
	date: string // YYYY-MM-DD
	title: string
	description?: string
	icon?: string // Iconify name, e.g. 'simple-icons:cloudflare'
}

/** A project / build */
export interface Project {
	id: string // url-safe id
	title: string
	description: string
	images: {
		banner: string
		photos: string[]
	}
	skills: Skill[]
	links: {
		live?: string
	}
	startDate: string // YYYY-MM-DD
	endDate?: string // YYYY-MM-DD, or undefined if ongoing
	/** Role(s) this project was delivered under — primary role first. */
	linkedExperienceIds?: ExperienceId[]
	timeline?: Milestone[]
}

/** Global personal information */
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
