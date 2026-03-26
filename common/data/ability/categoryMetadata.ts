import { AbilityCategory } from '@/common/enum'

export const categoryMetadata: Record<
	AbilityCategory,
	{ icon: string; description: string; color: string; shadow: string }
> = {
	[AbilityCategory.Frontend]: {
		icon: 'material-symbols:laptop-chromebook',
		description: 'Modern web development and user interface abilities',
		color: '#3b82f6', // blue-500
		shadow: 'rgba(59, 130, 246, 0.5)'
	},
	[AbilityCategory.Backend]: {
		icon: 'material-symbols:database',
		description: 'Server-side development and database management',
		color: '#10b981', // emerald-500
		shadow: 'rgba(16, 185, 129, 0.5)'
	},
	[AbilityCategory.Infrastructure]: {
		icon: 'material-symbols:cloud',
		description: 'Infrastructure, deployment, and cloud solutions',
		color: '#8b5cf6', // violet-500
		shadow: 'rgba(139, 92, 246, 0.5)'
	},
	[AbilityCategory.GrowthManagement]: {
		icon: 'material-symbols:trending-up',
		description: 'Digital growth, marketing, and project management',
		color: '#f59e0b', // amber-500
		shadow: 'rgba(245, 158, 11, 0.5)'
	}
}
