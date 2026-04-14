'use client'

import type { Route } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { GlobalSearch } from '@/components/search/GlobalSearch'
import { ComicPanel } from '@/components/ui/comic-panel'
import { ComicTooltip } from '@/components/ui/comic-tooltip'
import { TooltipProvider } from '@/components/ui/tooltip'
import { MenuItem, assets } from '@/common'

interface NavigationHeaderDesktopProps {
	menuItems: MenuItem[]
}

export default function NavigationHeaderDesktop({ menuItems }: NavigationHeaderDesktopProps) {
	return (
		<div className='mx-auto mt-4 flex w-full max-w-5xl items-center justify-between p-2'>
			{/* Main Header Container - Comic Strip Style */}
			<ComicPanel className='z-50 flex w-full items-center justify-between overflow-hidden bg-black p-0'>
				{/* Logo Section */}
				<div className='group/logo relative flex items-center gap-3 overflow-hidden border-r-4 border-white bg-black px-6 py-3'>
					{/* Web Pattern Background */}
					<div className='comic-web-pattern absolute inset-0 opacity-30 transition-opacity group-hover/logo:opacity-50'></div>

					<Link href='/' className='relative z-10'>
						<div className='relative h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-[0_0_10px_rgba(255,50,50,0.5)] transition-all group-hover/logo:shadow-[0_0_20px_rgba(255,50,50,0.8)]'>
							<Image
								src={assets.personal.logo}
								alt='Portfolio Logo'
								className='object-cover'
								width={40}
								height={40}
								quality={100}
							/>
						</div>
					</Link>
					<Link
						href='/'
						className='group-hover/logo:text-primary relative z-10 stroke-black text-2xl font-black tracking-tight text-white uppercase transition-colors'
						style={{ textShadow: '2px 2px 0px #000' }}>
						NooobtimeX
					</Link>
				</div>

				{/* Navigation Items */}
				<div className='bg-card relative flex h-full flex-1 items-center justify-center overflow-hidden'>
					<TooltipProvider>
						{menuItems.map((item, index) => (
							<ComicTooltip
								key={item.href}
								content={
									<div className='flex items-center gap-2'>
										<Icon icon={item.icon.icon} className='text-primary h-4 w-4' />
										<span>{item.icon.description}</span>
									</div>
								}>
								<Link
									href={item.href as Route}
									className={`group relative flex h-full items-center justify-center px-8 py-4 text-xl font-black tracking-tight text-zinc-400 uppercase transition-all hover:text-white ${index !== menuItems.length - 1 ? 'border-r-4 border-white' : ''} `}>
									<span className='relative z-10 drop-shadow-md transition-transform duration-200 group-hover:scale-110 group-hover:rotate-2'>
										{item.title}
									</span>
									{/* Hover Effect Background */}
									<div className='bg-primary/0 group-hover:bg-primary absolute inset-0 transition-colors duration-300 ease-out' />
									{/* Hover Web Effect */}
									<div className='comic-web-pattern absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20' />
								</Link>
							</ComicTooltip>
						))}
					</TooltipProvider>
				</div>

				{/* Search & Actions */}
				<div className='group-hover/logo:bg-primary flex h-full items-center gap-4 border-l-4 border-white px-4 py-2 transition-colors'>
					<GlobalSearch />
				</div>

				{/* End Cap / Decorative */}
				<div className='h-full w-4 self-stretch bg-[radial-gradient(circle,white_1px,transparent_1.5px)] bg-[length:6px_6px] opacity-20'></div>
			</ComicPanel>
		</div>
	)
}
