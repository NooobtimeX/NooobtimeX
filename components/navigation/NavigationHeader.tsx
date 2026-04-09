'use client'

import NavigationHeaderDesktop from '@/components/navigation/NavigationHeaderDesktop'
import NavigationHeaderMobile from '@/components/navigation/NavigationHeaderMobile'
import { MenuItem } from '@/common'

export default function NavigationHeader() {
	const menuItems: MenuItem[] = [
		{
			title: 'ABILITIES',
			href: '/ability',
			icon: {
				name: 'Brain',
				icon: 'material-symbols:psychology',
				description: 'View my Abilities'
			}
		},
		{
			title: 'ISSUES',
			href: '/issue',
			icon: {
				name: 'Laptop Code',
				icon: 'material-symbols:laptop-chromebook',
				description: 'Explore my Issues Archive'
			}
		},
		{
			title: 'AFFILIATIONS',
			href: '/affiliation',
			icon: {
				name: 'Business',
				icon: 'material-symbols:domain',
				description: 'Companies & Career'
			}
		}
	]

	return (
		<nav className='fixed right-0 bottom-0 left-0 z-50 w-full md:sticky md:top-0'>
			{/* Desktop Header */}
			<div className='hidden md:block'>
				<NavigationHeaderDesktop menuItems={menuItems} />
			</div>
			{/* Mobile Header */}
			<div className='block md:hidden'>
				<NavigationHeaderMobile menuItems={menuItems} />
			</div>
		</nav>
	)
}
