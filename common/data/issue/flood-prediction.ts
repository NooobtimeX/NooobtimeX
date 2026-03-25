import { nextjs, postgresql, prisma, python, tailwindcss, vercel } from '@/common/data/ability'
import { AffiliationId } from '@/common/enum'
import type { Issue } from '@/common/interface'

export const floodPrediction: Issue = {
	id: 'flood-prediction',
	title: 'Flood Data Dashboard',
	description:
		'Built a comprehensive, high-performance forecasting dashboard using Next.js, PostgreSQL, Prisma, and TailwindCSS to visualize complex data sets.',
	images: {
		thumbnail: '/issue/flood-prediction.png',
		banner: '/issue/flood-prediction.png',
		photos: ['/issue/flood-prediction.png']
	},
	abilities: [nextjs, prisma, vercel, postgresql, tailwindcss, python],
	links: {},
	startDate: '2025-06-01',
	linkedAffiliationId: AffiliationId.FreelanceBlitzwerk
}
