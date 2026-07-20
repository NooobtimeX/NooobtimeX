import type { PersonalData } from '@/common'

/**
 * vCard 3.0 (RFC 2426) generation.
 *
 * Why 3.0 and not 4.0: Android's AOSP vCard library and iOS's own Contacts export both
 * emit 3.0, and 4.0 import support is inconsistent across Outlook and the Chinese Android
 * skins (MIUI / HarmonyOS / ColorOS) a supplier at Yiwu is most likely to be holding.
 * 3.0 is the version that actually imports everywhere.
 */

const CRLF = '\r\n'

/** RFC 2426 §5: backslash, comma and semicolon are escaped; newlines become a literal \n. */
const esc = (value: string): string =>
	value.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n')

/** iOS honours `X-SOCIALPROFILE;type=<service>`; vCard 4's SOCIALPROFILE is not read by 3.0 parsers. */
const SOCIAL_TYPE: Record<string, string> = {
	github: 'github',
	linkedin: 'linkedin',
	instagram: 'instagram',
	youtube: 'youtube'
}

export interface VCardOptions {
	/**
	 * Include social profiles and the bio note. Leave off for a QR payload — every extra
	 * property pushes the symbol to a higher version, and a denser code is harder to scan
	 * off a phone screen held at arm's length.
	 */
	rich?: boolean
	/** Organisation line, when the caller has one to pass. */
	org?: string
}

/** Digits-and-plus only — `tel:` URIs and display forms both normalise to this. */
const normalisePhone = (raw: string): string => raw.replace(/^tel:/, '').replace(/[^\d+]/g, '')

const findPhone = (p: PersonalData): string | undefined => {
	const channel = p.contactChannels?.find(c => c.id === 'phone' || c.id === 'whatsapp')
	const raw = channel?.url ?? channel?.value
	if (!raw) return undefined
	const normalised = normalisePhone(raw)
	return normalised.length > 3 ? normalised : undefined
}

const websiteUrl = (p: PersonalData): string =>
	p.socialLinks.find(s => s.platform === 'website')?.url ?? 'https://nooobtimex.me'

/**
 * Build a vCard 3.0 payload. Returns a CRLF-delimited string ready to write to a `.vcf`
 * blob or encode into a QR.
 */
export function buildVCard(p: PersonalData, options: VCardOptions = {}): string {
	const { rich = false, org } = options

	const given = p.contact.givenName ?? p.name.split(' ')[0] ?? p.name
	const family = p.contact.familyName ?? p.name.split(' ').slice(1).join(' ')
	const fullName = [given, family].filter(Boolean).join(' ')
	const phone = findPhone(p)

	const lines: string[] = ['BEGIN:VCARD', 'VERSION:3.0']

	// FN, N and VERSION are the three MUST properties in RFC 2426.
	lines.push(`N:${esc(family)};${esc(given)};;;`)
	lines.push(`FN:${esc(fullName)}`)
	lines.push(`TITLE:${esc(p.title)}`)
	if (org) lines.push(`ORG:${esc(org)}`)

	lines.push(`EMAIL;TYPE=INTERNET,PREF:${esc(p.contact.email)}`)
	if (phone) lines.push(`TEL;TYPE=CELL,VOICE:${esc(phone)}`)
	lines.push(`URL:${esc(websiteUrl(p))}`)

	// ADR has seven components: PO box; extended; street; locality; region; postcode; country.
	// City and country only — never a street address on a public page.
	if (p.contact.locality || p.contact.country) {
		lines.push(`ADR;TYPE=WORK:;;;${esc(p.contact.locality ?? '')};;;${esc(p.contact.country ?? '')}`)
	}

	if (rich) {
		for (const social of p.socialLinks) {
			const type = SOCIAL_TYPE[social.platform]
			if (type) lines.push(`X-SOCIALPROFILE;type=${type}:${esc(social.url)}`)
		}
		for (const channel of p.contactChannels ?? []) {
			if (channel.id === 'wechat' && channel.value) lines.push(`X-SOCIALPROFILE;type=wechat:${esc(channel.value)}`)
			if (channel.id === 'line' && channel.value) lines.push(`X-SOCIALPROFILE;type=line:${esc(channel.value)}`)
		}
		lines.push(`NOTE:${esc(p.tagline)}`)
	}

	lines.push('END:VCARD')

	return lines.join(CRLF) + CRLF
}

/** Filename for the downloadable card, e.g. 'wongsaphat-puangsorn.vcf'. */
export function vCardFilename(p: PersonalData): string {
	const given = p.contact.givenName ?? ''
	const family = p.contact.familyName ?? ''
	const base = [given, family].filter(Boolean).join('-').toLowerCase() || 'contact'
	return `${base}.vcf`
}
