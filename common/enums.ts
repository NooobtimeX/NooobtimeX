/**
 * Shared string-literal types. Small fixed sets that used to be enums — using plain
 * unions keeps autocomplete + typo safety without the `Enum.Member` ceremony.
 */

export type SkillCategory = 'frontend' | 'backend' | 'infrastructure' | 'growth-management'

export type ExperienceCategory = 'work' | 'education' | 'personal'

export type EntityType = 'company' | 'university' | 'personal'

export type EmploymentType = 'volunteer' | 'freelance' | 'part-time' | 'full-time' | 'contract'

export type Location = 'remote' | 'bangkok-thailand' | 'nonthaburi-thailand' | 'pathumthani-thailand'

export type Position = 'chief-technology-officer' | 'developer'

export type SocialPlatform =
	'github' | 'linkedin' | 'twitter' | 'instagram' | 'discord' | 'youtube' | 'website' | 'email'

/** Organization ids — referenced by `Organization.id`. */
export type EntityId =
	| 'jasmine-technology-solution'
	| 'jas-tv'
	| 'monomax'
	| 'ruamsuk-plating'
	| 'freelance-blitzwerk'
	| 'personal-projects'
	| 'thammasat-university'

/** Experience/role ids — referenced by projects (`linkedExperienceIds`). */
export type ExperienceId =
	| 'jasmine-tech'
	| 'ruamsuk-software-engineer-part-time'
	| 'ruamsuk-software-engineer-full-time'
	| 'ruamsuk-cto'
	| 'freelance-blitzwerk-role'
	| 'personal-projects-role'
