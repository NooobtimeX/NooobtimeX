'use client'

import React from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { cn } from '@/lib/utils'

/**
 * The one QR renderer on the site. Polarity and quiet zone are decided here and nowhere
 * else, so a scanning problem is a one-line fix.
 *
 * ⚠️ INVERTED (cyan-on-black) is the chosen look, taken against the research finding that
 * WeChat's own detector (`wechat_qrcode`, CNN-based) has an open, unfixed failure on
 * inverted codes — polarity, not contrast, is what defeats it. WeChat's in-app scanner is
 * the one that matters at a Chinese trade fair.
 *
 * IF A REAL PHONE REFUSES TO SCAN: set INVERTED to false. That is the entire fix — it
 * restores a spec-compliant dark-on-light code and nothing else changes.
 */
const INVERTED = true

const FG = INVERTED ? '#00F0FF' : '#050507'
const BG = INVERTED ? '#050507' : '#E6FBFF'

interface CyberQRProps {
	/** Encoded verbatim. Never normalise or trim — see the WeChat payload note in the data layer. */
	value: string
	/** Accessible name, e.g. 'WeChat QR — scan in WeChat to add Wongsaphat Puangsorn'. */
	title: string
	size?: number
	className?: string
}

const CyberQR: React.FC<CyberQRProps> = ({ value, title, size = 200, className }) => {
	return (
		// The QR needs its own unclipped, unbracketed plate: `clip-notch` and `hud-corners`
		// cut exactly the corners the finder patterns live in. Put decoration on a wrapper
		// outside this padding, never on the code itself.
		<div className={cn('inline-block p-4', className)} style={{ backgroundColor: BG }}>
			<QRCodeSVG
				value={value}
				size={size}
				level='M'
				fgColor={FG}
				bgColor={BG}
				// qrcode.react v4 defaults marginSize to 0. ISO/IEC 18004 §6.3.8 mandates a
				// 4-module quiet zone — without it many scanners will not lock on at all.
				marginSize={4}
				title={title}
			/>
		</div>
	)
}

export default CyberQR
