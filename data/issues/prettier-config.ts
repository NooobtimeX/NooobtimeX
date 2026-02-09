import type { Issue } from '@/common/interface'
import { nextjs, tailwindcss, vercel } from '../abilities'

export const prettierConfig: Issue = {
	id: 'prettier-config',
	title: 'Prettier Config Generator',
	description: 'Generate your .prettierrc file effortlessly with this interactive Prettier configuration tool.',
	images: {
		thumbnail: '/issue/prettier.png',
		banner: '/issue/prettier.png',
		photos: ['/issue/prettier.png']
	},
	abilities: [nextjs, vercel, tailwindcss],
	links: {
		live: 'https://prettier-config-generator.com/'
	},
	startDate: '2024-01-15'
}
