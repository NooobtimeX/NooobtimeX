'use client'

import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { QRCodeSVG } from 'qrcode.react'
import { formatExperienceDuration } from '@/lib/utils'
import {
	SkillCategory,
	categoryMetadata,
	educationData,
	personalData,
	projectsData,
	skillsData,
	workExperienceData
} from '@/common'

const humanize = (value: string) =>
	value
		.split('-')
		.map(w => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ')

const CATEGORY_ORDER: SkillCategory[] = ['frontend', 'backend', 'infrastructure', 'growth-management']

export default function CVPage() {
	const handlePrint = () => window.print()

	return (
		<div className='cv-root bg-background text-foreground min-h-screen py-10 print:bg-white print:py-0'>
			<style jsx global>{`
				@media print {
					@page {
						margin: 14mm;
						size: A4 portrait;
					}
					html,
					body {
						background: #fff !important;
						-webkit-print-color-adjust: exact !important;
						print-color-adjust: exact !important;
					}
					.cv-section {
						break-inside: avoid;
					}
				}
			`}</style>

			{/* Controls */}
			<div className='mx-auto mb-8 flex max-w-[820px] flex-wrap items-center justify-between gap-3 px-4 print:hidden'>
				<Link
					href='/'
					className='text-muted-foreground hover:text-cyber-cyan inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase transition-colors'>
					<Icon icon='mdi:arrow-left' className='size-4' /> Home
				</Link>
				<div className='flex gap-3'>
					<button
						onClick={handlePrint}
						className='bg-cyber-yellow clip-notch-sm hover:bg-cyber-yellow/80 inline-flex items-center gap-2 px-4 py-2.5 font-mono text-xs font-semibold tracking-widest text-black uppercase transition-colors'>
						<Icon icon='mdi:printer' className='size-4' /> Print / PDF
					</button>
					<Link
						href='/cv/presentation'
						className='border-cyber-cyan/60 text-cyber-cyan clip-notch-sm hover:bg-cyber-cyan/10 inline-flex items-center gap-2 border px-4 py-2.5 font-mono text-xs font-semibold tracking-widest uppercase transition-colors'>
						<Icon icon='mdi:presentation' className='size-4' /> Present
					</Link>
				</div>
			</div>

			{/* Document */}
			<article className='mx-auto max-w-[820px] space-y-6 px-4 print:max-w-none print:space-y-5 print:px-0'>
				{/* Header */}
				<header className='cv-section neon-panel clip-notch flex items-start justify-between gap-6 p-6 print:border print:border-black print:bg-white print:shadow-none'>
					<div>
						<h1 className='font-display text-4xl leading-none font-bold tracking-tight uppercase md:text-5xl print:text-black'>
							{personalData.name}
						</h1>
						<p className='neon-text-yellow mt-2 font-mono text-lg font-bold tracking-widest uppercase print:text-black print:[text-shadow:none]'>
							Product Lead
						</p>
						<div className='text-muted-foreground mt-4 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs print:text-black'>
							<span className='inline-flex items-center gap-1.5'>
								<Icon icon='mdi:email-outline' className='text-cyber-cyan size-4 print:text-black' />
								{personalData.contact.email}
							</span>
							<span className='inline-flex items-center gap-1.5'>
								<Icon icon='mdi:map-marker-outline' className='text-cyber-cyan size-4 print:text-black' />
								{personalData.contact.location}
							</span>
							<span className='inline-flex items-center gap-1.5'>
								<Icon icon='mdi:web' className='text-cyber-cyan size-4 print:text-black' />
								nooobtimex.me
							</span>
						</div>
					</div>
					<div className='flex shrink-0 flex-col items-center gap-1'>
						<div className='bg-white p-1'>
							<QRCodeSVG value='https://nooobtimex.me' size={72} fgColor='#050507' bgColor='#ffffff' />
						</div>
						<span className='text-muted-foreground font-mono text-[0.55rem] tracking-widest uppercase print:text-black'>
							Scan
						</span>
					</div>
				</header>

				{/* Summary */}
				<section className='cv-section neon-panel clip-notch p-6 print:border print:border-black print:bg-white print:shadow-none'>
					<h2 className='text-cyber-cyan font-mono text-xs tracking-[0.3em] uppercase print:text-black'>
						// Professional Summary
					</h2>
					<p className='text-muted-foreground mt-3 text-sm leading-relaxed print:text-black'>
						{personalData.about.bio}
					</p>
					<ul className='mt-4 grid gap-2 sm:grid-cols-2'>
						{personalData.about.highlights.map((h, i) => (
							<li key={i} className='flex gap-2 text-xs leading-snug'>
								<span className='bg-cyber-yellow mt-1 size-1.5 shrink-0 print:bg-black' />
								<span className='print:text-black'>{h}</span>
							</li>
						))}
					</ul>
				</section>

				{/* Experience */}
				<section className='cv-section'>
					<h2 className='font-display border-cyber-cyan/40 mb-4 border-b pb-2 text-2xl font-bold tracking-wide uppercase print:border-black print:text-black'>
						Experience
					</h2>
					<div className='space-y-4'>
						{workExperienceData.map(item => (
							<div
								key={item.id}
								className='cv-section neon-panel clip-notch-sm p-4 print:border print:border-black/30 print:bg-white print:shadow-none'>
								<div className='flex flex-wrap items-baseline justify-between gap-2'>
									<h3 className='text-lg font-bold tracking-wide uppercase print:text-black'>
										{humanize(item.position)}
										<span className='text-cyber-yellow print:text-black'> — {item.organization.name}</span>
									</h3>
									<span className='text-muted-foreground font-mono text-[0.7rem] tracking-wider uppercase print:text-black'>
										{formatExperienceDuration(item.startDate, item.endDate)}
									</span>
								</div>
								<p className='text-muted-foreground mt-2 text-sm leading-relaxed print:text-black'>
									{item.description}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* Education */}
				{educationData.length > 0 && (
					<section className='cv-section'>
						<h2 className='font-display border-cyber-cyan/40 mb-4 border-b pb-2 text-2xl font-bold tracking-wide uppercase print:border-black print:text-black'>
							Education
						</h2>
						<div className='space-y-3'>
							{educationData.map(item => (
								<div
									key={item.id}
									className='neon-panel clip-notch-sm p-4 print:border print:border-black/30 print:bg-white print:shadow-none'>
									<div className='flex flex-wrap items-baseline justify-between gap-2'>
										<h3 className='font-bold tracking-wide uppercase print:text-black'>{item.organization.name}</h3>
										<span className='text-muted-foreground font-mono text-[0.7rem] tracking-wider uppercase print:text-black'>
											{formatExperienceDuration(item.startDate, item.endDate)}
										</span>
									</div>
									<p className='text-muted-foreground mt-1 text-sm print:text-black'>{item.description}</p>
								</div>
							))}
						</div>
					</section>
				)}

				{/* Skills */}
				<section className='cv-section'>
					<h2 className='font-display border-cyber-cyan/40 mb-4 border-b pb-2 text-2xl font-bold tracking-wide uppercase print:border-black print:text-black'>
						Core Competencies
					</h2>
					<div className='grid gap-4 sm:grid-cols-2'>
						{CATEGORY_ORDER.map(cat => {
							const meta = categoryMetadata[cat]
							const items = skillsData.filter(a => a.category === cat && a.important)
							if (items.length === 0) return null
							return (
								<div key={cat}>
									<h3 className='text-muted-foreground mb-2 font-mono text-[0.7rem] tracking-[0.2em] uppercase print:text-black'>
										{meta.label}
									</h3>
									<div className='flex flex-wrap gap-1.5'>
										{items.map(a => (
											<span
												key={a.name}
												className='border-border inline-flex items-center gap-1 border px-2 py-0.5 text-[0.7rem] print:border-black/40 print:text-black'>
												<Icon icon={a.icon} className='size-3' />
												{a.name}
											</span>
										))}
									</div>
								</div>
							)
						})}
					</div>
				</section>

				{/* Projects */}
				<section className='cv-section'>
					<h2 className='font-display border-cyber-cyan/40 mb-4 border-b pb-2 text-2xl font-bold tracking-wide uppercase print:border-black print:text-black'>
						Selected Projects
					</h2>
					<div className='grid gap-4 sm:grid-cols-2'>
						{projectsData.map(project => (
							<div
								key={project.id}
								className='cv-section neon-panel clip-notch-sm flex flex-col p-3 print:border print:border-black/30 print:bg-white print:shadow-none'>
								<h3 className='font-bold tracking-wide uppercase print:text-black'>{project.title}</h3>
								<p className='text-muted-foreground mt-1 line-clamp-3 text-xs leading-relaxed print:text-black'>
									{project.description}
								</p>
								<div className='mt-2 flex flex-wrap gap-1'>
									{project.skills.slice(0, 6).map(a => (
										<Icon key={a.name} icon={a.icon} aria-label={a.name} className='size-3.5' />
									))}
								</div>
							</div>
						))}
					</div>
				</section>
			</article>
		</div>
	)
}
