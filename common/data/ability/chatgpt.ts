import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const chatgpt: Ability = {
	name: 'ChatGPT',
	icon: 'logos:openai-icon',
	category: AbilityCategory.AI,
	level: AbilityLevel.Advanced,
	whiteBg: true
}
