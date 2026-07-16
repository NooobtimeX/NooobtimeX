import React from 'react'
import { Metadata } from 'next'
import GithubStats from '@/components/github/GithubStats'
import CvTeaser from '@/components/home/CvTeaser'
import HomeContent from '@/components/home/HomeContent'
import { formatPosition } from '@/lib/utils'
import { educationData, latestRole, personalData, skillsData } from '@/common'

export const metadata: Metadata = {
	title: `${personalData.name} - Portfolio`,
	description: personalData.tagline
}

const SITE_URL = 'https://nooobtimex.me'

const alma = educationData[0]?.organization

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	'name': personalData.name,
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

const Home: React.FC = () => {
	return (
		<>
			<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<HomeContent />
			<GithubStats variant='home' />
			<CvTeaser />
		</>
	)
}

export default Home
