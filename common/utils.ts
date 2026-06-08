import { SkillCategory } from './enums'
import type { Project, Skill, SkillGroup } from './interfaces'

/**
 * Group and sort skills dynamically based on their usage in issues.
 * This is a pure function that requires category metadata and base ability order.
 */
export const getDynamicSkills = (
	projectsData: Project[],
	categoryMetadata: Record<string, { label?: string; icon: string; description: string }>,
	orderedSkills: Skill[]
): SkillGroup[] => {
	const abilityOrderMap = new Map<string, number>()
	orderedSkills.forEach((ability, index) => {
		abilityOrderMap.set(ability.name, index)
	})

	const allAbilities: Skill[] = []
	const abilityFrequency = new Map<string, number>()

	// Collect from issues
	projectsData.forEach(issue => {
		issue.skills.forEach(ability => {
			allAbilities.push(ability)
			abilityFrequency.set(ability.name, (abilityFrequency.get(ability.name) || 0) + 1)
		})
	})

	// Filter unique skills by name
	const uniqueAbilitiesMap = new Map<string, Skill>()
	allAbilities.forEach(ability => {
		if (!uniqueAbilitiesMap.has(ability.name)) {
			uniqueAbilitiesMap.set(ability.name, ability)
		}
	})

	const uniqueAbilities = Array.from(uniqueAbilitiesMap.values())

	// Group by category using the keys from categoryMetadata (stable source of truth)
	const grouped = Object.keys(categoryMetadata).map(category => {
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
		const minOrder =
			abilitiesInCategory.length > 0 ?
				Math.min(...abilitiesInCategory.map(a => abilityOrderMap.get(a.name) ?? 999))
			:	999

		return {
			category: category as SkillCategory,
			label: metadata.label || category,
			description: metadata.description,
			icon: metadata.icon,
			skills: abilitiesInCategory,
			totalFrequency: totalCategoryFrequency,
			minOrder
		}
	})

	return (
		grouped
			.filter(group => group.skills.length > 0)
			.sort((a, b) => a.minOrder - b.minOrder)
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			.map(({ totalFrequency, minOrder, ...group }) => group)
	)
}

interface HasStartDate {
	startDate: string
}

/**
 * Standard desc date sorting for items with a startDate property.
 */
export const sortByDateDesc = (a: HasStartDate, b: HasStartDate) =>
	new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
