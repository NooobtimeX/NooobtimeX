import { AffiliationId } from '@/common/enum'
import type { Issue } from '@/common/interface'
import { nextjs, postgresql, prisma, python, tailwindcss, vercel } from '../abilities'

export const floodPrediction: Issue = {
	id: 'flood-prediction',
	title: 'Flood Prediction Display Graph',
	description:
		'A flood prediction visualization platform that displays interactive graphs and forecasts. Leveraging Python for data processing and machine learning predictions, with a Next.js frontend for presenting real-time flood risk analytics.',
	images: {
		thumbnail: '/issue/flood-prediction.png',
		banner: '/issue/flood-prediction.png',
		photos: ['/issue/flood-prediction.png']
	},
	abilities: [nextjs, prisma, vercel, postgresql, tailwindcss, python],
	links: {},
	startDate: '2025-01-01',
	linkedAffiliationId: AffiliationId.FreelanceBlitzwerk
}
