'use client'

import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { QRCodeSVG } from 'qrcode.react'
import { formatExperienceDuration } from '@/lib/utils'
import {
	type Skill,
	type SkillCategory,
	categoryMetadata,
	educationData,
	entitiesData,
	experiencesData,
	featuredProjects,
	featuredSkills,
	latestRole,
	personalData,
	projectsData,
	workExperienceData
} from '@/common'

const ACCENT = '#FF003C'

const website = personalData.socialLinks.find(s => s.platform === 'website')
const websiteLabel = website?.username ?? 'nooobtimex.me'
const websiteUrl = website?.url ?? 'https://nooobtimex.me'

const humanize = (value: string) =>
	value
		.split('-')
		.map(w => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ')

const stripProtocol = (url: string) => url.replace(/^https?:\/\//, '').replace(/\/+$/, '')

const CvMeta: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
	<div className='border-l-2 pl-2' style={{ borderColor: ACCENT, WebkitPrintColorAdjust: 'exact' }}>
		<p className='text-[8px] font-black tracking-[0.2em] text-gray-400 uppercase'>{label}</p>
		<p className='text-[11px] font-black text-black uppercase'>{children}</p>
	</div>
)

export default function CVPage() {
	const handlePrint = () => window.print()

	// Work-only experience, paginated (max 3 per page)
	const page2Experience = workExperienceData.slice(0, 3)
	const page3Experience = workExperienceData.slice(3)

	const getCompanyName = (roleIds?: readonly string[]) => {
		const primary = roleIds?.[0]
		if (!primary) return null
		return experiencesData.find(e => e.id === primary)?.organization.name ?? null
	}

	// Client = explicit client org if set (e.g. MONOMax), else the delivering role's organization.
	const getClientName = (project: (typeof featuredProjects)[number]) => {
		if (project.clientOrganizationId) {
			return entitiesData.find(e => e.id === project.clientOrganizationId)?.name ?? null
		}
		return getCompanyName(project.linkedExperienceIds)
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

			{/* Floating controls — always reachable while scrolling the CV pages */}
			<div className='fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-3 sm:right-6 sm:bottom-6 sm:left-auto sm:translate-x-0 print:hidden'>
				<button
					onClick={handlePrint}
					title='Print or Save as PDF (A4)'
					style={{ backgroundColor: ACCENT }}
					className='flex items-center gap-2 px-5 py-3.5 text-sm font-bold tracking-tight text-white uppercase shadow-xl ring-1 shadow-black/40 ring-black/10 transition-transform active:scale-95 sm:px-6 sm:text-base'>
					<Icon icon='material-symbols:download' className='h-5 w-5' />
					Download PDF
				</button>
				<Link
					href='/cv/presentation'
					title='Open presentation mode'
					className='flex items-center gap-2 border-2 border-zinc-700 bg-zinc-950 px-5 py-3.5 text-sm font-bold tracking-tight text-white uppercase shadow-xl shadow-black/40 transition-colors hover:bg-zinc-900 sm:px-6 sm:text-base'>
					<Icon icon='material-symbols:slideshow' className='h-5 w-5' style={{ color: ACCENT }} />
					Presentation
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
								{humanize(latestRole.position)}
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
									{websiteLabel}
								</div>
							</div>
						</div>
						<div className='flex flex-col items-center gap-2'>
							<QRCodeSVG value={websiteUrl} size={80} fgColor={ACCENT} />
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
								<div className='space-y-5'>
									{educationData.map(edu => (
										<div key={edu.id} className='relative pl-5' style={{ WebkitPrintColorAdjust: 'exact' }}>
											<span
												className='absolute top-1.5 left-0 h-[calc(100%-6px)] w-1.5'
												style={{ backgroundColor: ACCENT }}
											/>
											<h3 className='text-lg font-black text-black uppercase'>
												{edu.credential ?? humanize(edu.position)}
											</h3>
											<p className='text-sm font-bold text-gray-500 uppercase'>{edu.organization.name}</p>
											<p
												className='mt-0.5 text-xs font-black uppercase opacity-80'
												style={{ color: ACCENT, WebkitPrintColorAdjust: 'exact' }}>
												{new Date(edu.startDate).getFullYear()} –{' '}
												{edu.endDate ? new Date(edu.endDate).getFullYear() : 'Present'}
											</p>
										</div>
									))}
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
									Languages
								</h2>
								<ul className='space-y-2'>
									{personalData.languages.map(l => (
										<li
											key={l.code}
											className='flex items-center justify-between gap-2 text-[11px] font-black uppercase'>
											<span className='text-black'>{l.name}</span>
											<span className='text-gray-500'>{l.level}</span>
										</li>
									))}
								</ul>
							</section>

							<section>
								<h2
									className='mb-4 text-xs font-black tracking-[0.2em] uppercase'
									style={{ color: ACCENT, WebkitPrintColorAdjust: 'exact' }}>
									Availability
								</h2>
								<p className='text-[11px] leading-snug font-bold text-gray-700 uppercase'>
									{personalData.contact.availability}
								</p>
							</section>

							<section>
								<h2
									className='mb-4 text-xs font-black tracking-[0.2em] uppercase'
									style={{ color: ACCENT, WebkitPrintColorAdjust: 'exact' }}>
									Contact
								</h2>
								<div className='space-y-3'>
									{personalData.socialLinks.map(s => (
										<div
											key={s.platform}
											className='flex items-center gap-3 text-[11px] font-black tracking-tight uppercase'>
											<Icon icon={s.icon} className='h-5 w-5 shrink-0' style={{ color: ACCENT }} />
											<span className='truncate'>{s.username}</span>
										</div>
									))}
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

				{/* PAGES 4–6 — one full page per flagship project */}
				{featuredProjects.map((project, i) => {
					const client = getClientName(project)
					const via =
						project.viaOrganizationId ?
							(entitiesData.find(e => e.id === project.viaOrganizationId)?.name ?? null)
						:	null
					const roles = (project.linkedExperienceIds ?? [])
						.map(id => experiencesData.find(e => e.id === id))
						.filter((r): r is (typeof experiencesData)[number] => Boolean(r))
					const status = project.endDate ? 'Completed' : 'Ongoing'
					return (
						<div
							key={project.id}
							id={`cv-page-${4 + i}`}
							className='cv-page-container mx-auto mb-10 flex h-[297mm] w-[210mm] flex-col overflow-hidden border border-black/5 bg-white p-[14mm] shadow-lg last:mb-0 print:mb-0 print:border-0 print:shadow-none'>
							{/* Banner + title */}
							<div className='relative mb-5 aspect-[16/6] w-full shrink-0 overflow-hidden border border-gray-100'>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src={project.images.banner} alt={project.title} className='h-full w-full object-cover' />
								<div className='absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent' />
								<div className='absolute bottom-0 left-0 p-5'>
									<p className='font-mono text-[9px] font-black tracking-[0.3em] text-white/70 uppercase'>
										// Gig Dossier
									</p>
									<h2 className='text-3xl leading-none font-black tracking-tight text-white uppercase'>
										{project.title}
									</h2>
								</div>
							</div>

							{project.resumeSummary && (
								<p className='mb-4 text-[13px] leading-snug font-bold text-gray-700'>{project.resumeSummary}</p>
							)}

							{/* Meta strip */}
							<div
								className='mb-5 flex flex-wrap gap-x-6 gap-y-3 border-y-2 py-3'
								style={{ borderColor: `${ACCENT}1a`, WebkitPrintColorAdjust: 'exact' }}>
								<CvMeta label='Client'>{client ?? 'Independent'}</CvMeta>
								{via && <CvMeta label='Seconded To'>{via}</CvMeta>}
								<CvMeta label='Timeline'>{formatExperienceDuration(project.startDate, project.endDate)}</CvMeta>
								<CvMeta label='Status'>{status}</CvMeta>
								{project.links.live && <CvMeta label='Live'>{stripProtocol(project.links.live)}</CvMeta>}
							</div>

							{/* Brief */}
							<section className='mb-5'>
								<h3
									className='mb-2 text-xs font-black tracking-[0.2em] uppercase'
									style={{ color: ACCENT, WebkitPrintColorAdjust: 'exact' }}>
									Brief
								</h3>
								<p className='text-[13px] leading-relaxed font-medium text-gray-700'>{project.description}</p>
							</section>

							{/* Role(s) */}
							{roles.length > 0 && (
								<section className='mb-5'>
									<h3
										className='mb-2 text-xs font-black tracking-[0.2em] uppercase'
										style={{ color: ACCENT, WebkitPrintColorAdjust: 'exact' }}>
										{roles.length > 1 ? 'Roles' : 'Role'}
									</h3>
									<div className='space-y-1'>
										{roles.map(r => (
											<p key={r.id} className='text-[12px] font-black text-black uppercase'>
												{humanize(r.position)}
												<span className='font-bold text-gray-500'>
													{' · '}
													{r.organization.name} · {formatExperienceDuration(r.startDate, r.endDate)}
												</span>
											</p>
										))}
									</div>
								</section>
							)}

							{/* Tech stack — all */}
							<section className='mt-auto'>
								<h3
									className='mb-3 text-xs font-black tracking-[0.2em] uppercase'
									style={{ color: ACCENT, WebkitPrintColorAdjust: 'exact' }}>
									Tech Stack
								</h3>
								<div className='flex flex-wrap gap-1.5'>
									{[...project.activeSkills].sort(sortSkills).map(s => (
										<span
											key={s.name}
											className='flex items-center gap-1 rounded border px-2 py-0.5 text-[9px] font-black uppercase'
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
									{[...project.retiredSkills].sort(sortSkills).map(s => (
										<span
											key={s.name}
											className='flex items-center gap-1 rounded border px-2 py-0.5 text-[9px] font-black text-gray-400 uppercase line-through'
											style={{
												borderColor: '#e5e7eb',
												backgroundColor: '#f9fafb',
												WebkitPrintColorAdjust: 'exact'
											}}>
											<Icon icon={s.icon} className='h-2.5 w-2.5 opacity-40' />
											{s.name}
										</span>
									))}
								</div>
							</section>
						</div>
					)
				})}
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
	const projectSkills = projectsData.filter(p => p.linkedExperienceIds?.includes(item.id)).flatMap(p => p.activeSkills)
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
