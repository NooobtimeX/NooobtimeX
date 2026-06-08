import { MetadataRoute } from 'next'
import { slugify } from '@/lib/utils'
import { experiencesData, issuesData } from '@/common'
import { abilitiesData } from '@/common'

const domain = 'https://nooobtimex.me'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const now = new Date()

	const staticRoutes: MetadataRoute.Sitemap = [
		{ url: `${domain}`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
		{ url: `${domain}/projects`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
		{ url: `${domain}/skills`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
		{ url: `${domain}/experience`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
		{ url: `${domain}/cv`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 }
	]

	const projectRoutes: MetadataRoute.Sitemap = issuesData.map(item => ({
		url: `${domain}/projects/${item.id}`,
		lastModified: now,
		changeFrequency: 'monthly',
		priority: 0.7
	}))

	const skillRoutes: MetadataRoute.Sitemap = abilitiesData.map(item => ({
		url: `${domain}/skills/${slugify(item.name)}`,
		lastModified: now,
		changeFrequency: 'monthly',
		priority: 0.5
	}))

	const experienceRoutes: MetadataRoute.Sitemap = experiencesData.map(item => ({
		url: `${domain}/experience/${item.id}`,
		lastModified: now,
		changeFrequency: 'monthly',
		priority: 0.6
	}))

	return [...staticRoutes, ...projectRoutes, ...skillRoutes, ...experienceRoutes]
}
