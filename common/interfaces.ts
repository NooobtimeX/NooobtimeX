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

/**
 * A direct messaging channel — business-card style, deliberately separate from
 * `SocialLink`. Social links are profile URLs and get fed to JSON-LD `sameAs`, the footer
 * grid and the README generator; a LINE/WeChat handle is none of those things.
 */
export interface ContactChannel {
	id: string // 'phone' | 'whatsapp' | 'line' | 'wechat' — free-form, no union to widen
	label: string // Display name, e.g. 'WeChat'
	icon: string // Icon name for @iconify/react
	/** The handle/number shown on the card and copied to the clipboard. */
	value: string
	/** Deep link, when the vendor publishes one. Absent for channels that have none. */
	url?: string
	/** Payload to render as a QR — for channels reachable only by scanning. */
	qr?: string
	/** Reachable from inside mainland China? Drives the availability badge. */
	inChina: boolean
	/** ISO date the `qr` payload was last confirmed working — rendered as a staleness cue. */
	verifiedOn?: string
	note?: string
}

/** A spoken/written language and proficiency */
export interface Language {
	name: string // Display name, e.g. 'English'
	level: string // Proficiency, e.g. 'Native' or 'Professional working'
	code: string // BCP-47 tag for JSON-LD knowsLanguage, e.g. 'en'
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
	/** Skills introduced at this milestone — resolved from ids at build time. */
	addedSkills?: Skill[]
	/** Skills retired at this milestone — resolved from ids at build time. */
	removedSkills?: Skill[]
}

/** A project / build */
export interface Project {
	id: string // url-safe id
	title: string
	description: string
	/** Short resume-style blurb (1–2 lines) for the CV / presentation; falls back to `description`. */
	resumeSummary?: string
	images: {
		cover: string
		photos: string[]
	}
	/** Full historical roster — every skill ever used (starting stack + all timeline deltas + tooling). */
	skills: Skill[]
	/** Currently-active stack — derived by folding the timeline's add/remove events. */
	activeSkills: Skill[]
	/** Skills used then dropped (roster − active) — shown but marked retired. */
	retiredSkills: Skill[]
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
	/** Freelance-facing headline for the homepage hero — a hireable role, deliberately
	 *  decoupled from `title`/the career timeline's latest position (e.g. a C-suite
	 *  title there reads as "not for hire" to a freelance client browsing the hero). */
	heroRole: string
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
		/** E.164 phone for the vCard `TEL`, e.g. '+66855877024'. Scoped to the vCard/QR. */
		phone?: string
		/** Free-text locality for the vCard `ADR`, e.g. 'Nonthaburi'. */
		locality?: string
		/** Free-text country for the vCard `ADR`, e.g. 'Thailand'. */
		country?: string
		/** ASCII romanised given name — vCard `N` must not depend on the display name. */
		givenName?: string
		/** ASCII romanised family name. */
		familyName?: string
	}
	birthDate: string
	languages: Language[]
	socialLinks: SocialLink[]
	/** Direct messaging channels rendered on /contact. Optional — omit an entry to hide it. */
	contactChannels?: ContactChannel[]
}
