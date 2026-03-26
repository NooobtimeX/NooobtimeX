import { docker, github, minio, nodejs, railway } from '@/common/data/ability'
import { AffiliationId } from '@/common/enum'
import type { Issue } from '@/common/interface'

export const tencentRailwayMigration: Issue = {
	id: 'tencent-railway-migration',
	title: 'Migration from Tencent VM (Prod and UAT split) to Railway',
	description:
		'Architected and executed the migration of 15+ microservices from Tencent Cloud VMs to Railway. Optimized deployment workflows by reusing a single Dockerfile with environment-specific configurations for Production and UAT splits. Managed complex environment setups for each service, integrating GitHub for CI/CD and MinIO for object storage.',
	images: {
		banner: '/issue/tencent-railway-migration/banner.png',
		photos: ['/issue/tencent-railway-migration/banner.png']
	},
	abilities: [docker, railway, nodejs, github, minio],
	links: {},
	startDate: '2025-11-01',
	linkedAffiliationId: AffiliationId.JasmineTechnologySolution
}
