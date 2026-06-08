import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	images: {
		formats: ['image/webp'],
		minimumCacheTTL: 60,
		qualities: [100]
	},
	typedRoutes: true,
	async redirects() {
		// Only single-segment detail routes are redirected. Deeper paths (e.g.
		// /issue/<slug>/banner.png) are public image assets and must NOT redirect.
		return [
			// Removed project — folded into LOOKLOOK PET
			{ source: '/projects/tencent-railway-migration', destination: '/projects', permanent: true },
			{ source: '/issue/tencent-railway-migration', destination: '/projects', permanent: true },
			{ source: '/issue', destination: '/projects', permanent: true },
			{ source: '/issue/:id', destination: '/projects/:id', permanent: true },
			{ source: '/ability', destination: '/skills', permanent: true },
			{ source: '/ability/:id', destination: '/skills/:id', permanent: true },
			{ source: '/affiliation', destination: '/experience', permanent: true },
			{ source: '/affiliation/:id', destination: '/experience/:id', permanent: true }
		]
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff'
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY'
					},
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin'
					}
				]
			}
		]
	},
	output: 'standalone'
}

export default nextConfig
