import { AffiliationId } from '@/common/enum'
import type { Issue } from '@/common/interface'
import { python, selenium } from '../abilities'

export const webAppAutomation: Issue = {
	id: 'web-app-automation',
	title: 'Web App Automation',
	description:
		'An automated web application testing and interaction project using Selenium and Python. Designed to streamline repetitive browser tasks, automate workflows, and ensure web application quality through scripted test scenarios.',
	images: {
		thumbnail: '/issue/web-app-automation.png',
		banner: '/issue/web-app-automation.png',
		photos: ['/issue/web-app-automation.png']
	},
	abilities: [selenium, python],
	links: {},
	startDate: '2025-01-01',
	linkedAffiliationId: AffiliationId.FreelanceBlitzwerk
}
