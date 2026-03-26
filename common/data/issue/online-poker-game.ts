import { nextjs, postgresql, prisma, render, sse, tailwindcss } from '@/common/data/ability'
import { AffiliationId } from '@/common/enum'
import type { Issue } from '@/common/interface'

export const onlinePokerGame: Issue = {
	id: 'online-poker-game',
	title: 'Online Poker Game',
	description:
		'A real-time multiplayer online poker game featuring Server-Sent Events for live updates. Built with Next.js and PostgreSQL for a seamless, interactive card gaming experience.',
	images: {
		thumbnail: '/issue/poker/Picture1.png',
		banner: '/issue/poker/Picture2.png',
		photos: ['/issue/poker/Picture1.png', '/issue/poker/Picture2.png', '/issue/poker/Picture3.png']
	},
	abilities: [nextjs, prisma, render, tailwindcss, sse, postgresql],
	links: {},
	startDate: '2025-03-01',
	linkedAffiliationId: AffiliationId.FreelanceBlitzwerk
}
