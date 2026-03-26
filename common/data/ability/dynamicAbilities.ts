import { issuesData } from '@/common/data/issue'
import { AbilityCategory } from '@/common/enum'
import type { Ability, AbilityGroup } from '@/common/interface'
import { orderedAbilities } from './abilities'
import { categoryMetadata } from './categoryMetadata'

export const getDynamicAbilities = (): AbilityGroup[] => {
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
		// Get abilities and sort by manual order first, then frequency
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

		// Calculate total frequency for this category to determine group sorting
		const totalCategoryFrequency = abilitiesInCategory.reduce((sum, a) => sum + (abilityFrequency.get(a.name) || 0), 0)

		// Calculate min order for this category to determine group sorting
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

	// Filter out categories with no abilities and sort by minOrder (ascending)
	return grouped.filter(group => group.abilities.length > 0).sort((a, b) => a.minOrder - b.minOrder)
}
