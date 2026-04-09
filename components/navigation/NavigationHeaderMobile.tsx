'use client'

import { RxHamburgerMenu } from 'react-icons/rx'
import type { Route } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { GlobalSearch } from '@/components/search/GlobalSearch'
import { Button } from '@/components/ui/button'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from '@/components/ui/drawer'
import { MenuItem, assets } from '@/common'

interface NavigationHeaderMobileProps {
	menuItems: MenuItem[]
}

export default function NavigationHeaderMobile({ menuItems }: NavigationHeaderMobileProps) {
	return (
		<div className='relative w-full'>
			{/* Mobile Search Trigger (Floating) */}
			<div className='fixed right-4 bottom-22 z-50'>
				<GlobalSearch />
			</div>

			{/* Mobile Brand Button (Left) */}
			<div className='fixed bottom-4 left-4 z-50 flex justify-center'>
				<Link href={'/' as Route}>
					<div className='silk-item-mini flex cursor-pointer'>
						<Image
							src={assets.personal.favicon}
							alt='NooobtimeX'
							className='rounded-full border border-white'
							width={24}
							height={24}
							quality={100}
						/>
						<span className='ml-2 text-xl font-black tracking-tight text-white uppercase'>NooobtimeX</span>
					</div>
				</Link>
			</div>

			{/* Mobile Menu Trigger (Right) */}
			<Drawer>
				<DrawerTrigger asChild>
					<div className='fixed right-4 bottom-4 z-50'>
						<Button className='silk-item-mini-primary h-auto px-4 py-2 text-xl'>
							MENU <RxHamburgerMenu className='ml-2 h-5 w-5' />
						</Button>
					</div>
				</DrawerTrigger>
				<DrawerContent className='border-t-4 border-white bg-black'>
					<DrawerHeader>
						<DrawerTitle className='mt-4 text-center text-4xl font-black tracking-tight text-white uppercase'>
							Select Section
						</DrawerTitle>
						<div className='my-2 h-2 w-full bg-[radial-gradient(circle,white_1px,transparent_1.5px)] bg-[length:8px_8px] opacity-20'></div>
					</DrawerHeader>

					<div className='flex flex-col space-y-3 p-4'>
						{menuItems.map(item => (
							<DrawerClose asChild key={item.href}>
								<Link
									href={item.href as Route}
									className='group hover:border-primary hover:bg-primary/10 flex items-center justify-between border-2 border-white/20 p-4 transition-colors'
									title={item.icon.description}>
									<div className='flex items-center gap-4'>
										{item.icon && (
											<Icon
												icon={item.icon.icon}
												className='text-primary h-6 w-6 transition-transform group-hover:scale-110'
											/>
										)}
										<span className='text-2xl font-black tracking-tight text-white uppercase'>{item.title}</span>
									</div>
									<div className='text-primary font-black opacity-0 transition-opacity group-hover:opacity-100'>
										GO!
									</div>
								</Link>
							</DrawerClose>
						))}
					</div>
					<DrawerFooter className='pt-2 pb-8'>
						<DrawerClose asChild>
							<Button className='w-full rounded-none bg-white text-xl font-black text-black uppercase hover:bg-zinc-200'>
								Close Panel
							</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	)
}
