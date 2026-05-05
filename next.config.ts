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
