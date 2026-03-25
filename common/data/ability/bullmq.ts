import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const bullmq: Ability = {
	name: 'BullMQ',
	icon: 'simple-icons:redis', // BullMQ is built on Redis, using Redis icon as a proxy if no dedicated one
	category: AbilityCategory.Backend,
	level: AbilityLevel.Intermediate
}
