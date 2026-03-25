import { AbilityCategory } from '@/common/enum'

export const categoryMetadata: Record<AbilityCategory, { icon: string; description: string }> = {
	[AbilityCategory.Frontend]: {
		icon: 'material-symbols:laptop-chromebook',
		description: 'Modern web development and user interface abilities'
	},
	[AbilityCategory.Backend]: {
		icon: 'material-symbols:database',
		description: 'Server-side development and data management'
	},
	[AbilityCategory.Database]: {
		icon: 'material-symbols:storage',
		description: 'Database design and administration'
	},
	[AbilityCategory.DevOps]: {
		icon: 'material-symbols:cloud',
		description: 'Deployment, cloud services, and development workflow'
	},
	[AbilityCategory.Tools]: {
		icon: 'material-symbols:build',
		description: 'Development tools and project management'
	},
	[AbilityCategory.Marketing]: {
		icon: 'material-symbols:trending-up',
		description: 'Digital marketing and analytics'
	},
	[AbilityCategory.AI]: {
		icon: 'material-symbols:robot-2',
		description: 'AI tools and technologies'
	}
}
