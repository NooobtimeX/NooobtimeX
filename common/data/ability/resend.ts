import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const resend: Ability = {
	name: 'Resend',
	icon: 'simple-icons:resend',
	category: AbilityCategory.Infrastructure,
	level: AbilityLevel.Expert
}
