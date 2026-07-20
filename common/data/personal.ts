import type { ContactChannel, PersonalData } from '../interfaces'
import { assets } from './assets'

/**
 * Direct messaging channels for /contact. Ordered most-useful-first for a trade-fair
 * exchange: WeChat leads because it is the only one that works inside mainland China.
 *
 * TO ADD THE REMAINING CHANNELS: uncomment the block below and fill in the real values.
 * Nothing renders while an entry is absent, so the page stays correct until then.
 *
 *   {
 *   	id: 'phone',
 *   	label: 'Phone',
 *   	icon: 'mdi:phone',
 *   	value: '+66 XX XXX XXXX',      // display form
 *   	url: 'tel:+66XXXXXXXXX',       // E.164, no spaces
 *   	inChina: true
 *   },
 *   {
 *   	id: 'whatsapp',
 *   	label: 'WhatsApp',
 *   	icon: 'simple-icons:whatsapp',
 *   	value: '+66 XX XXX XXXX',
 *   	url: 'https://wa.me/66XXXXXXXXX',  // digits only — no '+', no leading zero
 *   	inChina: false
 *   },
 *   {
 *   	id: 'line',
 *   	label: 'LINE',
 *   	icon: 'simple-icons:line',
 *   	value: '<your-line-id>',
 *   	// LINE documents links for Official Accounts only. This personal form is widely
 *   	// used but undocumented — treat it as best-effort; the copyable ID is the real path.
 *   	url: 'https://line.me/ti/p/~<your-line-id>',
 *   	inChina: false
 *   },
 */
const contactChannels: ContactChannel[] = [
	{
		id: 'wechat',
		label: 'WeChat',
		icon: 'simple-icons:wechat',
		// TODO: replace with the real WeChat ID (Me → tap your name → WeChat ID).
		// This is the fallback path when the QR token below stops working.
		value: '',
		// Decoded from the owner's personal "add me as friend" QR.
		// OPAQUE BYTE SEQUENCE — do not normalise, trim, or drop the '?s=2'. Any edit
		// silently produces a QR that encodes a different string and stops working.
		// No expiry timer, but tapping "Reset QR Code" in WeChat kills it with no error
		// surface: a dead token just redirects to wechat.com. Update `verifiedOn` on re-check.
		qr: 'https://u.wechat.com/kBBUbWG51gDXWUlnBQ_BdfY?s=2',
		verifiedOn: '2026-07-20',
		inChina: true,
		note: 'Scan in WeChat — the only channel that works inside mainland China'
	}
]

export const personalData: PersonalData = {
	name: 'WONGSAPHAT PUANGSORN',
	title: 'Software Developer',
	tagline:
		'Forward-thinking Software Developer specializing in modern JavaScript/TypeScript ecosystems and high-performance system design.',
	avatar: assets.personal.avatar,
	birthDate: '2003-04-19',
	about: {
		bio: 'Enthusiastic and dedicated developer focused on transforming business requirements into clean, sustainable code. I am passionate about mastering modern infrastructure and am seeking a collaborative engineering culture where I can contribute to high-performance systems while learning from senior mentors.',
		highlights: [
			'Eager to master modern JavaScript/TypeScript ecosystems',
			'Focused on building robust, high-performance systems',
			'Committed to clean and sustainable architecture principles',
			'Passionate about technical growth and collaborative learning'
		]
	},
	contact: {
		email: 'nooobtimex@gmail.com',
		location: 'Pak Kret District, Nonthaburi',
		availability: 'Available for Software Developer roles with a focus on growth and modern infrastructure',
		locality: 'Pak Kret, Nonthaburi',
		country: 'Thailand',
		givenName: 'Wongsaphat',
		familyName: 'Puangsorn'
	},
	languages: [
		{ name: 'Thai', level: 'Native', code: 'th', icon: 'circle-flags:th' },
		{ name: 'English', level: 'Professional working', code: 'en', icon: 'circle-flags:uk' }
	],
	socialLinks: [
		{
			platform: 'github',
			url: 'https://github.com/NooobtimeX',
			icon: 'simple-icons:github',
			username: 'NooobtimeX'
		},
		{
			platform: 'linkedin',
			url: 'https://www.linkedin.com/in/nooobtimex',
			icon: 'simple-icons:linkedin',
			username: 'nooobtimex'
		},
		{
			platform: 'youtube',
			url: 'https://www.youtube.com/@nooobtimex',
			icon: 'simple-icons:youtube',
			username: '@nooobtimex'
		},
		{
			platform: 'instagram',
			url: 'https://www.instagram.com/nooobtimex',
			icon: 'simple-icons:instagram',
			username: 'nooobtimex'
		},
		{
			platform: 'email',
			url: 'mailto:nooobtimex@gmail.com',
			icon: 'simple-icons:gmail',
			username: 'nooobtimex@gmail.com'
		},
		{
			platform: 'website',
			url: 'https://nooobtimex.me',
			icon: 'mdi:web',
			username: 'nooobtimex.me'
		}
	],
	contactChannels
}
