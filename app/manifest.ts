import type { MetadataRoute } from 'next'
import { assets, personalData } from '@/common'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: `${personalData.name} — Portfolio`,
		short_name: 'NooobtimeX',
		description: personalData.tagline,
		start_url: '/',
		display: 'standalone',
		background_color: '#0a0a0a',
		theme_color: '#FCEE0A',
		icons: [
			{
				src: assets.site.logo,
				sizes: '512x512',
				type: 'image/webp',
				purpose: 'any'
			}
		]
	}
}
