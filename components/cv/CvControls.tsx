'use client'

import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

/**
 * The floating print / presentation controls.
 *
 * Split out so `app/cv/page.tsx` can be a server component. That page was `'use client'`
 * solely for `window.print()` on the button below — which meant the site's richest page
 * (~1,400 words) shipped entirely as client JS and rendered none of its icons into the
 * HTML. Everything else there is static markup.
 *
 * Still `@iconify/react` rather than CyberIcon: this is a client component, and
 * CyberIcon would pull `lib/og-icons.generated.json` (~146 KB) across the boundary.
 */
const CvControls: React.FC<{ accent: string }> = ({ accent }) => (
	<div className='fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-3 sm:right-6 sm:bottom-6 sm:left-auto sm:translate-x-0 print:hidden'>
		<button
			onClick={() => window.print()}
			title='Print or Save as PDF (A4)'
			style={{ backgroundColor: accent }}
			className='flex items-center gap-2 px-5 py-3.5 text-sm font-bold tracking-tight text-white uppercase shadow-xl ring-1 shadow-black/40 ring-black/10 transition-transform active:scale-95 sm:px-6 sm:text-base'>
			<Icon icon='material-symbols:download' className='h-5 w-5' />
			Download PDF
		</button>
		<Link
			href='/cv/presentation'
			title='Open presentation mode'
			className='flex items-center gap-2 border-2 border-zinc-700 bg-zinc-950 px-5 py-3.5 text-sm font-bold tracking-tight text-white uppercase shadow-xl shadow-black/40 transition-colors hover:bg-zinc-900 sm:px-6 sm:text-base'>
			<Icon icon='material-symbols:slideshow' className='h-5 w-5' style={{ color: accent }} />
			Presentation
		</Link>
	</div>
)

export default CvControls
