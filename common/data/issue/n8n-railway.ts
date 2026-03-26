import { docker, n8n, nodejs, railway, resend } from '@/common/data/ability'
import { AffiliationId } from '@/common/enum'
import type { Issue } from '@/common/interface'

export const n8nRailway: Issue = {
	id: 'n8n-railway',
	title: 'n8n + Railway',
	description:
		'Architected and deployed a self-hosted n8n automation engine on Railway utilizing Docker containers. Developed custom automated workflows to streamline internal business processes, lead management, and cross-platform data synchronization, resulting in a significant reduction in manual operational tasks.',
	images: {
		thumbnail: '/issue/n8n-railway.png',
		banner: '/issue/n8n-railway.png',
		photos: ['/issue/n8n-railway.png']
	},
	abilities: [n8n, railway, docker, nodejs, resend],
	links: {},
	startDate: '2025-06-15',
	linkedAffiliationId: AffiliationId.RuamsukPlatingSoftwareEngineerFullTime
}
