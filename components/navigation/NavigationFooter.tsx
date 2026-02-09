import Link from 'next/link'
import { Icon } from '@iconify/react'

const NavigationFooter = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='mt-none relative w-full overflow-hidden border-t-4 border-white bg-black py-12 text-white md:py-20'>
			{/* Background Effects */}
			<div className='comic-halftone pointer-events-none absolute inset-0 opacity-30'></div>

			<div className='relative z-10 container mx-auto px-4'>
				<div className='flex flex-col items-center justify-center space-y-8'>
					{/* The End Graphic */}
					<div className='group relative'>
						<h2 className='bg-primary -rotate-2 transform cursor-default border-4 border-black p-4 font-[Bangers] text-5xl text-white shadow-[6px_6px_0px_0px_white] transition-transform duration-300 select-none hover:scale-105 hover:rotate-0 md:text-8xl md:shadow-[8px_8px_0px_0px_white]'>
							THE END?
						</h2>
						<div className='absolute -top-4 -right-2 rotate-12 animate-pulse border-2 border-black bg-white px-2 py-1 font-[Bangers] text-sm text-black md:-top-6 md:-right-8 md:px-3 md:text-xl'>
							TO BE CONTINUED...
						</div>
					</div>

					{/* Quick Access Links for Dedicated Pages */}
					<div className='flex max-w-xs flex-wrap justify-center gap-x-4 gap-y-2 font-[Bangers] text-lg tracking-wider uppercase md:max-w-none md:text-xl'>
						<Link
							href='/'
							className='hover:text-primary decoration-wavy underline-offset-4 transition-colors hover:underline'>
							Home
						</Link>
						<span className='hidden text-white/20 md:inline'>|</span>
						<Link
							href='/ability'
							className='hover:text-primary decoration-wavy underline-offset-4 transition-colors hover:underline'>
							Abilities
						</Link>
						<span className='hidden text-white/20 md:inline'>|</span>
						<Link
							href='/issue'
							className='hover:text-primary decoration-wavy underline-offset-4 transition-colors hover:underline'>
							Issues
						</Link>
						<span className='hidden text-white/20 md:inline'>|</span>
						<Link
							href='/affiliation'
							className='hover:text-primary decoration-wavy underline-offset-4 transition-colors hover:underline'>
							Affiliation
						</Link>
					</div>

					{/* Social Links Comic Strip */}
					<div className='flex rotate-1 transform items-center gap-6 rounded-none border-2 border-white/20 bg-white/5 p-4 backdrop-blur-sm transition-transform hover:rotate-0 hover:bg-white/10'>
						<Link
							href='https://github.com/NooobtimeX'
							target='_blank'
							className='hover:text-primary transform text-white transition-colors duration-200 hover:scale-125'
							aria-label='GitHub'>
							<Icon icon='mdi:github' className='h-8 w-8' />
						</Link>
						<Link
							href='https://www.linkedin.com/in/wongsaphat-puangsorn'
							target='_blank'
							className='hover:text-primary transform text-white transition-colors duration-200 hover:scale-125'
							aria-label='LinkedIn'>
							<Icon icon='mdi:linkedin' className='h-8 w-8' />
						</Link>
						<Link
							href='mailto:nooobtimex@gmail.com'
							className='hover:text-primary transform text-white transition-colors duration-200 hover:scale-125'
							aria-label='Email'>
							<Icon icon='mdi:email' className='h-8 w-8' />
						</Link>
					</div>

					<div className='h-0.5 w-full max-w-md bg-white/20'></div>

					{/* Copyright Info */}
					<div className='px-4 text-center font-[Inter] text-sm text-gray-400'>
						<p>© {currentYear} Wongsaphat Puangsorn. All rights reserved.</p>
						<p className='mt-2 text-xs opacity-60'>Inspired by Marvel Comics & Silk (Cindy Moon)</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default NavigationFooter
