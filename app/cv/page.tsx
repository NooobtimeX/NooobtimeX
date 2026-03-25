'use client'

import React from 'react'
import { Icon } from '@iconify/react'
import { QRCodeSVG } from 'qrcode.react'
import { getDynamicAbilities } from '@/common/data/ability/dynamicAbilities'
import { affiliationData } from '@/common/data/affiliation'
import { issuesData } from '@/common/data/issue'
import { personalData } from '@/common/data/personal'
import { AffiliationType } from '@/common/enum'
import type { AbilityGroup } from '@/common/interface'
import { Button } from '@/components/ui/button'

export default function CVPage() {
	const handlePrint = () => {
		window.print()
	}

	// Split projects (8 total) into two groups for Page 3 and Page 4
	const page3Projects = issuesData.slice(0, 4)
	const page4Projects = issuesData.slice(4, 8)

	return (
		<div className='min-h-screen bg-neutral-100 p-4 font-[Inter] text-black md:p-10 print:bg-white print:p-0'>
			{/* Controls: Hidden during print */}
			<div className='mb-8 flex justify-center print:hidden'>
				<Button
					onClick={handlePrint}
					className='flex items-center gap-2 bg-black px-8 py-6 text-lg font-black tracking-tighter text-white uppercase hover:bg-zinc-800'>
					<Icon icon='material-symbols:print' className='h-6 w-6' />
					Save as PDF (Professional Print)
				</Button>
			</div>

			{/* PAGE 1: Profile, Education, Skills, Contact */}
			<div
				id='cv-page-1'
				className='print:page-break-after-always mx-auto mb-10 w-full max-w-[210mm] border-4 border-black bg-white p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] print:mb-0 print:h-[297mm] print:w-[210mm] print:border-0 print:p-12 print:shadow-none'>
				<header className='mb-8 flex flex-col items-center border-b-4 border-black pb-8 text-center md:flex-row md:text-left'>
					<div className='flex-1'>
						<h1 className='font-[Bangers] text-5xl tracking-tighter text-black uppercase md:text-7xl'>
							{personalData.name}
						</h1>
						<p
							className='text-primary mt-2 font-mono text-xl font-black uppercase'
							style={{ WebkitPrintColorAdjust: 'exact' }}>
							{personalData.title}
						</p>
						<div className='mt-4 flex flex-wrap justify-center gap-4 font-bold md:justify-start'>
							<div
								className='flex items-center gap-2 bg-black px-2 py-0.5 text-xs text-white uppercase'
								style={{ WebkitPrintColorAdjust: 'exact' }}>
								<Icon icon='material-symbols:mail' className='h-4 w-4' />
								{personalData.contact.email}
							</div>
							<div className='flex items-center gap-2 border-2 border-black px-2 py-0.5 text-xs uppercase'>
								<Icon icon='material-symbols:location-on' className='text-primary h-4 w-4' />
								{personalData.contact.location}
							</div>
						</div>
					</div>
					<div className='mt-8 md:mt-0'>
						<div className='relative border-4 border-black bg-white p-2'>
							<QRCodeSVG value='https://nooobtimex.me' size={100} />
							<div
								className='absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black px-2 text-[8px] font-black whitespace-nowrap text-white uppercase'
								style={{ WebkitPrintColorAdjust: 'exact' }}>
								Portfolio Scan
							</div>
						</div>
					</div>
				</header>

				<div className='grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr] print:grid-cols-[1.5fr_1fr]'>
					<div className='space-y-12'>
						{/* Summary */}
						<section>
							<h2 className='mb-3 flex items-center gap-2 border-b-2 border-black pb-1 font-[Bangers] text-xl tracking-wide uppercase'>
								<Icon icon='material-symbols:person' className='text-primary h-6 w-6' />
								Professional Profile
							</h2>
							<p className='text-sm leading-relaxed font-medium text-gray-700 md:text-base'>{personalData.about.bio}</p>
						</section>

						{/* Education */}
						<section>
							<h2 className='mb-3 flex items-center gap-2 border-b-2 border-black pb-1 font-[Bangers] text-xl tracking-wide uppercase'>
								<Icon icon='material-symbols:school' className='text-primary h-6 w-6' />
								Education
							</h2>
							<div className='before:bg-primary relative pl-4 before:absolute before:top-1.5 before:bottom-1.5 before:left-0 before:w-1'>
								<h3 className='text-lg font-black text-black uppercase'>B.S. Computer Science</h3>
								<p className='font-bold text-gray-700 uppercase'>Thammasat University</p>
								<p className='text-primary text-xs font-black uppercase tabular-nums'>2022 – 2025</p>
							</div>
						</section>

						{/* Technical Skills - Dynamic */}
						<section>
							<h2 className='mb-3 flex items-center gap-2 border-b-2 border-black pb-1 font-[Bangers] text-xl tracking-wide uppercase'>
								<Icon icon='material-symbols:settings-account-box' className='text-primary h-6 w-6' />
								Core Competencies
							</h2>
							<div className='grid grid-cols-1 gap-4 md:grid-cols-2 print:grid-cols-2'>
								{getDynamicAbilities()
									.filter((g: AbilityGroup) => ['Frontend', 'Backend', 'DevOps'].includes(g.category))
									.map((group: AbilityGroup) => (
										<div key={group.category} className='break-inside-avoid'>
											<h3 className='mb-1.5 text-[9px] font-black text-black uppercase opacity-60'>{group.category}</h3>
											<div className='flex flex-wrap gap-1'>
												{group.abilities.map((a) => (
													<span
														key={a.name}
														className='border border-black px-1.5 py-0.5 text-[8px] font-bold tracking-tight uppercase'
														style={{ WebkitPrintColorAdjust: 'exact' }}>
														{a.name}
													</span>
												))}
											</div>
										</div>
									))}
							</div>
						</section>
					</div>

					{/* Highlights Sidebar */}
					<aside
						className='space-y-12 border-l-4 border-black bg-neutral-50 p-6 print:bg-neutral-50'
						style={{ WebkitPrintColorAdjust: 'exact' }}>
						<section>
							<h2 className='mb-4 flex items-center gap-2 border-b-2 border-black pb-1 font-mono text-sm font-black uppercase'>
								<Icon icon='material-symbols:star' className='text-primary h-5 w-5' />
								Key Achievements
							</h2>
							<ul className='space-y-4'>
								{personalData.about.highlights.map((h, i) => (
									<li key={i} className='flex gap-3 text-xs leading-relaxed'>
										<span className='mt-1 h-2 w-2 shrink-0 bg-black' style={{ WebkitPrintColorAdjust: 'exact' }}></span>
										<span className='font-black text-gray-800 uppercase'>{h}</span>
									</li>
								))}
							</ul>
						</section>

						<section>
							<h2 className='mb-4 flex items-center gap-2 border-b-2 border-black pb-1 font-mono text-sm font-black uppercase'>
								<Icon icon='material-symbols:link' className='text-primary h-5 w-5' />
								Engineering Links
							</h2>
							<div className='mt-4 space-y-3'>
								<div className='flex items-center gap-2 text-[10px] font-black uppercase'>
									<Icon icon='simple-icons:github' className='h-4 w-4' />
									<span>github.com/NooobtimeX</span>
								</div>
								<div className='text-primary flex items-center gap-2 text-[10px] font-black uppercase'>
									<Icon icon='material-symbols:language' className='h-4 w-4' />
									<span>nooobtimex.me</span>
								</div>
							</div>
						</section>
					</aside>
				</div>
			</div>

			{/* PAGE 2: Professional Experience */}
			<div
				id='cv-page-2'
				className='print:page-break-after-always mx-auto mb-10 w-full max-w-[210mm] border-4 border-black bg-white p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] print:mb-0 print:h-[297mm] print:w-[210mm] print:border-0 print:p-12 print:shadow-none'>
				<h2 className='mb-8 flex items-center gap-3 border-b-4 border-black pb-2 font-[Bangers] text-4xl tracking-wide uppercase'>
					<Icon icon='material-symbols:work' className='text-primary h-10 w-10' />
					Engineering Experience
				</h2>

				<div className='space-y-10'>
					{affiliationData
						.filter(a => a.type !== AffiliationType.LifeEvent)
						.map(aff => (
							<div
								key={aff.id}
								className='relative break-inside-avoid pl-8 before:absolute before:top-2 before:left-0 before:h-full before:w-1.5 before:bg-black'>
								<div className='mb-2 flex flex-wrap items-center justify-between gap-x-4'>
									<h3 className='font-[Inter] text-2xl font-black tracking-tighter text-black uppercase md:text-3xl'>
										{aff.affiliation.name}
									</h3>
									<span
										className='bg-black px-3 py-1 text-[10px] font-black tracking-widest text-white uppercase'
										style={{ WebkitPrintColorAdjust: 'exact' }}>
										{new Date(aff.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} –
										{aff.endDate ?
											new Date(aff.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
										:	'Present'}
									</span>
								</div>
								<p
									className='text-primary mb-4 text-lg font-black uppercase tabular-nums'
									style={{ WebkitPrintColorAdjust: 'exact' }}>
									{aff.position}
								</p>
								<p className='mb-6 text-sm leading-relaxed font-medium text-gray-700 md:text-base'>{aff.description}</p>

								<div className='flex flex-wrap gap-2'>
									{aff.abilities.map(ability => (
										<span
											key={ability.name}
											className='border-2 border-black bg-neutral-50 px-2 py-0.5 text-[9px] font-black text-black uppercase'
											style={{ WebkitPrintColorAdjust: 'exact' }}>
											{ability.name}
										</span>
									))}
								</div>
							</div>
						))}
				</div>
			</div>

			{/* PAGE 3: Featured Projects Showcase */}
			<div
				id='cv-page-3'
				className='print:page-break-after-always mx-auto mb-10 w-full max-w-[210mm] border-4 border-black bg-white p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] print:mb-0 print:h-[297mm] print:w-[210mm] print:border-0 print:p-12 print:shadow-none'>
				<h2 className='mb-8 flex items-center gap-3 border-b-4 border-black pb-2 font-[Bangers] text-4xl tracking-wide uppercase'>
					<Icon icon='material-symbols:rocket-launch' className='text-primary h-10 w-10' />
					Product Showcase (I)
				</h2>

				<div className='grid grid-cols-1 gap-12 md:grid-cols-2 print:grid-cols-2'>
					{page3Projects.map(project => (
						<div
							key={project.id}
							className='flex break-inside-avoid flex-col border-4 border-black bg-neutral-50 p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
							style={{ WebkitPrintColorAdjust: 'exact' }}>
							<div className='mb-4 border-2 border-black bg-white'>
								<img
									src={project.images.thumbnail}
									alt={project.title}
									className='h-44 w-full object-cover object-top opacity-90'
								/>
							</div>
							<div className='mb-2 flex items-center gap-2'>
								<Icon icon='material-symbols:folder-open' className='text-primary h-5 w-5' />
								<h3 className='text-xl leading-tight font-black tracking-tight text-black uppercase'>
									{project.title}
								</h3>
							</div>
							<p className='mb-4 line-clamp-4 flex-1 text-xs leading-relaxed font-medium text-gray-700'>
								{project.description}
							</p>

							<div className='flex flex-wrap gap-1.5 border-t-2 border-black/10 pt-4'>
								{project.abilities.slice(0, 5).map(ability => (
									<span
										key={ability.name}
										className='bg-primary/10 border-primary/30 text-primary flex items-center gap-1 border px-2 py-0.5 text-[8px] font-black uppercase'
										style={{ WebkitPrintColorAdjust: 'exact' }}>
										<Icon icon={ability.icon} className='h-2.5 w-2.5' />
										{ability.name}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* PAGE 4: Specialized Engineering Showcase */}
			<div
				id='cv-page-4'
				className='mx-auto w-full max-w-[210mm] border-4 border-black bg-white p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] print:h-[297mm] print:w-[210mm] print:border-0 print:p-12 print:shadow-none'>
				<h2 className='mb-8 flex items-center gap-3 border-b-4 border-black pb-2 font-[Bangers] text-4xl tracking-wide uppercase'>
					<Icon icon='material-symbols:terminal' className='text-primary h-10 w-10' />
					Product Showcase (II)
				</h2>

				<div className='grid grid-cols-1 gap-12 md:grid-cols-2 print:grid-cols-2'>
					{page4Projects.map(project => (
						<div
							key={project.id}
							className='flex break-inside-avoid flex-col border-4 border-black bg-neutral-50 p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
							style={{ WebkitPrintColorAdjust: 'exact' }}>
							<div className='mb-4 border-2 border-black bg-white'>
								<img
									src={project.images.thumbnail}
									alt={project.title}
									className='h-44 w-full object-cover object-top opacity-90'
								/>
							</div>
							<div className='mb-2 flex items-center gap-2'>
								<Icon icon='material-symbols:folder-open' className='text-primary h-5 w-5' />
								<h3 className='text-xl leading-tight font-black tracking-tight text-black uppercase'>
									{project.title}
								</h3>
							</div>
							<p className='mb-4 line-clamp-4 flex-1 text-xs leading-relaxed font-medium text-gray-700'>
								{project.description}
							</p>

							<div className='flex flex-wrap gap-1.5 border-t-2 border-black/10 pt-4'>
								{project.abilities.slice(0, 5).map(ability => (
									<span
										key={ability.name}
										className='bg-primary/10 border-primary/30 text-primary flex items-center gap-1 border px-2 py-0.5 text-[8px] font-black uppercase'
										style={{ WebkitPrintColorAdjust: 'exact' }}>
										<Icon icon={ability.icon} className='h-2.5 w-2.5' />
										{ability.name}
									</span>
								))}
							</div>
						</div>
					))}
				</div>

				<footer className='mt-16 flex items-center justify-between border-t-4 border-black pt-8'>
					<div className='text-left'>
						<p className='text-[10px] font-black tracking-widest text-black uppercase'>Modern CV Architecture</p>
						<p className='text-[8px] font-bold text-gray-500 uppercase'>Dynamically Generated via Portfolio Core</p>
					</div>
					<div className='text-right'>
						<p className='text-[10px] font-black tracking-widest text-black uppercase'>
							{new Date().getFullYear()} © NOOOBTIMEX
						</p>
						<p className='text-[8px] font-bold text-gray-500 uppercase'>nooobtimex.me</p>
					</div>
				</footer>
			</div>

			<style jsx global>{`
				@media print {
					@page {
						margin: 0;
						size: A4 portrait;
					}
					html,
					body {
						background: white !important;
						width: 210mm;
						height: 297mm;
						margin: 0 !important;
						padding: 0 !important;
					}
					* {
						-webkit-print-color-adjust: exact !important;
						print-color-adjust: exact !important;
					}
					.print\\:page-break-after-always {
						page-break-after: always !important;
						break-after: page !important;
					}
					.break-inside-avoid {
						break-inside: avoid !important;
					}
				}
			`}</style>
		</div>
	)
}
