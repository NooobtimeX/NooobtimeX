import React from 'react'
import NavBar from '@/components/navigation/NavBar'
import NavFooter from '@/components/navigation/NavFooter'

export default function MainLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='relative flex min-h-screen flex-col'>
			<NavBar />
			<main className='flex-1'>{children}</main>
			<NavFooter />
		</div>
	)
}
