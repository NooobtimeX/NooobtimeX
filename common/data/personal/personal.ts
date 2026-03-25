import { FaFacebook, FaGithub } from 'react-icons/fa'
import { SocialPlatform } from '@/common/enum'
import type { PersonalData } from '@/common/interface'

export const personalData: PersonalData = {
	name: 'WONGSAPHAT PUANGSORN',
	title: 'Software Developer',
	tagline:
		'Forward-thinking Software Developer specializing in modern JavaScript/TypeScript ecosystems and high-performance system design.',
	avatar: '/profile/NooobtimeX.webp',
	about: {
		bio: 'Passionate about transitioning complex business requirements into scalable, zero-maintenance architectures. Seeking a role to take ownership of modern infrastructure, drive technical strategy, and grow toward a Senior/Technical Architect position within a results-driven engineering culture.',
		highlights: [
			'Modern JavaScript/TypeScript ecosystems expert',
			'High-performance system design specialist',
			'Scalable, zero-maintenance architecture focus',
			'Strategic technical strategy and leadership'
		]
	},
	contact: {
		email: 'nooobtimex@gmail.com',
		location: 'Pak Kret District, Nonthaburi',
		availability: 'Available for Senior/Technical Architect and Software Developer roles'
	},
	socialLinks: [
		{
			platform: SocialPlatform.GitHub,
			url: 'https://github.com/NooobtimeX',
			icon: FaGithub,
			username: 'NooobtimeX'
		},
		{
			platform: SocialPlatform.Website,
			url: 'https://nooobtimex.me',
			icon: FaFacebook,
			username: 'nooobtimex.me'
		}
	]
}
