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
		return [
			{ source: '/issue', destination: '/projects', permanent: true },
			{ source: '/issue/:path*', destination: '/projects/:path*', permanent: true },
			{ source: '/ability', destination: '/skills', permanent: true },
			{ source: '/ability/:path*', destination: '/skills/:path*', permanent: true },
			{ source: '/affiliation', destination: '/experience', permanent: true },
			{ source: '/affiliation/:path*', destination: '/experience/:path*', permanent: true }
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
