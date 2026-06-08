'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '@iconify/react'
import Container from '@/components/cyber/Container'
import GlobalSearch from '@/components/search/GlobalSearch'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const LINKS = [
	{ label: 'Home', href: '/', code: '00' },
	{ label: 'Projects', href: '/projects', code: '01' },
	{ label: 'Skills', href: '/skills', code: '02' },
	{ label: 'Experience', href: '/experience', code: '03' },
	{ label: 'CV', href: '/cv', code: '04' }
] as const

const isActive = (pathname: string, href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

const NavBar: React.FC = () => {
	const pathname = usePathname()
	const [searchOpen, setSearchOpen] = React.useState(false)
	const [menuOpen, setMenuOpen] = React.useState(false)

	React.useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
				e.preventDefault()
				setSearchOpen(o => !o)
			}
		}
		document.addEventListener('keydown', onKey)
		return () => document.removeEventListener('keydown', onKey)
	}, [])

	return (
		<>
			<header className='border-cyber-cyan/25 bg-background/80 sticky top-0 z-50 border-b backdrop-blur-md'>
				<Container className='flex h-14 items-center justify-between gap-4'>
					{/* Handle */}
					<Link href='/' className='group flex items-center gap-2'>
						<span className='bg-cyber-yellow inline-block size-2.5 animate-pulse' />
						<span className='font-display text-lg font-bold tracking-widest uppercase'>
							Nooobtime<span className='text-cyber-yellow'>X</span>
						</span>
					</Link>

					{/* Desktop links */}
					<nav className='hidden items-center gap-1 md:flex'>
						{LINKS.map(link => {
							const active = isActive(pathname, link.href)
							return (
								<Link
									key={link.href}
									href={link.href}
									className={cn(
										'group relative px-3 py-2 font-mono text-xs tracking-widest uppercase transition-colors',
										active ? 'text-cyber-yellow' : 'text-muted-foreground hover:text-foreground'
									)}>
									<span className='text-cyber-cyan/50 mr-1'>{link.code}</span>
									{link.label}
									{active && <span className='bg-cyber-yellow absolute right-3 -bottom-px left-3 h-px' />}
								</Link>
							)
						})}
					</nav>

					{/* Right controls */}
					<div className='flex items-center gap-2'>
						<button
							onClick={() => setSearchOpen(true)}
							className='border-border text-muted-foreground hover:border-cyber-cyan/50 hover:text-cyber-cyan hidden items-center gap-2 border px-2.5 py-1.5 font-mono text-xs transition-colors sm:flex'>
							<Icon icon='mdi:magnify' className='size-4' />
							<span className='tracking-wider uppercase'>Search</span>
							<kbd className='border-border bg-muted ml-1 border px-1 text-[0.6rem]'>⌘K</kbd>
						</button>
						<button
							onClick={() => setSearchOpen(true)}
							aria-label='Search'
							className='text-muted-foreground hover:text-cyber-cyan p-1.5 sm:hidden'>
							<Icon icon='mdi:magnify' className='size-5' />
						</button>

						{/* Mobile menu */}
						<Sheet open={menuOpen} onOpenChange={setMenuOpen}>
							<SheetTrigger aria-label='Menu' className='text-foreground hover:text-cyber-yellow p-1.5 md:hidden'>
								<Icon icon='mdi:menu' className='size-6' />
							</SheetTrigger>
							<SheetContent side='right' className='border-cyber-cyan/30 bg-background w-72 border-l'>
								<SheetTitle className='sr-only'>Navigation</SheetTitle>
								<nav className='mt-10 flex flex-col gap-1 p-4'>
									{LINKS.map(link => {
										const active = isActive(pathname, link.href)
										return (
											<Link
												key={link.href}
												href={link.href}
												onClick={() => setMenuOpen(false)}
												className={cn(
													'flex items-center gap-3 border-l-2 px-4 py-3 font-mono text-sm tracking-widest uppercase transition-colors',
													active ?
														'border-cyber-yellow text-cyber-yellow bg-cyber-yellow/5'
													:	'text-muted-foreground hover:text-foreground border-transparent'
												)}>
												<span className='text-cyber-cyan/50'>{link.code}</span>
												{link.label}
											</Link>
										)
									})}
								</nav>
							</SheetContent>
						</Sheet>
					</div>
				</Container>
			</header>

			<GlobalSearch open={searchOpen} onOpenChange={setSearchOpen} />
		</>
	)
}

export default NavBar
