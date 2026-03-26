import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const googleAds: Ability = {
	name: 'Google Ads',
	icon: 'logos:google-ads',
	category: AbilityCategory.GrowthManagement,
	level: AbilityLevel.Intermediate
}
