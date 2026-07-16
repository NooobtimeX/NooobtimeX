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

/** A spoken/written language and proficiency */
export interface Language {
	name: string // Display name, e.g. 'English'
	level: string // Proficiency, e.g. 'Native' or 'Professional working'
	code: string // BCP-47 tag for JSON-LD knowsLanguage, e.g. 'en'
	icon?: string // Optional icon name for @iconify/react
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
	/** Short blurb shown on the company card. */
	description?: string
	// --- Detailed dossier (company detail page) — all optional, render when present ---
	/** Longer multi-sentence write-up. */
	about?: string
	industry?: string
	/** Founding / established year, e.g. '1995'. */
	founded?: string
	/** Specific HQ, e.g. 'Pak Kret, Nonthaburi, Thailand'. */
	headquarters?: string
	/** Scale descriptor, e.g. 'SET-listed public company'. */
	size?: string
	/** Parent company / group, e.g. 'Jasmine International PCL (SET: JAS)'. */
	parentGroup?: string
	/** Stock listing, e.g. 'SET: JTS'. */
	stockTicker?: string
	/** Notable products / brands / services. */
	products?: string[]
	/** Short notable facts. */
	highlights?: string[]
}

/** A role/experience period at an organization */
export interface ExperienceItem {
	id: ExperienceId // url-safe id
	organization: Organization
	position: Position
	/** Education-only headline, e.g. 'B.S. Computer Science' — rendered instead of `position`. */
	credential?: string
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
	/** Short resume-style blurb (1–2 lines) for the CV / presentation; falls back to `description`. */
	resumeSummary?: string
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
	/** Client/partner the work was delivered for — overrides the role-derived "Client". */
	clientOrganizationId?: EntityId
	/** Org the work was seconded to / delivered via — a credit, not an employer. */
	viaOrganizationId?: EntityId
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
	languages: Language[]
	socialLinks: SocialLink[]
}
