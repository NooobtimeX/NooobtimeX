/**
 * Centralized asset map — the single place to edit any static image path.
 * Referenced by the data layer and app metadata. Photos are WebP; favicon /
 * apple-touch / og-image stay in legacy formats for icon & social compatibility.
 */
export const assets = {
	site: {
		ogImage: '/og-image.jpg',
		favicon: '/favicon.ico',
		appleTouch: '/apple-touch-icon.png',
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
		qrFood: '/logo/qr-food.webp',
		tuLogo: '/logo/tu-logo.webp'
	},
	projects: {
		rsTrophy: { banner: '/issue/rs-trophy/banner.webp' },
		rsTrophyV1: { banner: '/issue/rs-trophy-v1/banner.webp' },
		looklookPet: { banner: '/issue/looklook-pet/banner.webp' },
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
		qrFood: { banner: '/issue/qr-food/banner.webp' },
		portfolio: { banner: '/issue/portfolio/banner.webp' },
		monomaxEplPortal: { banner: '/issue/monomax-epl-portal/banner.webp' }
	}
} as const
