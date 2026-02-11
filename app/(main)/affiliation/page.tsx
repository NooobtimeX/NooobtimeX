import React from 'react'
import { Metadata } from 'next'
import { personalData } from '@/common/data/personal'
import AffiliationContent from './AffiliationContent'

export const metadata: Metadata = {
	title: `Affiliations | ${personalData.name}`,
	description: 'My professional career journey, work experiences, and company affiliations.'
}

const AffiliationPage: React.FC = () => {
	return <AffiliationContent />
}

export default AffiliationPage
