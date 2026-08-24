import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'
import { entitiesData, experiencesData, projectsData, skillsData } from '@/common'

/**
 * Stable `lastModified` on purpose.
 *
 * This used to be `new Date()`, which re-stamped all 90 URLs on every deploy —
 * including README-asset commits that change nothing user-facing. Google learns to
 * distrust a `lastmod` that is always "now", so bump this date only when the
 * content behind these routes actually changes.
 */
const CONTENT_LAST_MODIFIED = new Date('2026-08-24')

const entry = (
	path: string,
	priority: number,
	changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly'
): MetadataRoute.Sitemap[number] => ({
	url: `${SITE_URL}${path}`,
	lastModified: CONTENT_LAST_MODIFIED,
	changeFrequency,
	priority
})

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	return [
		entry('', 1),
		entry('/projects', 0.8),
		entry('/skills', 0.8),
		entry('/career', 0.8),
		entry('/companies', 0.7),
		entry('/github', 0.6, 'weekly'),
		entry('/cv', 0.6),
		entry('/contact', 0.7),
		// Detail routes are keyed by `id` — the same value each route's
		// `generateStaticParams` emits, so a sitemap URL can never 404.
		...projectsData.map(p => entry(`/projects/${p.id}`, 0.7)),
		...skillsData.map(s => entry(`/skills/${s.id}`, 0.5)),
		...experiencesData.map(e => entry(`/career/${e.id}`, 0.6)),
		...entitiesData.map(o => entry(`/companies/${o.id}`, 0.6))
	]
}
