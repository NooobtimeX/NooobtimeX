import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const vscode: Ability = {
	name: 'VS Code',
	icon: 'logos:visual-studio-code',
	category: AbilityCategory.Tools,
	level: AbilityLevel.Expert
}
