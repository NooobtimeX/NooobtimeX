import React from 'react'
import { Metadata } from 'next'
import ContactContent from '@/components/contact/ContactContent'
import { personalData } from '@/common'

export const metadata: Metadata = {
	title: `Contact | ${personalData.name}`,
	description:
		'Get in touch — email, messaging channels with mainland-China availability marked, and a scannable contact card.'
}

const SITE_URL = 'https://nooobtimex.me'

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
