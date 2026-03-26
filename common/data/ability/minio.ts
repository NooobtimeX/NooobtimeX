import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const minio: Ability = {
	name: 'MinIO',
	category: AbilityCategory.Infrastructure,
	level: AbilityLevel.Intermediate,
	icon: 'simple-icons:minio'
}
