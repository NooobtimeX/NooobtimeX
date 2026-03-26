import { nextjs, tailwindcss, vercel } from '@/common/data/ability'
import { AffiliationId } from '@/common/enum'
import type { Issue } from '@/common/interface'

export const prettierConfig: Issue = {
	id: 'prettier-config',
	title: 'Prettier Config Generator',
	description: 'Generate your .prettierrc file effortlessly with this interactive Prettier configuration tool.',
	images: {
		banner: '/issue/prettier-config/banner.png',
		photos: ['/issue/prettier-config/banner.png']
	},
	abilities: [nextjs, vercel, tailwindcss],
	links: {
		live: 'https://prettier-config-generator.com/'
	},
	startDate: '2024-01-15',
	linkedAffiliationId: AffiliationId.FreelanceBlitzwerk
}
