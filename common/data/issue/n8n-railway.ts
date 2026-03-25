import { docker, n8n, nodejs, railway } from '@/common/data/ability'
import { AffiliationId } from '@/common/enum'
import type { Issue } from '@/common/interface'

export const n8nRailway: Issue = {
	id: 'n8n-railway',
	title: 'Automation Infrastructure (n8n + Railway)',
	description:
		'Architected and deployed a self-hosted n8n automation engine on Railway utilizing Docker containers. Developed custom automated workflows to streamline internal business processes, lead management, and cross-platform data synchronization, resulting in a significant reduction in manual operational tasks.',
	images: {
		thumbnail: '/issue/rs-trophy.webp',
		banner: '/issue/rs-trophy.webp',
		photos: ['/issue/rs-trophy.webp']
	},
	abilities: [n8n, railway, docker, nodejs],
	links: {},
	startDate: '2025-06-15',
	linkedAffiliationId: AffiliationId.RuamsukPlatingSoftwareEngineerFullTime
}
