/**
 * Centralized Asset Management
 * All static image paths should be defined here to prevent typos and facilitate maintenance.
 */

export const assets = {
	personal: {
		avatar: '/logo/logo.jpg',
		ogImage: '/og-image.jpg',
		favicon: '/favicon.ico',
		logo: '/logo/logo.jpg',
		appleTouch: '/apple-touch-icon.png'
	},
	logos: {
		rsTrophy: '/logo/RSTROPHY.png',
		jasmineTech: '/logo/JTS.png',
		blitzwerk: '/logo/blitzwerk.png',
		nooobtimex: '/logo/logo.jpg',
		qrFood: '/logo/qr-food.png',
		tuLogo: '/logo/tu-logo.jpg'
	},
	issues: {
		rsTrophy: {
			banner: '/issue/rs-trophy/banner.png'
		},
		rsTrophyV1: {
			banner: '/issue/rs-trophy-v1/banner.png'
		},
		tencentRailwayMigration: {
			banner: '/issue/tencent-railway-migration/banner.png'
		},
		looklookPet: {
			banner: '/issue/looklook-pet/banner.webp'
		},
		onlinePokerGame: {
			banner: '/issue/online-poker-game/banner.png',
			gallery: [
				'/issue/online-poker-game/banner.png',
				'/issue/online-poker-game/1.png',
				'/issue/online-poker-game/2.png'
			]
		},
		prettierConfig: {
			banner: '/issue/prettier-config/banner.png'
		},
		rsMedal: {
			banner: '/issue/rs-medal/banner.png'
		},
		rsAward: {
			banner: '/issue/rs-award/banner.png'
		},
		qrFood: {
			banner: '/issue/qr-food/banner.png'
		},
		portfolio: {
			banner: '/issue/portfolio/banner.png'
		}
	}
} as const
