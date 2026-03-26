import { AbilityCategory } from '@/common/enum'

export const categoryMetadata: Record<AbilityCategory, { icon: string; description: string }> = {
	[AbilityCategory.Frontend]: {
		icon: 'material-symbols:laptop-chromebook',
		description: 'Modern web development and user interface abilities'
	},
	[AbilityCategory.Backend]: {
		icon: 'material-symbols:database',
		description: 'Server-side development and database management'
	},
	[AbilityCategory.Infrastructure]: {
		icon: 'material-symbols:cloud',
		description: 'Infrastructure, deployment, and cloud solutions'
	},
	[AbilityCategory.GrowthManagement]: {
		icon: 'material-symbols:trending-up',
		description: 'Digital growth, marketing, and project management'
	}
}
