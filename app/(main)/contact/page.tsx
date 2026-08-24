import React from 'react'
import ContactContent from '@/components/contact/ContactContent'
import { SITE_URL, pageMetadata } from '@/lib/seo'
import { personalData } from '@/common'

export const metadata = pageMetadata({
	path: '/contact',
	title: 'Contact',
	description:
		'Get in touch — email, messaging channels with mainland-China availability marked, and a scannable contact card.'
})

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'ContactPage',
	'url': `${SITE_URL}/contact`,
	'mainEntity': {
		'@type': 'Person',
		'name': personalData.name,
		'url': SITE_URL,
		'email': `mailto:${personalData.contact.email}`,
		'address': {
			'@type': 'PostalAddress',
			'addressLocality': personalData.contact.location,
			'addressCountry': 'TH'
		}
	}
}

const ContactPage: React.FC = () => {
	return (
		<>
			<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<ContactContent />
		</>
	)
}

export default ContactPage
