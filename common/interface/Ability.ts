import { AbilityCategory, AbilityLevel } from '@/common/enum'

// Ability interface
export interface Ability {
	name: string
	category: AbilityCategory
	level: AbilityLevel
	icon: string // Icon name for @iconify/react
	whiteBg?: boolean
}
