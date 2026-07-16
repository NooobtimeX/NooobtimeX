import type { PersonalData } from '../interfaces'
import { assets } from './assets'

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
		availability: 'Available for Software Developer roles with a focus on growth and modern infrastructure'
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
	]
}
