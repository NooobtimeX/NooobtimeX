'use client'

import type { Route } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { personalData } from '@/common/data/personal'

const contactLinks = [
	{
		label: 'Email',
		value: personalData.contact.email,
		href: `mailto:${personalData.contact.email}`,
		icon: 'material-symbols:mail'
	},
	{
		label: 'GitHub',
		value: 'NooobtimeX',
		href: 'https://github.com/NooobtimeX',
		icon: 'simple-icons:github'
	},
	{
		label: 'Portfolio',
		value: 'nooobtimex.me',
		href: 'https://nooobtimex.me',
		icon: 'material-symbols:language'
	},
	{
		label: 'Location',
		value: personalData.contact.location,
		href: null,
		icon: 'material-symbols:location-on'
	}
]

export default function ContactStrip() {
	return (
		<section className='relative border-t-4 border-white bg-black py-20'>
			<div className='comic-burst pointer-events-none absolute inset-0 opacity-10' />

			<div className='relative z-10 container mx-auto max-w-7xl px-4'>
				{/* Header */}
				<div className='mb-12 flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left'>
					<div>
						<p className='text-primary mb-1 text-[10px] font-black tracking-[0.4em] uppercase'>OPEN TO OPPORTUNITIES</p>
						<h2 className='text-3xl font-black text-white uppercase md:text-5xl'>GET IN TOUCH</h2>
						<p className='mt-2 max-w-md text-sm text-zinc-500'>{personalData.contact.availability}</p>
					</div>

					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						viewport={{ once: true }}
						className='shrink-0'>
						<Link href={`mailto:${personalData.contact.email}`} className='silk-button-tactical'>
							<Icon icon='material-symbols:mail' className='h-5 w-5' />
							SEND EMAIL
						</Link>
					</motion.div>
				</div>

				{/* Contact links grid */}
				<div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
					{contactLinks.map((link, i) => {
						const inner = (
							<div className='flex items-center gap-3 border-2 border-zinc-800 bg-zinc-950 p-4 transition-all hover:border-white hover:bg-zinc-900'>
								<Icon icon={link.icon} className='text-primary h-5 w-5 shrink-0' />
								<div>
									<p className='text-[9px] font-black tracking-wider text-zinc-600 uppercase'>{link.label}</p>
									<p className='truncate text-xs font-black text-white'>{link.value}</p>
								</div>
							</div>
						)

						return (
							<motion.div
								key={link.label}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.08 }}>
								{link.href ?
									<Link
										href={link.href as Route}
										target={link.href.startsWith('http') ? '_blank' : undefined}
										rel='noreferrer'>
										{inner}
									</Link>
								:	inner}
							</motion.div>
						)
					})}
				</div>

				{/* Bottom: CV CTA */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4 }}
					className='mt-8 flex flex-col items-center gap-3 border-t border-zinc-900 pt-8 text-center'>
					<p className='text-xs tracking-widest text-zinc-600 uppercase'>Prefer a document?</p>
					<Link
						href='/cv'
						className='comic-button inline-flex items-center gap-2 border-2 border-zinc-700 bg-transparent px-6 py-2.5 text-xs font-black tracking-widest text-zinc-400 uppercase transition-all hover:border-white hover:text-white'>
						<Icon icon='material-symbols:article' className='h-4 w-4' />
						VIEW PRINTABLE CV (A4)
					</Link>
				</motion.div>
			</div>
		</section>
	)
}
