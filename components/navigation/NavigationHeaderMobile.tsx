'use client'

import { RxHamburgerMenu } from 'react-icons/rx'
import type { Route } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import MenuItem from '@/common/interface/menuItem'
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

interface NavigationHeaderMobileProps {
	menuItems: MenuItem[]
}

export default function NavigationHeaderMobile({ menuItems }: NavigationHeaderMobileProps) {
	return (
		<div className='relative w-full'>
			{/* Mobile Brand Button (Left) */}
			<div className='fixed bottom-4 left-4 z-50 flex justify-center'>
				<Link href={'/'}>
					<div className='flex cursor-pointer items-center gap-2 border-2 border-white bg-black px-4 py-2 shadow-[4px_4px_0px_0px_white] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_white]'>
						<Image
							src='/favicon.ico'
							alt='NooobtimeX'
							className='rounded-full border border-white'
							width={24}
							height={24}
							quality={100}
						/>
						<span className='font-[Bangers] text-xl tracking-wide text-white uppercase'>NooobtimeX</span>
					</div>
				</Link>
			</div>

			{/* Mobile Menu Trigger (Right) */}
			<Drawer>
				<DrawerTrigger asChild>
					<div className='fixed right-4 bottom-4 z-50'>
						<Button className='bg-primary hover:bg-primary/90 h-auto rounded-none border-2 border-white px-4 py-2 font-[Bangers] text-xl tracking-wider text-white shadow-[4px_4px_0px_0px_white] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_white]'>
							MENU <RxHamburgerMenu className='ml-2 h-5 w-5' />
						</Button>
					</div>
				</DrawerTrigger>
				<DrawerContent className='border-t-4 border-white bg-black'>
					<DrawerHeader>
						<DrawerTitle className='mt-4 text-center font-[Bangers] text-4xl tracking-wide text-white uppercase'>
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
										<span className='font-[Bangers] text-2xl tracking-wide text-white uppercase'>{item.title}</span>
									</div>
									<div className='text-primary font-[Bangers] opacity-0 transition-opacity group-hover:opacity-100'>
										GO!
									</div>
								</Link>
							</DrawerClose>
						))}
					</div>
					<DrawerFooter className='pt-2 pb-8'>
						<DrawerClose asChild>
							<Button className='w-full rounded-none bg-white font-[Bangers] text-xl text-black uppercase hover:bg-zinc-200'>
								Close Panel
							</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	)
}
