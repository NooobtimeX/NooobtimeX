import React from 'react'
import MobileTabBar from '@/components/navigation/MobileTabBar'
import NavBar from '@/components/navigation/NavBar'
import NavFooter from '@/components/navigation/NavFooter'

export default function MainLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		// The bottom padding clears MobileTabBar (h-14 = 3.5rem, plus the iOS home indicator).
		// It goes on this wrapper rather than on <main> so the footer's last row isn't
		// occluded either. Scoping the bar to (main) keeps /cv — which has its own fixed
		// bottom controls and lives outside this group — untouched.
		<div className='relative flex min-h-screen flex-col pb-[calc(3.5rem+env(safe-area-inset-bottom))] md:pb-0'>
			<NavBar />
			<main className='flex-1'>{children}</main>
			<NavFooter />
			<MobileTabBar />
		</div>
	)
}
