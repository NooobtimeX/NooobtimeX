import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const sse: Ability = {
	name: 'SSE',
	icon: 'material-symbols:stream',
	category: AbilityCategory.Backend,
	level: AbilityLevel.Intermediate
}
