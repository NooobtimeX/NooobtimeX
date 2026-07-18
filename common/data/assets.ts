/**
 * Centralized asset map — the single place to edit any static image path.
 * Referenced by the data layer and app metadata. All images are WebP; icons
 * and the social card are served from the brand logo via Next.js metadata.
 */
export const assets = {
	site: {
		ogImage: '/logo/logo.webp',
		logo: '/logo/logo.webp'
	},
	personal: {
		avatar: '/logo/logo.webp'
	},
	logos: {
		rsTrophy: '/logo/RSTROPHY.webp',
		jasmineTech: '/logo/JTS.webp',
		blitzwerk: '/logo/blitzwerk.webp',
		nooobtimex: '/logo/logo.webp',
		tuLogo: '/logo/tu-logo.webp'
	},
	projects: {
		rsTrophy: { banner: '/issue/rs-trophy/banner.webp' },
		looklookPet: {
			banner: '/issue/looklook-pet/banner.webp',
			gallery: [
				'/issue/looklook-pet/banner.webp',
				'/issue/looklook-pet/photo-1.webp',
				'/issue/looklook-pet/photo-2.webp',
				'/issue/looklook-pet/photo-3.webp',
				'/issue/looklook-pet/photo-4.webp',
				'/issue/looklook-pet/photo-5.webp',
				'/issue/looklook-pet/photo-6.webp',
				'/issue/looklook-pet/photo-7.webp',
				'/issue/looklook-pet/photo-8.webp'
			]
		},
		onlinePokerGame: {
			banner: '/issue/online-poker-game/banner.webp',
			gallery: [
				'/issue/online-poker-game/banner.webp',
				'/issue/online-poker-game/photo-1.webp',
				'/issue/online-poker-game/photo-2.webp'
			]
		},
		prettierConfig: { banner: '/issue/prettier-config/banner.webp' },
		rsMedal: { banner: '/issue/rs-medal/banner.webp' },
		rsAward: { banner: '/issue/rs-award/banner.webp' },
		portfolio: { banner: '/logo/logo.webp' },
		monomaxEplPortal: { banner: '/issue/monomax-epl-portal/banner.webp' },
		qrFood: { banner: '/issue/qr-food/banner.webp' }
	}
} as const
