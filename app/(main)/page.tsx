import React from 'react'
import GithubStats from '@/components/github/GithubStats'
import CvTeaser from '@/components/home/CvTeaser'
import HomeContent from '@/components/home/HomeContent'
import JsonLd from '@/components/seo/JsonLd'
import { PERSON_ID, WEBSITE_ID, personRef, websiteSchema } from '@/lib/schema'
import { DISPLAY_NAME, SITE_URL, pageMetadata } from '@/lib/seo'
import { formatPosition } from '@/lib/utils'
import { currentEntryId, educationData, latestRole, personalData, skillsData, workExperienceData } from '@/common'

export const metadata = pageMetadata({
	path: '/',
	title: 'Portfolio',
	absoluteTitle: `${DISPLAY_NAME} — Full-Stack Software Engineer & CTO`,
	description: personalData.tagline
})

const alma = educationData[0]?.organization

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	'@id': PERSON_ID,
	// DISPLAY_NAME, not personalData.name — the latter is ALL CAPS for the HUD headings,
	// and this string is what surfaces in a knowledge panel or an AI answer.
	'name': DISPLAY_NAME,
	'alternateName': 'NooobtimeX',
	'url': SITE_URL,
	'image': `${SITE_URL}${personalData.avatar}`,
	'jobTitle': formatPosition(latestRole.position),
	'description': personalData.tagline,
	'email': `mailto:${personalData.contact.email}`,
	'birthDate': personalData.birthDate,
	'address': {
		'@type': 'PostalAddress',
		'addressLocality': personalData.contact.location,
		'addressCountry': 'TH'
	},
	'sameAs': personalData.socialLinks.filter(s => s.platform !== 'email').map(s => s.url),
	'knowsLanguage': personalData.languages.map(l => ({
		'@type': 'Language',
		'name': l.name,
		'alternateName': l.code
	})),
	'knowsAbout': skillsData.map(s => s.name),
	...(alma && {
		alumniOf: {
			'@type': 'CollegeOrUniversity',
			'name': alma.name,
			...(alma.url && { sameAs: alma.url })
		}
	}),
	'worksFor': {
		'@type': 'Organization',
		'name': latestRole.organization.name,
		...(latestRole.organization.url && { sameAs: latestRole.organization.url })
	}
}

const profilePageLd = {
	'@context': 'https://schema.org',
	'@type': 'ProfilePage',
	'url': SITE_URL,
	'name': `${DISPLAY_NAME} — Portfolio`,
	'isPartOf': { '@id': WEBSITE_ID },
	'mainEntity': personRef(),
	'inLanguage': 'en'
}

const Home: React.FC = () => {
	return (
		<>
			<JsonLd data={jsonLd} />
			<JsonLd data={websiteSchema()} />
			<JsonLd data={profilePageLd} />
			<HomeContent nowId={currentEntryId(workExperienceData, new Date())} />
			<GithubStats variant='home' />
			<CvTeaser />
		</>
	)
}

export default Home
