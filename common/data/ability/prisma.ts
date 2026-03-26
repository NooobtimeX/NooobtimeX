import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const prisma: Ability = {
	name: 'Prisma',
	icon: 'logos:prisma',
	category: AbilityCategory.Backend,
	level: AbilityLevel.Advanced,
	whiteBg: true
}
