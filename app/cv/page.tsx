'use client'

import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { QRCodeSVG } from 'qrcode.react'
import { Button } from '@/components/ui/button'
import {
	Ability,
	AbilityCategory,
	AbilityGroup,
	AffiliationId,
	affiliationData,
	getDynamicAbilities,
	issuesData,
	personalData,
	workExperienceData
} from '@/common'

export default function CVPage() {
	const handlePrint = () => {
		window.print()
	}

	// Split work-only affiliations for pagination (Max 3 per page in the CV)
	const page2Affiliations = workExperienceData.slice(0, 3)
	const page3Affiliations = workExperienceData.slice(3)

	// Projects: 11 total. 4 per page = 3 pages of projects.
	// Page 4: Projects 0-4
	// Page 5: Projects 4-8
	// Page 6: Projects 8-end
	const page4Projects = issuesData.slice(0, 4)
	const page5Projects = issuesData.slice(4, 8)
	const page6Projects = issuesData.slice(8)

	const getCompanyName = (id?: AffiliationId) => {
		if (!id) return null
		const aff = affiliationData.find(a => a.id === id)
		return aff?.affiliation.name || null
	}

	const categoryOrder: Record<string, number> = {
		[AbilityCategory.Frontend]: 1,
		[AbilityCategory.Backend]: 2,
		[AbilityCategory.Infrastructure]: 3,
		[AbilityCategory.GrowthManagement]: 4
	}

	const sortAbilities = (a: Ability, b: Ability) => {
		if (a.important && !b.important) return -1
		if (!a.important && b.important) return 1
		return (categoryOrder[a.category] || 99) - (categoryOrder[b.category] || 99)
	}

	return (
		<div className='min-h-screen bg-zinc-100 py-10 font-sans text-black print:bg-white print:py-0'>
			<style jsx global>{`
				/* Global overrides for CV pages */
				#cv-page-1,
				#cv-page-2,
				#cv-page-3,
				#cv-page-4,
				#cv-page-5,
				#cv-page-6 {
					font-family:
						ui-sans-serif,
						system-ui,
						-apple-system,
						BlinkMacSystemFont,
						'Segoe UI',
						Roboto,
						'Helvetica Neue',
						Arial,
						sans-serif !important;
				}
				#cv-page-1 h1,
				#cv-page-1 h2,
				#cv-page-1 h3,
				#cv-page-1 h4,
				#cv-page-2 h1,
				#cv-page-2 h2,
				#cv-page-2 h3,
				#cv-page-2 h4,
				#cv-page-3 h1,
				#cv-page-3 h2,
				#cv-page-3 h3,
				#cv-page-3 h4,
				#cv-page-4 h1,
				#cv-page-4 h2,
				#cv-page-4 h3,
				#cv-page-4 h4,
				#cv-page-5 h1,
				#cv-page-5 h2,
				#cv-page-5 h3,
				#cv-page-5 h4,
				#cv-page-6 h1,
				#cv-page-6 h2,
				#cv-page-6 h3,
				#cv-page-6 h4 {
					font-family:
						ui-sans-serif,
						system-ui,
						-apple-system,
						BlinkMacSystemFont,
						'Segoe UI',
						Roboto,
						'Helvetica Neue',
						Arial,
						sans-serif !important;
					text-shadow: none !important;
					letter-spacing: normal !important;
					text-transform: uppercase !important;
				}

				@media print {
					@page {
						margin: 0;
						size: A4 portrait;
					}
					html,
					body {
						background: white !important;
						width: 210mm;
						height: 100%;
						margin: 0 !important;
						padding: 0 !important;
						-webkit-print-color-adjust: exact !important;
						print-color-adjust: exact !important;
					}
					#cv-page-1,
					#cv-page-2,
					#cv-page-3,
					#cv-page-4,
					#cv-page-5 {
						page-break-after: always !important;
					}
					#cv-page-1,
					#cv-page-2,
					#cv-page-3,
					#cv-page-4,
					#cv-page-5,
					#cv-page-6 {
						margin: 0 !important;
						border: none !important;
						box-shadow: none !important;
						width: 210mm !important;
						height: 296.9mm !important;
						padding: 14mm !important;
						break-inside: avoid !important;
						display: flex !important;
						flex-direction: column !important;
						background: white !important;
						overflow: hidden !important;
					}
					/* Restore image color for print */
					img {
						filter: none !important;
						-webkit-print-color-adjust: exact !important;
					}
				}

				/* Responsivescaling for A4 pages */
				.cv-page-container {
					transform-origin: top center;
				}
				@media (max-width: 210mm) {
					.cv-page-container {
						transform: scale(calc((100vw - 32px) / 210mm));
						margin-bottom: calc(297mm * (calc((100vw - 32px) / 210mm) - 1));
					}
				}
			`}</style>

			{/* Controls */}
			<div className='sticky top-0 z-30 mb-8 flex flex-col items-center justify-center gap-4 bg-zinc-100/80 p-4 backdrop-blur-md md:relative md:flex-row md:bg-transparent md:p-0 print:hidden'>
				<Button
					onClick={handlePrint}
					className='flex w-full items-center justify-center gap-2 bg-red-600 px-6 py-6 text-lg font-bold tracking-tight text-white uppercase transition-transform active:scale-95 md:w-auto md:px-10 md:py-7 md:text-xl'>
					<Icon icon='material-symbols:print' className='h-6 w-6 md:h-7 md:w-7' />
					Print Premium Color CV (A4)
				</Button>
				<Button
					asChild
					className='flex w-full items-center justify-center gap-2 border-2 border-zinc-800 bg-zinc-950 px-6 py-6 text-lg font-bold tracking-tight text-white uppercase transition-transform hover:bg-zinc-900 active:scale-95 md:w-auto md:px-10 md:py-7 md:text-xl'>
					{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
					<Link href={'/cv/presentation' as any}>
						<Icon icon='material-symbols:slideshow' className='h-6 w-6 text-red-500 md:h-7 md:w-7' />
						Presentation Mode
					</Link>
				</Button>
			</div>

			{/* Responsive Wrapper for A4 Pages */}
			<div className='flex flex-col items-center gap-10 px-4 md:px-0'>
				{/* PAGE 1: Personal Branding & Core Info */}
				<div
					id='cv-page-1'
					className='cv-page-container mx-auto mb-10 flex h-[297mm] w-[210mm] flex-col overflow-hidden border border-black/5 bg-white p-[14mm] shadow-lg print:mb-0 print:border-0 print:shadow-none'>
					<header
						className='mb-8 flex flex-row items-center justify-between border-b-4 border-red-600 pb-8'
						style={{ WebkitPrintColorAdjust: 'exact' }}>
						<div className='flex-1'>
							<h1 className='text-6xl leading-[0.85] font-black tracking-tighter text-black uppercase'>
								{personalData.name}
							</h1>
							<p
								className='mt-2 font-mono text-2xl font-black tracking-widest text-red-600 uppercase'
								style={{ WebkitPrintColorAdjust: 'exact', color: '#dc2626' }}>
								{personalData.title}
							</p>
							<div className='mt-6 flex flex-wrap gap-6 font-bold'>
								<div
									className='flex items-center gap-2 text-[12px] uppercase'
									style={{ WebkitPrintColorAdjust: 'exact' }}>
									<Icon icon='material-symbols:mail' className='h-4 w-4 text-red-600' />
									{personalData.contact.email}
								</div>
								<div className='flex items-center gap-2 text-[12px] text-gray-700 uppercase'>
									<Icon icon='material-symbols:location-on' className='h-4 w-4 text-red-600' />
									{personalData.contact.location}
								</div>
								<div className='flex items-center gap-2 text-[12px] text-gray-700 uppercase'>
									<Icon icon='material-symbols:language' className='h-4 w-4 text-red-600' />
									nooobtimex.me
								</div>
							</div>
						</div>
						<div className='flex flex-col items-center gap-2'>
							<QRCodeSVG value='https://nooobtimex.me' size={80} fgColor='#dc2626' />
							<span
								className='text-[8px] font-black tracking-widest text-red-600 uppercase opacity-60'
								style={{ WebkitPrintColorAdjust: 'exact' }}>
								Portfolio Scan
							</span>
						</div>
					</header>

					<div className='grid grid-cols-[1.6fr_1fr] gap-12 overflow-hidden'>
						<div className='space-y-8'>
							<section>
								<h2
									className='mb-4 flex items-center gap-2 border-b-2 border-red-600 pb-1.5 text-2xl font-black tracking-tight uppercase'
									style={{ WebkitPrintColorAdjust: 'exact' }}>
									Professional Summary
								</h2>
								<p className='text-[14px] leading-relaxed font-medium text-gray-700'>{personalData.about.bio}</p>
							</section>

							<section>
								<h2
									className='mb-4 flex items-center gap-2 border-b-2 border-red-600 pb-1.5 text-2xl font-black tracking-tight uppercase'
									style={{ WebkitPrintColorAdjust: 'exact' }}>
									Academic Background
								</h2>
								<div
									className='relative pl-5 before:absolute before:top-1.5 before:left-0 before:h-[calc(100%-6px)] before:w-1.5 before:bg-red-600'
									style={{ WebkitPrintColorAdjust: 'exact' }}>
									<h3 className='text-lg font-black text-black uppercase'>B.S. Computer Science</h3>
									<p className='text-sm font-bold text-gray-500 uppercase'>Thammasat University</p>
									<p
										className='mt-0.5 text-xs font-black text-red-600 uppercase opacity-80'
										style={{ WebkitPrintColorAdjust: 'exact' }}>
										2022 – 2025
									</p>
								</div>
							</section>

							<section>
								<h2
									className='mb-4 flex items-center gap-2 border-b-2 border-red-600 pb-1.5 text-2xl font-black tracking-tight uppercase'
									style={{ WebkitPrintColorAdjust: 'exact' }}>
									Core Competencies
								</h2>
								<div className='grid grid-cols-2 gap-x-6 gap-y-6'>
									{getDynamicAbilities(issuesData)
										.filter((g: AbilityGroup) => ['Frontend', 'Backend', 'Infrastructure'].includes(g.category))
										.map((group: AbilityGroup) => {
											const coreAbilities = group.abilities.filter(a => a.important)
											if (coreAbilities.length === 0) return null
											return (
												<div key={group.category}>
													<h3 className='mb-2 text-[10px] font-black tracking-[0.2em] text-black uppercase opacity-40'>
														{group.category}
													</h3>
													<div className='flex flex-wrap gap-1.5'>
														{coreAbilities.map(a => (
															<span
																key={a.name}
																className='flex items-center gap-1 border-2 border-red-100 bg-red-50/30 px-2 py-0.5 text-[9px] font-black text-red-700/80 uppercase'
																style={{ WebkitPrintColorAdjust: 'exact' }}>
																<Icon icon={a.icon} className='h-3 w-3 text-red-600' />
																{a.name}
															</span>
														))}
													</div>
												</div>
											)
										})}
								</div>
							</section>
						</div>

						<aside className='space-y-10 border-l-2 border-red-50 pl-10' style={{ WebkitPrintColorAdjust: 'exact' }}>
							<section>
								<h2
									className='mb-4 text-xs font-black tracking-[0.2em] text-red-600 uppercase'
									style={{ WebkitPrintColorAdjust: 'exact' }}>
									Key Highlights
								</h2>
								<ul className='space-y-4'>
									{personalData.about.highlights.map((h, i) => (
										<li key={i} className='flex gap-3 text-[12px] leading-snug'>
											<span
												className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600'
												style={{ WebkitPrintColorAdjust: 'exact' }}></span>
											<span className='font-bold tracking-tight text-black uppercase'>{h}</span>
										</li>
									))}
								</ul>
							</section>

							<section>
								<h2
									className='mb-4 text-xs font-black tracking-[0.2em] text-red-600 uppercase'
									style={{ WebkitPrintColorAdjust: 'exact' }}>
									Contact
								</h2>
								<div className='space-y-4'>
									<div className='flex items-center gap-3 text-[11px] font-black tracking-tight uppercase'>
										<Icon icon='simple-icons:github' className='h-5 w-5 text-black' />
										<span>github.com/nooobtimex</span>
									</div>
									<div className='flex items-center gap-3 text-[11px] font-black tracking-tight uppercase'>
										<Icon
											icon='simple-icons:linkedin'
											className='h-5 w-5 text-red-600'
											style={{ WebkitPrintColorAdjust: 'exact' }}
										/>
										<span>Wongsaphat Puangsorn</span>
									</div>
								</div>
							</section>
						</aside>
					</div>
				</div>

				{/* PAGE 2: Experience (I) */}
				<div
					id='cv-page-2'
					className='cv-page-container mx-auto mb-10 flex h-[297mm] w-[210mm] flex-col overflow-hidden border border-black/5 bg-white p-[14mm] shadow-lg print:mb-0 print:border-0 print:shadow-none'>
					<h2 className='mb-8 border-b-2 border-black pb-2 text-3xl font-black tracking-tight uppercase'>
						Professional Experience
					</h2>

					<div className='space-y-10'>
						{page2Affiliations.map(aff => (
							<div
								key={aff.id}
								className='relative break-inside-avoid pl-10 before:absolute before:top-2 before:left-0 before:h-full before:w-1.5 before:bg-red-600'
								style={{ WebkitPrintColorAdjust: 'exact' }}>
								<div className='mb-1'>
									<h3 className='text-2xl font-black tracking-tight text-black uppercase'>{aff.affiliation.name}</h3>
								</div>
								<div className='mb-3'>
									<p
										className='text-lg font-black tracking-tight text-red-600 uppercase'
										style={{ WebkitPrintColorAdjust: 'exact' }}>
										{aff.position}
									</p>
								</div>
								<div className='mb-4 flex items-center gap-4'>
									<span
										className='bg-red-600 px-3 py-1 text-[11px] font-black text-white uppercase'
										style={{ WebkitPrintColorAdjust: 'exact' }}>
										{new Date(aff.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} –
										{aff.endDate ?
											new Date(aff.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
										:	'Present'}
									</span>
									<span
										className='border-2 border-red-200 bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-700 uppercase'
										style={{ WebkitPrintColorAdjust: 'exact' }}>
										{aff.type}
									</span>
								</div>
								<p className='mb-6 line-clamp-4 text-[14px] leading-relaxed font-medium text-gray-700'>
									{aff.description}
								</p>

								<div className='flex flex-wrap gap-1.5'>
									{(() => {
										const projectAbilities = issuesData
											.filter(issue => issue.linkedAffiliationId === aff.id)
											.flatMap(issue => issue.abilities)
										const uniqueAbilities = Array.from(new Map(projectAbilities.map(a => [a.name, a])).values()).sort(
											sortAbilities
										)

										return uniqueAbilities.slice(0, 10).map(ability => (
											<span
												key={ability.name}
												className='flex items-center gap-1 border-2 border-gray-100 bg-gray-50 px-2 py-0.5 text-[9px] font-black text-gray-400 uppercase'
												style={{ WebkitPrintColorAdjust: 'exact' }}>
												<Icon icon={ability.icon} className='h-3 w-3 text-red-600/40' />
												{ability.name}
											</span>
										))
									})()}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* PAGE 3: Experience (II) */}
				<div
					id='cv-page-3'
					className='cv-page-container mx-auto mb-10 flex h-[297mm] w-[210mm] flex-col overflow-hidden border border-black/5 bg-white p-[14mm] shadow-lg print:mb-0 print:border-0 print:shadow-none'>
					{page3Affiliations.length > 0 && (
						<section className='mb-10'>
							<h2 className='mb-8 border-b-2 border-black pb-2 text-3xl font-black tracking-tight uppercase'>
								Experience (Continued)
							</h2>
							<div className='space-y-10'>
								{page3Affiliations.map(aff => (
									<div
										key={aff.id}
										className='relative break-inside-avoid pl-10 before:absolute before:top-2 before:left-0 before:h-full before:w-1.5 before:bg-red-600'
										style={{ WebkitPrintColorAdjust: 'exact' }}>
										<div className='mb-1'>
											<h3 className='text-2xl font-black tracking-tight text-black uppercase'>
												{aff.affiliation.name}
											</h3>
										</div>
										<div className='mb-3'>
											<p
												className='text-lg font-black tracking-tight text-red-600 uppercase'
												style={{ WebkitPrintColorAdjust: 'exact' }}>
												{aff.position}
											</p>
										</div>
										<div className='mb-4 flex items-center gap-4'>
											<span
												className='bg-red-600 px-3 py-1 text-[11px] font-black text-white uppercase'
												style={{ WebkitPrintColorAdjust: 'exact' }}>
												{new Date(aff.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} –
												{aff.endDate ?
													new Date(aff.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
												:	'Present'}
											</span>
											<span
												className='border-2 border-red-200 bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-700 uppercase'
												style={{ WebkitPrintColorAdjust: 'exact' }}>
												{aff.type}
											</span>
										</div>
										<p className='line-clamp-4 text-[14px] leading-relaxed font-medium text-gray-700'>
											{aff.description}
										</p>

										<div className='mt-6 flex flex-wrap gap-1.5'>
											{(() => {
												const projectAbilities = issuesData
													.filter(issue => issue.linkedAffiliationId === aff.id)
													.flatMap(issue => issue.abilities)
												const uniqueAbilities = Array.from(
													new Map(projectAbilities.map(a => [a.name, a])).values()
												).sort(sortAbilities)

												return uniqueAbilities.slice(0, 10).map(ability => (
													<span
														key={ability.name}
														className='flex items-center gap-1 border-2 border-gray-100 bg-gray-50 px-2 py-0.5 text-[9px] font-black text-gray-400 uppercase'
														style={{ WebkitPrintColorAdjust: 'exact' }}>
														<Icon icon={ability.icon} className='h-3 w-3 text-red-600/40' />
														{ability.name}
													</span>
												))
											})()}
										</div>
									</div>
								))}
							</div>
						</section>
					)}
				</div>

				{/* PAGE 4: Selected Projects (I) */}
				<div
					id='cv-page-4'
					className='cv-page-container mx-auto mb-10 flex h-[297mm] w-[210mm] flex-col overflow-hidden border border-black/5 bg-white p-[14mm] shadow-lg print:mb-0 print:border-0 print:shadow-none'>
					<h2 className='mb-10 border-b-2 border-black pb-2 text-3xl font-black tracking-tight uppercase'>
						Selected Projects (I)
					</h2>

					<div className='grid grid-cols-2 gap-6 overflow-hidden'>
						{page4Projects.map(project => (
							<div key={project.id} className='flex flex-col border border-gray-100 bg-zinc-50/20 p-4 shadow-sm'>
								<div className='mb-4 aspect-video overflow-hidden border border-gray-100'>
									<img src={project.images.banner} alt={project.title} className='h-full w-full object-cover' />
								</div>
								<h3 className='mb-1 line-clamp-1 text-xl font-black tracking-tight text-black uppercase'>
									{project.title}
								</h3>
								{getCompanyName(project.linkedAffiliationId) && (
									<p
										className='mb-3 text-[9px] font-black tracking-[0.15em] text-red-600 uppercase opacity-80'
										style={{ WebkitPrintColorAdjust: 'exact' }}>
										{getCompanyName(project.linkedAffiliationId)}
									</p>
								)}
								<p className='mb-4 line-clamp-6 text-[12px] leading-normal font-medium text-gray-600'>
									{project.description}
								</p>
								<div className='mt-auto flex flex-wrap gap-1.5 border-t border-gray-50 pt-3'>
									{project.abilities
										.sort(sortAbilities)
										.slice(0, 5)
										.map((ability: Ability) => (
											<span
												key={ability.name}
												className='flex items-center gap-1 rounded border border-red-100 bg-red-50 px-1.5 py-0.5 text-[8px] font-black text-red-700 uppercase'
												style={{ WebkitPrintColorAdjust: 'exact' }}>
												<Icon icon={ability.icon} className='h-2.5 w-2.5 opacity-60' />
												{ability.name}
											</span>
										))}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* PAGE 5: Selected Projects (II) */}
				<div
					id='cv-page-5'
					className='cv-page-container mx-auto mb-10 flex h-[297mm] w-[210mm] flex-col overflow-hidden border border-black/5 bg-white p-[14mm] shadow-lg print:mb-0 print:border-0 print:shadow-none'>
					<h2 className='mb-10 border-b-2 border-black pb-2 text-3xl font-black tracking-tight uppercase'>
						Selected Projects (II)
					</h2>

					<div className='grid grid-cols-2 gap-6 overflow-hidden'>
						{page5Projects.map(project => (
							<div key={project.id} className='flex flex-col border border-gray-100 bg-zinc-50/20 p-4 shadow-sm'>
								<div className='mb-4 aspect-video overflow-hidden border border-gray-100'>
									<img src={project.images.banner} alt={project.title} className='h-full w-full object-cover' />
								</div>
								<h3 className='mb-1 line-clamp-1 text-xl font-black tracking-tight text-black uppercase'>
									{project.title}
								</h3>
								{getCompanyName(project.linkedAffiliationId) && (
									<p
										className='mb-3 text-[9px] font-black tracking-[0.15em] text-red-600 uppercase opacity-80'
										style={{ WebkitPrintColorAdjust: 'exact' }}>
										{getCompanyName(project.linkedAffiliationId)}
									</p>
								)}
								<p className='mb-4 line-clamp-6 text-[12px] leading-normal font-medium text-gray-600'>
									{project.description}
								</p>
								<div className='mt-auto flex flex-wrap gap-1.5 border-t border-gray-50 pt-3'>
									{project.abilities
										.sort(sortAbilities)
										.slice(0, 5)
										.map((ability: Ability) => (
											<span
												key={ability.name}
												className='flex items-center gap-1 rounded border border-red-100 bg-red-50 px-1.5 py-0.5 text-[8px] font-black text-red-700 uppercase'
												style={{ WebkitPrintColorAdjust: 'exact' }}>
												<Icon icon={ability.icon} className='h-2.5 w-2.5 opacity-60' />
												{ability.name}
											</span>
										))}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* PAGE 6: Selected Projects (Final) */}
				<div
					id='cv-page-6'
					className='cv-page-container mx-auto flex h-[297mm] w-[210mm] flex-col overflow-hidden border border-black/5 bg-white p-[14mm] shadow-lg print:mb-0 print:border-0 print:shadow-none'>
					<h2 className='mb-10 border-b-2 border-black pb-2 text-3xl font-black tracking-tight uppercase'>
						Selected Projects (Final)
					</h2>

					<div className='grid grid-cols-2 gap-6 overflow-hidden'>
						{page6Projects.map(project => (
							<div key={project.id} className='flex flex-col border border-gray-100 bg-zinc-50/20 p-4 shadow-sm'>
								<div className='mb-4 aspect-video overflow-hidden border border-gray-100'>
									<img src={project.images.banner} alt={project.title} className='h-full w-full object-cover' />
								</div>
								<h3 className='mb-1 line-clamp-1 text-xl font-black tracking-tight text-black uppercase'>
									{project.title}
								</h3>
								{getCompanyName(project.linkedAffiliationId) && (
									<p
										className='mb-3 text-[9px] font-black tracking-[0.15em] text-red-600 uppercase opacity-80'
										style={{ WebkitPrintColorAdjust: 'exact' }}>
										{getCompanyName(project.linkedAffiliationId)}
									</p>
								)}
								<p className='mb-4 line-clamp-6 text-[12px] leading-normal font-medium text-gray-600'>
									{project.description}
								</p>
								<div className='mt-auto flex flex-wrap gap-1.5 border-t border-gray-50 pt-3'>
									{project.abilities
										.sort(sortAbilities)
										.slice(0, 5)
										.map((ability: Ability) => (
											<span
												key={ability.name}
												className='flex items-center gap-1 rounded border border-red-100 bg-red-50 px-1.5 py-0.5 text-[8px] font-black text-red-700 uppercase'
												style={{ WebkitPrintColorAdjust: 'exact' }}>
												<Icon icon={ability.icon} className='h-2.5 w-2.5 opacity-60' />
												{ability.name}
											</span>
										))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
