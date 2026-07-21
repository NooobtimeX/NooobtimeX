/**
 * Shared string-literal types. Small fixed sets that used to be enums — using plain
 * unions keeps autocomplete + typo safety without the `Enum.Member` ceremony.
 */

export type SkillCategory = 'frontend' | 'backend' | 'infrastructure' | 'growth-management'

export type ExperienceCategory = 'work' | 'education'

export type EntityType = 'company' | 'university'

export type EmploymentType = 'freelance' | 'part-time' | 'full-time'

export type Location = 'remote' | 'nonthaburi-thailand' | 'pathumthani-thailand'

export type Position = 'chief-technology-officer' | 'developer' | 'student'

export type SocialPlatform = 'github' | 'linkedin' | 'instagram' | 'youtube' | 'website' | 'email'

/** Organization ids — referenced by `Organization.id`. */
export type EntityId =
	'jasmine-technology-solution' | 'jas-tv' | 'monomax' | 'ruamsuk-plating' | 'freelance' | 'thammasat-university'

/** Experience/role ids — referenced by projects (`linkedExperienceIds`). */
export type ExperienceId =
	| 'jasmine-tech'
	| 'ruamsuk-software-engineer-part-time'
	| 'ruamsuk-software-engineer-full-time'
	| 'ruamsuk-cto'
	| 'freelance'
	| 'thammasat-bs-cs'
