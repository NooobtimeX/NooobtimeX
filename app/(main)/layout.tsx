import React from 'react'
import NavigationFooter from '@/components/navigation/NavigationFooter'
import NavigationHeader from '@/components/navigation/NavigationHeader'

export default function MainLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main className='relative flex min-h-screen flex-col'>
			<NavigationHeader />
			<div className='flex-1'>{children}</div>
			<NavigationFooter />
		</main>
	)
}
