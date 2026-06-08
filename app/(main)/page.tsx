import React from 'react'
import { Metadata } from 'next'
import GithubStats from '@/components/github/GithubStats'
import CvTeaser from '@/components/home/CvTeaser'
import HomeContent from '@/components/home/HomeContent'
import { personalData } from '@/common'

export const metadata: Metadata = {
	title: `${personalData.name} - Portfolio`,
	description: personalData.tagline
}

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	'name': personalData.name,
	'url': 'https://nooobtimex.me',
	'image': personalData.avatar,
	'sameAs': [
		'https://github.com/NooobtimeX'
		// Add other social links if available in personalData
	],
	'jobTitle': personalData.title,
	'description': personalData.tagline
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
