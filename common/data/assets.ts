/**
 * Centralized asset map — the single place to edit any static image path.
 * Referenced by the data layer and app metadata.
 */
export const assets = {
	site: {
		ogImage: '/og-image.jpg',
		favicon: '/favicon.ico',
		appleTouch: '/apple-touch-icon.png',
		logo: '/logo/logo.jpg'
	},
	personal: {
		avatar: '/logo/logo.jpg'
	},
	logos: {
		rsTrophy: '/logo/RSTROPHY.png',
		jasmineTech: '/logo/JTS.png',
		blitzwerk: '/logo/blitzwerk.png',
		nooobtimex: '/logo/logo.jpg',
		qrFood: '/logo/qr-food.png',
		tuLogo: '/logo/tu-logo.jpg'
	},
	projects: {
		rsTrophy: { banner: '/issue/rs-trophy/banner.png' },
		rsTrophyV1: { banner: '/issue/rs-trophy-v1/banner.png' },
		looklookPet: { banner: '/issue/looklook-pet/banner.webp' },
		onlinePokerGame: {
			banner: '/issue/online-poker-game/banner.png',
			gallery: [
				'/issue/online-poker-game/banner.png',
				'/issue/online-poker-game/1.png',
				'/issue/online-poker-game/2.png'
			]
		},
		prettierConfig: { banner: '/issue/prettier-config/banner.png' },
		rsMedal: { banner: '/issue/rs-medal/banner.png' },
		rsAward: { banner: '/issue/rs-award/banner.png' },
		qrFood: { banner: '/issue/qr-food/banner.png' },
		portfolio: { banner: '/issue/portfolio/banner.png' }
	}
} as const
