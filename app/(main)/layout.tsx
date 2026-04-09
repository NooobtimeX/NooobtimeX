'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import NavigationFooter from '@/components/navigation/NavigationFooter'
import NavigationHeader from '@/components/navigation/NavigationHeader'

export default function MainLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const pathname = usePathname()
	const isHome = pathname === '/'

	return (
		<main className='relative flex min-h-screen flex-col'>
			{!isHome && <NavigationHeader />}
			<div className='flex-1'>{children}</div>
			{!isHome && <NavigationFooter />}
		</main>
	)
}
