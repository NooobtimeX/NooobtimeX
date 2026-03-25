import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const woocommerce: Ability = {
	name: 'WooCommerce',
	icon: 'simple-icons:woocommerce',
	category: AbilityCategory.Tools,
	level: AbilityLevel.Expert
}
