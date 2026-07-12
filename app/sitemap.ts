import { MetadataRoute } from 'next'
import { slugify } from '@/lib/utils'
import { experiencesData, projectsData } from '@/common'
import { skillsData } from '@/common'

const domain = 'https://nooobtimex.me'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const now = new Date()

	const staticRoutes: MetadataRoute.Sitemap = [
		{ url: `${domain}`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
		{ url: `${domain}/projects`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
		{ url: `${domain}/skills`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
		{ url: `${domain}/career`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
		{ url: `${domain}/github`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
		{ url: `${domain}/cv`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 }
	]

	const projectRoutes: MetadataRoute.Sitemap = projectsData.map(item => ({
		url: `${domain}/projects/${item.id}`,
		lastModified: now,
		changeFrequency: 'monthly',
		priority: 0.7
	}))

	const skillRoutes: MetadataRoute.Sitemap = skillsData.map(item => ({
		url: `${domain}/skills/${slugify(item.name)}`,
		lastModified: now,
		changeFrequency: 'monthly',
		priority: 0.5
	}))

	const experienceRoutes: MetadataRoute.Sitemap = experiencesData.map(item => ({
		url: `${domain}/career/${item.id}`,
		lastModified: now,
		changeFrequency: 'monthly',
		priority: 0.6
	}))

	return [...staticRoutes, ...projectRoutes, ...skillRoutes, ...experienceRoutes]
}
