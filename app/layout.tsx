import React from 'react'
import type { Metadata } from 'next'
import { JetBrains_Mono, Noto_Sans_Thai, Rajdhani } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'
import ScanlineOverlay from '@/components/cyber/ScanlineOverlay'
import { ThemeProvider } from '@/components/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { assets } from '@/common'
import './globals.css'

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-rajdhani'
})

const jetbrains = JetBrains_Mono({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	variable: '--font-jetbrains'
})

const notoThai = Noto_Sans_Thai({
	subsets: ['thai', 'latin'],
	weight: ['300', '400', '500', '700'],
	variable: '--font-noto-thai'
})

export const metadata: Metadata = {
	metadataBase: new URL('https://nooobtimex.me'),
	title: {
		default: 'Portfolio | Wongsaphat Puangsorn',
		template: '%s | Wongsaphat Puangsorn'
	},
	authors: [{ name: 'Wongsaphat Puangsorn', url: 'https://nooobtimex.me' }],
	creator: 'Wongsaphat Puangsorn',
	publisher: 'Wongsaphat Puangsorn',
	description:
		'Portfolio | Wongsaphat Puangsorn - Specializing in modern web development, I turn ideas into seamless digital affiliations by building robust web applications using the latest skills.',
	keywords: [
		'Wongsaphat Puangsorn',
		'NooobtimeX',
		'Thammasat University',
		'Software Developer',
		'Thailand',
		'Portfolio',
		'Resume',
		'Frontend',
		'Fullstack',
		'Web Developer'
	],
	alternates: {
		canonical: '/'
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://nooobtimex.me',
		title: 'Wongsaphat Puangsorn - Portfolio',
		description:
			'Specializing in modern web development, I turn ideas into seamless digital affiliations by building robust web applications.',
		siteName: 'Wongsaphat Puangsorn Portfolio',
		images: [
			{
				url: assets.site.ogImage,
				width: 1467,
				height: 1468,
				alt: 'Wongsaphat Puangsorn Portfolio'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Wongsaphat Puangsorn - Portfolio',
		description:
			'Specializing in modern web development, I turn ideas into seamless digital affiliations by building robust web applications.',
		creator: '@NooobtimeX', // Assuming this handle based on github, can be updated
		images: [assets.site.ogImage]
	},
	icons: {
		icon: assets.site.logo,
		apple: assets.site.logo
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			'index': true,
			'follow': true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1
		}
	},
	verification: {
		google: 'KiAn5R5UAuZgmwSS_KpMOO2FIRmt-39QIKrHKXrAOL8'
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			className={cn('dark', rajdhani.variable, jetbrains.variable, notoThai.variable)}
			suppressHydrationWarning>
			<GoogleTagManager gtmId='GTM-5PVXPTWP' />
			<body className='bg-background text-foreground font-sans antialiased'>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					forcedTheme='dark'
					enableSystem={false}
					disableTransitionOnChange>
					<TooltipProvider>{children}</TooltipProvider>
				</ThemeProvider>
				{/* Global cyberpunk scanline + vignette overlay */}
				<ScanlineOverlay />
			</body>
		</html>
	)
}
