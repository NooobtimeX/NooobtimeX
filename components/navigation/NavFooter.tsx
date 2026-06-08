import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { personalData } from '@/common'

const LINKS = [
	{ label: 'Projects', href: '/projects' },
	{ label: 'Skills', href: '/skills' },
	{ label: 'Experience', href: '/experience' },
	{ label: 'CV', href: '/cv' }
] as const

const NavFooter: React.FC = () => {
	return (
		<footer className='border-cyber-cyan/20 bg-background relative z-10 mt-20 border-t'>
			<div className='mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6'>
				<div>
					<p className='font-display text-xl font-bold tracking-widest uppercase'>
						Nooobtime<span className='text-cyber-yellow'>X</span>
					</p>
					<p className='text-muted-foreground mt-1 font-mono text-xs tracking-wider'>
						{personalData.name} // Product Lead
					</p>
				</div>

				<nav className='flex flex-wrap gap-x-6 gap-y-2'>
					{LINKS.map(l => (
						<Link
							key={l.href}
							href={l.href}
							className='text-muted-foreground hover:text-cyber-cyan font-mono text-xs tracking-widest uppercase transition-colors'>
							{l.label}
						</Link>
					))}
				</nav>

				<div className='flex items-center gap-3'>
					{personalData.socialLinks.map(s => (
						<a
							key={s.platform}
							href={s.url}
							target='_blank'
							rel='noopener noreferrer'
							aria-label={s.platform}
							className='border-border text-muted-foreground hover:border-cyber-cyan/50 hover:text-cyber-cyan flex size-9 items-center justify-center border transition-colors'>
							<Icon icon={s.icon} className='size-4' />
						</a>
					))}
				</div>
			</div>

			<div className='border-border/50 text-muted-foreground border-t px-4 py-4 text-center font-mono text-[0.65rem] tracking-widest uppercase md:px-6'>
				© {new Date().getFullYear()} {personalData.name} — All systems operational
			</div>
		</footer>
	)
}

export default NavFooter
