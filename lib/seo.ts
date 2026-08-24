import type { Metadata } from 'next'
import { personalData } from '@/common'

export const SITE_URL = 'https://nooobtimex.me'

/**
 * Title-case display name. `personalData.name` is stored ALL CAPS because the cyber HUD
 * headings render it that way — but an all-caps `<title>` reads as shouting in a SERP and
 * Google frequently rewrites it, so titles use the structured given/family names instead.
 */
export const DISPLAY_NAME =
	[personalData.contact.givenName, personalData.contact.familyName].filter(Boolean).join(' ') || personalData.name

interface PageMetaInput {
	/** Route-absolute path, no trailing slash. `/` for home. */
	path: string
	/** Bare title — the root layout's `%s | Wongsaphat Puangsorn` template appends the name. */
	title: string
	description: string
	/** Set when the title must not receive the template suffix (the home page). */
	absoluteTitle?: string
	/**
	 * Route-absolute path to a 1200×630 card, for routes the file convention cannot
	 * reach. `app/(main)/projects/[...id]/` is a catch-all, and Next forbids nesting an
	 * `opengraph-image.tsx` beneath one — so that route generates its card at
	 * `/card/og/projects/<id>` and names it here. Everywhere else, omit this and let
	 * the nearest `opengraph-image.tsx` resolve.
	 */
	ogImage?: string
}

/**
 * Single source of truth for per-page metadata.
 *
 * Exists because Next *inherits* `alternates` and `openGraph` from the nearest
 * ancestor that declares them: the root layout's `canonical: '/'` silently made
 * all 90 routes declare themselves duplicates of the home page. Every route must
 * therefore declare its own canonical — this helper makes that the cheap path.
 *
 * `openGraph.images` is deliberately omitted: the file-convention
 * `app/opengraph-image.tsx` is resolved separately and still applies.
 */
export function pageMetadata({ path, title, description, absoluteTitle, ogImage }: PageMetaInput): Metadata {
	const url = `${SITE_URL}${path === '/' ? '' : path}`
	const socialTitle = absoluteTitle ?? `${title} | ${DISPLAY_NAME}`

	return {
		title: absoluteTitle ? { absolute: absoluteTitle } : title,
		description,
		alternates: { canonical: path },
		openGraph: {
			type: 'website',
			locale: 'en_US',
			siteName: `${DISPLAY_NAME} Portfolio`,
			url,
			title: socialTitle,
			description,
			...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630, alt: socialTitle }] })
		},
		// No `creator` here on purpose: `personalData.socialLinks` lists no X/Twitter
		// account, so the handle in the root layout is an unverified guess. Asserting a
		// handle you may not own attributes the card to whoever does.
		twitter: {
			card: 'summary_large_image',
			title: socialTitle,
			description,
			...(ogImage && { images: [ogImage] })
		}
	}
}
