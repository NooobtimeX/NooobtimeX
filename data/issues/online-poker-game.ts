import { AffiliationId } from '@/common/enum'
import type { Issue } from '@/common/interface'
import { nextjs, postgresql, prisma, render, sse, tailwindcss, websocket } from '../abilities'

export const onlinePokerGame: Issue = {
	id: 'online-poker-game',
	title: 'Online Poker Game',
	description:
		'A real-time multiplayer online poker game featuring WebSocket-based gameplay and Server-Sent Events for live updates. Built with Next.js and PostgreSQL for a seamless, interactive card gaming experience.',
	images: {
		thumbnail: '/issue/online-poker-game.png',
		banner: '/issue/online-poker-game.png',
		photos: ['/issue/online-poker-game.png']
	},
	abilities: [nextjs, prisma, render, tailwindcss, websocket, sse, postgresql],
	links: {},
	startDate: '2025-01-01',
	linkedAffiliationId: AffiliationId.FreelanceBlitzwerk
}
