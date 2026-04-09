import { categoryMetadata, orderedAbilities } from './data/abilities'
import { AbilityCategory } from './enums'
import type { Ability, AbilityGroup, Issue } from './interfaces'

/**
 * Group and sort abilities dynamically based on their usage in issues.
 */
export const getDynamicAbilities = (issuesData: Issue[]): AbilityGroup[] => {
	const abilityOrderMap = new Map<string, number>()
	orderedAbilities.forEach((ability, index) => {
		abilityOrderMap.set(ability.name, index)
	})

	const allAbilities: Ability[] = []
	const abilityFrequency = new Map<string, number>()

	// Collect from issues
	issuesData.forEach(issue => {
		issue.abilities.forEach(ability => {
			allAbilities.push(ability)
			abilityFrequency.set(ability.name, (abilityFrequency.get(ability.name) || 0) + 1)
		})
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
		const abilitiesInCategory = uniqueAbilities
			.filter(a => a.category === category)
			.sort((a, b) => {
				const orderA = abilityOrderMap.get(a.name) ?? 999
				const orderB = abilityOrderMap.get(b.name) ?? 999
				if (orderA !== orderB) return orderA - orderB

				const freqA = abilityFrequency.get(a.name) || 0
				const freqB = abilityFrequency.get(b.name) || 0
				return freqB - freqA
			})

		const metadata = categoryMetadata[category]
		const totalCategoryFrequency = abilitiesInCategory.reduce((sum, a) => sum + (abilityFrequency.get(a.name) || 0), 0)
		const minOrder = Math.min(...abilitiesInCategory.map(a => abilityOrderMap.get(a.name) ?? 999))

		return {
			category,
			description: metadata.description,
			icon: metadata.icon,
			abilities: abilitiesInCategory,
			totalFrequency: totalCategoryFrequency,
			minOrder
		}
	})

	return (
		grouped
			.filter(group => group.abilities.length > 0)
			.sort((a, b) => a.minOrder - b.minOrder)
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			.map(({ totalFrequency, minOrder, ...group }) => group)
	)
}

/**
 * Standard desc date sorting for items with a startDate property.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sortByDateDesc = (a: any, b: any) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
