import { DISPLAY_NAME, SITE_URL } from '@/lib/seo'
import { personalData } from '@/common'

/**
 * Structured-data builders.
 *
 * Kept apart from `lib/seo.ts` (which builds Next `Metadata`) because these emit
 * schema.org graphs rendered into the body via `<JsonLd>`, not `<head>` tags.
 *
 * Names use `DISPLAY_NAME`, never `personalData.name` — the latter is stored ALL CAPS
 * for the HUD headings, and that string is what would surface in a Google knowledge
 * panel or an AI answer if it were used here.
 */

/** Stable node id so separate JSON-LD blocks refer to one Person, not several. */
export const PERSON_ID = `${SITE_URL}/#person`
export const WEBSITE_ID = `${SITE_URL}/#website`

/** Minimal Person reference — use where a full Person node is already declared elsewhere. */
export const personRef = () => ({ '@id': PERSON_ID })

/**
 * The site itself. `WebSite` is what lets an answer engine name the source, and it is
 * the node `ProfilePage`/`BreadcrumbList` hang off.
 */
export const websiteSchema = () => ({
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	'@id': WEBSITE_ID,
	'url': SITE_URL,
	'name': `${DISPLAY_NAME} — Portfolio`,
	'inLanguage': 'en',
	'description': personalData.tagline,
	'publisher': personRef(),
	'about': personRef()
})

interface Crumb {
	name: string
	/** Route-absolute path, no trailing slash. Omit on the final crumb. */
	path?: string
}

/**
 * BreadcrumbList for a detail route.
 *
 * The last crumb intentionally carries no `item`: schema.org treats a trailing
 * self-referential URL as redundant, and Google drops it from the rendered trail.
 */
export const breadcrumbSchema = (trail: Crumb[]) => ({
	'@context': 'https://schema.org',
	'@type': 'BreadcrumbList',
	'itemListElement': trail.map((crumb, i) => ({
		'@type': 'ListItem',
		'position': i + 1,
		'name': crumb.name,
		// Same `/` → '' normalisation as `pageMetadata()`, so a breadcrumb item and that
		// page's canonical are byte-identical rather than differing by a trailing slash.
		...(crumb.path && i < trail.length - 1 && { item: `${SITE_URL}${crumb.path === '/' ? '' : crumb.path}` })
	}))
})
