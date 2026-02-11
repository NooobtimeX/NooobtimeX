import { MetadataRoute } from 'next'
import { affiliationData } from '@/common/data/affiliation'
import { issuesData } from '@/common/data/issue'

const domain = 'https://nooobtimex.me'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const staticRoutes: MetadataRoute.Sitemap = [
		{
			url: `${domain}`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1
		},
		{
			url: `${domain}/ability`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		},
		{
			url: `${domain}/affiliation`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		},
		{
			url: `${domain}/issue`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		}
	]

	const affiliationRoutes: MetadataRoute.Sitemap = affiliationData.map(item => ({
		url: `${domain}/affiliation/${item.id}`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.6
	}))

	const issueRoutes: MetadataRoute.Sitemap = issuesData.map(item => ({
		url: `${domain}/issue/${item.id}`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.7
	}))

	return [...staticRoutes, ...affiliationRoutes, ...issueRoutes]
}
