'use client'

import React from 'react'
import { type HTMLMotionProps, motion } from 'framer-motion'

interface MotionRevealProps extends HTMLMotionProps<'div'> {
	delay?: number
	y?: number
}

/**
 * Scroll-triggered reveal (fade + rise). Replaces the old ComicPop.
 */
const MotionReveal: React.FC<MotionRevealProps> = ({ delay = 0, y = 14, children, ...props }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-60px' }}
			transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
			{...props}>
			{children}
		</motion.div>
	)
}

export default MotionReveal
