import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const nextjs: Ability = {
	name: 'Next.js',
	icon: 'logos:nextjs-icon',
	category: AbilityCategory.Frontend,
	level: AbilityLevel.Expert,
	important: true
}
