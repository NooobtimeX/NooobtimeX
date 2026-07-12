import React from 'react'
import { Metadata } from 'next'
import CompaniesContent from '@/components/companies/CompaniesContent'
import { personalData } from '@/common'

export const metadata: Metadata = {
	title: `Companies | ${personalData.name}`,
	description: 'The organizations across the career map — employers, collectives, and independent work.'
}

const CompaniesPage: React.FC = () => {
	return <CompaniesContent />
}

export default CompaniesPage
