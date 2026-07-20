'use client'

import React from 'react'
import { Icon } from '@iconify/react'
import CyberQR from '@/components/contact/CyberQR'
import CyberButton from '@/components/cyber/CyberButton'
import NeonPanel from '@/components/cyber/NeonPanel'
import { buildVCard, vCardFilename } from '@/lib/vcard'
import { latestRole, personalData } from '@/common'

/**
 * The business-card panel: scan the QR to be offered "Add contact", or download the .vcf.
 *
 * The QR carries a LEAN vCard (no socials, no note) — every extra property pushes the
 * symbol to a higher version, and a denser code is measurably harder to scan off a phone
 * screen. The downloadable file is the rich one.
 */
const VCardPanel: React.FC = () => {
	const org = latestRole?.organization.name
	// The QR omits ORG on purpose: every property pushes the symbol to a higher version,
	// and module density is the binding constraint when one phone scans another's screen.
	const qrPayload = buildVCard(personalData)
	const filePayload = buildVCard(personalData, { rich: true, org })

	const handleDownload = () => {
		const blob = new Blob([filePayload], { type: 'text/vcard;charset=utf-8' })
		const url = URL.createObjectURL(blob)
		const anchor = document.createElement('a')
		anchor.href = url
		anchor.download = vCardFilename(personalData)
		document.body.appendChild(anchor)
		anchor.click()
		anchor.remove()
		// Do NOT revoke synchronously — iOS Safari has been observed writing a 0-byte file
		// when the object URL disappears before the download is handed off.
		setTimeout(() => URL.revokeObjectURL(url), 10_000)
	}

	return (
		<NeonPanel corners className='flex flex-col items-center gap-5 p-6 text-center'>
			<div>
				<h3 className='font-display text-2xl font-bold tracking-wide'>Digital Business Card</h3>
				<p className='text-muted-foreground mt-1 text-sm'>
					Scan to save me as a contact — name, title, email and site, prefilled.
				</p>
			</div>

			{/* Larger than the WeChat code because a vCard needs far more modules. 248px is
			    the widest that still fits a 375px viewport once Container, panel and plate
			    padding are subtracted. */}
			<CyberQR value={qrPayload} title={`Contact card QR for ${personalData.name}`} size={248} />

			<CyberButton variant='outline' size='lg' onClick={handleDownload}>
				<Icon icon='mdi:download' />
				Download .vcf
			</CyberButton>
		</NeonPanel>
	)
}

export default VCardPanel
