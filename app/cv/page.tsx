'use client'

import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { QRCodeSVG } from 'qrcode.react'
import {
	type Skill,
	type SkillCategory,
	categoryMetadata,
	experiencesData,
	featuredSkills,
	personalData,
	projectsData,
	workExperienceData
} from '@/common'

const ACCENT = '#FF003C'

const humanize = (value: string) =>
	value
		.split('-')
		.map(w => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ')

export default function CVPage() {
	const handlePrint = () => window.print()

	// Work-only experience, paginated (max 3 per page)
	const page2Experience = workExperienceData.slice(0, 3)
	const page3Experience = workExperienceData.slice(3)

	// Projects, 4 per page
	const page4Projects = projectsData.slice(0, 4)
	const page5Projects = projectsData.slice(4, 8)
	const page6Projects = projectsData.slice(8)

	const getCompanyName = (id?: string) => {
		if (!id) return null
		return experiencesData.find(e => e.organization.id === id)?.organization.name ?? null
	}

	const categoryOrder: Record<string, number> = {
		'frontend': 1,
		'backend': 2,
		'infrastructure': 3,
		'growth-management': 4
	}

	const sortSkills = (a: Skill, b: Skill) => (categoryOrder[a.category] || 99) - (categoryOrder[b.category] || 99)

	return (
		<div className='min-h-screen bg-zinc-100 py-10 font-sans text-black print:bg-white print:py-0'>
			<style jsx global>{`
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
				#cv-page-1 :is(h1, h2, h3, h4),
				#cv-page-2 :is(h1, h2, h3, h4),
				#cv-page-3 :is(h1, h2, h3, h4),
				#cv-page-4 :is(h1, h2, h3, h4),
				#cv-page-5 :is(h1, h2, h3, h4),
				#cv-page-6 :is(h1, h2, h3, h4) {
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
					img {
						filter: none !important;
						-webkit-print-color-adjust: exact !important;
					}
				}

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
				<button
					onClick={handlePrint}
					style={{ backgroundColor: ACCENT }}
					className='flex w-full items-center justify-center gap-2 px-6 py-6 text-lg font-bold tracking-tight text-white uppercase transition-transform active:scale-95 md:w-auto md:px-10 md:py-7 md:text-xl'>
					<Icon icon='material-symbols:print' className='h-6 w-6 md:h-7 md:w-7' />
					Print Premium Color CV (A4)
				</button>
				<Link
					href='/cv/presentation'
					className='flex w-full items-center justify-center gap-2 border-2 border-zinc-800 bg-zinc-950 px-6 py-6 text-lg font-bold tracking-tight text-white uppercase transition-transform hover:bg-zinc-900 active:scale-95 md:w-auto md:px-10 md:py-7 md:text-xl'>
					<Icon icon='material-symbols:slideshow' className='h-6 w-6 md:h-7 md:w-7' style={{ color: ACCENT }} />
					Presentation Mode
				</Link>
			</div>

			{/* A4 pages */}
			<div className='flex flex-col items-center gap-10 px-4 md:px-0'>
				{/* PAGE 1 — Branding & core info */}
				<div
					id='cv-page-1'
					className='cv-page-container mx-auto mb-10 flex h-[297mm] w-[210mm] flex-col overflow-hidden border border-black/5 bg-white p-[14mm] shadow-lg print:mb-0 print:border-0 print:shadow-none'>
					<header
						className='mb-8 flex flex-row items-center justify-between border-b-4 pb-8'
						style={{ borderColor: ACCENT, WebkitPrintColorAdjust: 'exact' }}>
						<div className='flex-1'>
							<h1 className='text-6xl leading-[0.85] font-black tracking-tighter text-black uppercase'>
								{personalData.name}
							</h1>
							<p
								className='mt-2 font-mono text-2xl font-black tracking-widest uppercase'
								style={{ color: ACCENT, WebkitPrintColorAdjust: 'exact' }}>
								Product Lead
							</p>
							<div className='mt-6 flex flex-wrap gap-6 font-bold'>
								<div className='flex items-center gap-2 text-[12px] uppercase'>
									<Icon icon='material-symbols:mail' className='h-4 w-4' style={{ color: ACCENT }} />
									{personalData.contact.email}
								</div>
								<div className='flex items-center gap-2 text-[12px] text-gray-700 uppercase'>
									<Icon icon='material-symbols:location-on' className='h-4 w-4' style={{ color: ACCENT }} />
									{personalData.contact.location}
								</div>
								<div className='flex items-center gap-2 text-[12px] text-gray-700 uppercase'>
									<Icon icon='material-symbols:language' className='h-4 w-4' style={{ color: ACCENT }} />
									nooobtimex.me
								</div>
							</div>
						</div>
						<div className='flex flex-col items-center gap-2'>
							<QRCodeSVG value='https://nooobtimex.me' size={80} fgColor={ACCENT} />
							<span
								className='text-[8px] font-black tracking-widest uppercase opacity-60'
								style={{ color: ACCENT, WebkitPrintColorAdjust: 'exact' }}>
								Portfolio Scan
							</span>
						</div>
					</header>

					<div className='grid grid-cols-[1.6fr_1fr] gap-12 overflow-hidden'>
						<div className='space-y-8'>
							<section>
								<h2
									className='mb-4 flex items-center gap-2 border-b-2 pb-1.5 text-2xl font-black tracking-tight uppercase'
									style={{ borderColor: ACCENT, WebkitPrintColorAdjust: 'exact' }}>
									Professional Summary
								</h2>
								<p className='text-[14px] leading-relaxed font-medium text-gray-700'>{personalData.about.bio}</p>
							</section>

							<section>
								<h2
									className='mb-4 flex items-center gap-2 border-b-2 pb-1.5 text-2xl font-black tracking-tight uppercase'
									style={{ borderColor: ACCENT, WebkitPrintColorAdjust: 'exact' }}>
									Academic Background
								</h2>
								<div
									className='relative pl-5 before:absolute before:top-1.5 before:left-0 before:h-[calc(100%-6px)] before:w-1.5'
									style={{ WebkitPrintColorAdjust: 'exact' }}>
									<span
										className='absolute top-1.5 left-0 h-[calc(100%-6px)] w-1.5'
										style={{ backgroundColor: ACCENT }}
									/>
									<h3 className='text-lg font-black text-black uppercase'>B.S. Computer Science</h3>
									<p className='text-sm font-bold text-gray-500 uppercase'>Thammasat University</p>
									<p
										className='mt-0.5 text-xs font-black uppercase opacity-80'
										style={{ color: ACCENT, WebkitPrintColorAdjust: 'exact' }}>
										2021 – 2025
									</p>
								</div>
							</section>

							<section>
								<h2
									className='mb-4 flex items-center gap-2 border-b-2 pb-1.5 text-2xl font-black tracking-tight uppercase'
									style={{ borderColor: ACCENT, WebkitPrintColorAdjust: 'exact' }}>
									Core Competencies
								</h2>
								<div className='grid grid-cols-2 gap-x-6 gap-y-6'>
									{(['frontend', 'backend', 'infrastructure'] as SkillCategory[]).map(cat => {
										const core = featuredSkills.filter(s => s.category === cat)
										if (core.length === 0) return null
										return (
											<div key={cat}>
												<h3 className='mb-2 text-[10px] font-black tracking-[0.2em] text-black uppercase opacity-40'>
													{categoryMetadata[cat].label}
												</h3>
												<div className='flex flex-wrap gap-1.5'>
													{core.map(s => (
														<span
															key={s.name}
															className='flex items-center gap-1 border-2 px-2 py-0.5 text-[9px] font-black uppercase'
															style={{
																borderColor: `${ACCENT}33`,
																backgroundColor: `${ACCENT}0d`,
																color: ACCENT,
																WebkitPrintColorAdjust: 'exact'
															}}>
															<Icon icon={s.icon} className='h-3 w-3' style={{ color: ACCENT }} />
															{s.name}
														</span>
													))}
												</div>
											</div>
										)
									})}
								</div>
							</section>
						</div>

						<aside
							className='space-y-10 border-l-2 pl-10'
							style={{ borderColor: `${ACCENT}1a`, WebkitPrintColorAdjust: 'exact' }}>
							<section>
								<h2
									className='mb-4 text-xs font-black tracking-[0.2em] uppercase'
									style={{ color: ACCENT, WebkitPrintColorAdjust: 'exact' }}>
									Key Highlights
								</h2>
								<ul className='space-y-4'>
									{personalData.about.highlights.map((h, i) => (
										<li key={i} className='flex gap-3 text-[12px] leading-snug'>
											<span
												className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full'
												style={{ backgroundColor: ACCENT, WebkitPrintColorAdjust: 'exact' }}
											/>
											<span className='font-bold tracking-tight text-black uppercase'>{h}</span>
										</li>
									))}
								</ul>
							</section>

							<section>
								<h2
									className='mb-4 text-xs font-black tracking-[0.2em] uppercase'
									style={{ color: ACCENT, WebkitPrintColorAdjust: 'exact' }}>
									Contact
								</h2>
								<div className='space-y-4'>
									<div className='flex items-center gap-3 text-[11px] font-black tracking-tight uppercase'>
										<Icon icon='simple-icons:github' className='h-5 w-5 text-black' />
										<span>github.com/nooobtimex</span>
									</div>
									<div className='flex items-center gap-3 text-[11px] font-black tracking-tight uppercase'>
										<Icon icon='simple-icons:linkedin' className='h-5 w-5' style={{ color: ACCENT }} />
										<span>Wongsaphat Puangsorn</span>
									</div>
								</div>
							</section>
						</aside>
					</div>
				</div>

				{/* PAGE 2 — Experience (I) */}
				<div
					id='cv-page-2'
					className='cv-page-container mx-auto mb-10 flex h-[297mm] w-[210mm] flex-col overflow-hidden border border-black/5 bg-white p-[14mm] shadow-lg print:mb-0 print:border-0 print:shadow-none'>
					<h2 className='mb-8 border-b-2 border-black pb-2 text-3xl font-black tracking-tight uppercase'>
						Professional Experience
					</h2>
					<div className='space-y-10'>
						{page2Experience.map(item => (
							<ExperienceBlock key={item.id} item={item} accent={ACCENT} sortSkills={sortSkills} />
						))}
					</div>
				</div>

				{/* PAGE 3 — Experience (II) */}
				<div
					id='cv-page-3'
					className='cv-page-container mx-auto mb-10 flex h-[297mm] w-[210mm] flex-col overflow-hidden border border-black/5 bg-white p-[14mm] shadow-lg print:mb-0 print:border-0 print:shadow-none'>
					{page3Experience.length > 0 && (
						<section className='mb-10'>
							<h2 className='mb-8 border-b-2 border-black pb-2 text-3xl font-black tracking-tight uppercase'>
								Experience (Continued)
							</h2>
							<div className='space-y-10'>
								{page3Experience.map(item => (
									<ExperienceBlock key={item.id} item={item} accent={ACCENT} sortSkills={sortSkills} />
								))}
							</div>
						</section>
					)}
				</div>

				{/* PAGES 4–6 — Selected Projects */}
				{[
					{ id: 'cv-page-4', title: 'Selected Projects (I)', list: page4Projects },
					{ id: 'cv-page-5', title: 'Selected Projects (II)', list: page5Projects },
					{ id: 'cv-page-6', title: 'Selected Projects (Final)', list: page6Projects }
				].map(page => (
					<div
						key={page.id}
						id={page.id}
						className='cv-page-container mx-auto mb-10 flex h-[297mm] w-[210mm] flex-col overflow-hidden border border-black/5 bg-white p-[14mm] shadow-lg last:mb-0 print:mb-0 print:border-0 print:shadow-none'>
						<h2 className='mb-10 border-b-2 border-black pb-2 text-3xl font-black tracking-tight uppercase'>
							{page.title}
						</h2>
						<div className='grid grid-cols-2 gap-6 overflow-hidden'>
							{page.list.map(project => (
								<div key={project.id} className='flex flex-col border border-gray-100 bg-zinc-50/20 p-4 shadow-sm'>
									<div className='mb-4 aspect-video overflow-hidden border border-gray-100'>
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img src={project.images.banner} alt={project.title} className='h-full w-full object-cover' />
									</div>
									<h3 className='mb-1 line-clamp-1 text-xl font-black tracking-tight text-black uppercase'>
										{project.title}
									</h3>
									{getCompanyName(project.linkedOrganizationId) && (
										<p
											className='mb-3 text-[9px] font-black tracking-[0.15em] uppercase opacity-80'
											style={{ color: ACCENT, WebkitPrintColorAdjust: 'exact' }}>
											{getCompanyName(project.linkedOrganizationId)}
										</p>
									)}
									<p className='mb-4 line-clamp-6 text-[12px] leading-normal font-medium text-gray-600'>
										{project.description}
									</p>
									<div className='mt-auto flex flex-wrap gap-1.5 border-t border-gray-50 pt-3'>
										{[...project.skills]
											.sort(sortSkills)
											.slice(0, 5)
											.map(s => (
												<span
													key={s.name}
													className='flex items-center gap-1 rounded border px-1.5 py-0.5 text-[8px] font-black uppercase'
													style={{
														borderColor: `${ACCENT}33`,
														backgroundColor: `${ACCENT}0d`,
														color: ACCENT,
														WebkitPrintColorAdjust: 'exact'
													}}>
													<Icon icon={s.icon} className='h-2.5 w-2.5 opacity-60' />
													{s.name}
												</span>
											))}
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

// --- Experience block (shared by pages 2 & 3) ---

interface ExperienceBlockProps {
	item: (typeof workExperienceData)[number]
	accent: string
	sortSkills: (a: Skill, b: Skill) => number
}

const ExperienceBlock: React.FC<ExperienceBlockProps> = ({ item, accent, sortSkills }) => {
	const projectSkills = projectsData.filter(p => p.linkedOrganizationId === item.organization.id).flatMap(p => p.skills)
	const uniqueSkills = Array.from(new Map(projectSkills.map(s => [s.name, s])).values()).sort(sortSkills)

	return (
		<div className='relative break-inside-avoid pl-10' style={{ WebkitPrintColorAdjust: 'exact' }}>
			<span className='absolute top-2 left-0 h-full w-1.5' style={{ backgroundColor: accent }} />
			<h3 className='mb-1 text-2xl font-black tracking-tight text-black uppercase'>{item.organization.name}</h3>
			<p
				className='mb-3 text-lg font-black tracking-tight uppercase'
				style={{ color: accent, WebkitPrintColorAdjust: 'exact' }}>
				{humanize(item.position)}
			</p>
			<div className='mb-4 flex items-center gap-4'>
				<span
					className='px-3 py-1 text-[11px] font-black text-white uppercase'
					style={{ backgroundColor: accent, WebkitPrintColorAdjust: 'exact' }}>
					{new Date(item.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} –{' '}
					{item.endDate ?
						new Date(item.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
					:	'Present'}
				</span>
				<span
					className='border-2 px-2 py-0.5 text-[10px] font-bold uppercase'
					style={{ borderColor: `${accent}4d`, backgroundColor: `${accent}0d`, color: accent }}>
					{humanize(item.type)}
				</span>
			</div>
			<p className='mb-6 line-clamp-4 text-[14px] leading-relaxed font-medium text-gray-700'>{item.description}</p>
			<div className='flex flex-wrap gap-1.5'>
				{uniqueSkills.slice(0, 10).map(s => (
					<span
						key={s.name}
						className='flex items-center gap-1 border-2 border-gray-100 bg-gray-50 px-2 py-0.5 text-[9px] font-black text-gray-400 uppercase'
						style={{ WebkitPrintColorAdjust: 'exact' }}>
						<Icon icon={s.icon} className='h-3 w-3' style={{ color: `${accent}66` }} />
						{s.name}
					</span>
				))}
			</div>
		</div>
	)
}
