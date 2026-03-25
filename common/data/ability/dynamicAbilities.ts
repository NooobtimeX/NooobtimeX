import { affiliationData } from '@/common/data/affiliation'
import { issuesData } from '@/common/data/issue'
import { AbilityCategory } from '@/common/enum'
import type { Ability, AbilityGroup } from '@/common/interface'
import { categoryMetadata } from './categoryMetadata'

export const getDynamicAbilities = (): AbilityGroup[] => {
	const allAbilities: Ability[] = []

	// Collect from issues
	issuesData.forEach(issue => {
		allAbilities.push(...issue.abilities)
	})

	// Collect from affiliations
	affiliationData.forEach(aff => {
		allAbilities.push(...aff.abilities)
	})

	// Filter unique abilities by name
	const uniqueAbilitiesMap = new Map<string, Ability>()
	allAbilities.forEach(ability => {
		if (!uniqueAbilitiesMap.has(ability.name)) {
			uniqueAbilitiesMap.set(ability.name, ability)
		}
	})

	const uniqueAbilities = Array.from(uniqueAbilitiesMap.values())

	// Group by category
	const grouped = Object.values(AbilityCategory).map(category => {
		const abilitiesInCategory = uniqueAbilities.filter(a => a.category === category)
		const metadata = categoryMetadata[category]

		return {
			category,
			description: metadata.description,
			icon: metadata.icon,
			abilities: abilitiesInCategory
		}
	})

	// Filter out categories with no abilities
	return grouped.filter(group => group.abilities.length > 0)
}
