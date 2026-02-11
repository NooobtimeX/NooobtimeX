import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const websocket: Ability = {
	name: 'WebSocket',
	icon: 'material-symbols:cable',
	category: AbilityCategory.Backend,
	level: AbilityLevel.Intermediate
}
