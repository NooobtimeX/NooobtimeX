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
		availability: 'Available for Software Developer roles with a focus on growth and modern infrastructure'
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
