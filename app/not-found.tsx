import Link from 'next/link'
import { Icon } from '@iconify/react'
import GlitchText from '@/components/cyber/GlitchText'

export default function NotFound() {
	return (
		<div className='bg-background relative flex min-h-screen flex-col items-center justify-center px-4 text-center'>
			<div className='cyber-grid pointer-events-none absolute inset-0 opacity-25' />
			<GlitchText text='404' className='neon-text-magenta font-display text-8xl font-bold tracking-tight md:text-9xl' />
			<p className='text-cyber-cyan mt-2 font-mono text-sm tracking-[0.4em] uppercase'>// Signal Lost</p>
			<p className='text-muted-foreground mt-4 max-w-md'>
				This sector of the grid doesn&apos;t exist. The route may have been moved or never deployed.
			</p>
			<Link
				href='/'
				className='bg-cyber-yellow clip-notch-sm hover:bg-cyber-yellow/80 mt-8 inline-flex items-center gap-2 px-5 py-3 font-mono text-xs font-semibold tracking-widest text-black uppercase transition-colors'>
				<Icon icon='mdi:home-variant-outline' className='size-4' /> Return Home
			</Link>
		</div>
	)
}
