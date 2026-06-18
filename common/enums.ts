/**
 * Shared string-literal types. Small fixed sets that used to be enums — using plain
 * unions keeps autocomplete + typo safety without the `Enum.Member` ceremony.
 */

export type SkillCategory = 'frontend' | 'backend' | 'infrastructure' | 'growth-management'

export type ExperienceCategory = 'work' | 'education' | 'personal'

export type EntityType = 'company' | 'university' | 'personal'

export type EmploymentType = 'volunteer' | 'freelance' | 'part-time' | 'full-time' | 'contract'

export type Location = 'remote' | 'bangkok-thailand' | 'nonthaburi-thailand' | 'pathumthani-thailand'

export type Position = 'product-lead' | 'developer'

export type SocialPlatform =
	| 'github'
	| 'linkedin'
	| 'twitter'
	| 'instagram'
	| 'discord'
	| 'youtube'
	| 'website'
	| 'email'

/** Organization ids — referenced by projects (`linkedOrganizationId`). */
export type EntityId =
	| 'jasmine-technology-solution'
	| 'ruamsuk-plating'
	| 'freelance-blitzwerk'
	| 'personal-projects'
	| 'thammasat-university'
