import React from 'react'
import CompaniesContent from '@/components/companies/CompaniesContent'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
	path: '/companies',
	title: 'Companies',
	description: 'The organizations across the career map — employers, collectives, and independent work.'
})

const CompaniesPage: React.FC = () => {
	return <CompaniesContent />
}

export default CompaniesPage
