'use client'

import React from 'react'
import { type HTMLMotionProps, motion } from 'framer-motion'

interface MotionRevealProps extends HTMLMotionProps<'div'> {
	delay?: number
	y?: number
}

/**
 * Scroll-triggered reveal (fade + rise). Replaces the old ComicPop.
 *
 * Emits `data-reveal` so `globals.css` can force the finished state without importing
 * anything from framer-motion. Two cases need that, and both are stylesheet-only:
 *   - `@media (scripting: none)` — this renders at `opacity: 0` and only becomes
 *     visible once framer-motion runs an IntersectionObserver. With scripting
 *     unavailable (or simply broken) the page is a blank grid.
 *   - `@media (prefers-reduced-motion: reduce)` — the reveal is motion the user asked
 *     not to see.
 * A stylesheet rule beats framer-motion's inline style, which is why `!important`
 * there is load-bearing rather than lazy.
 */
const MotionReveal: React.FC<MotionRevealProps> = ({ delay = 0, y = 14, children, ...props }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-60px' }}
			transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
			data-reveal=''
			{...props}>
			{children}
		</motion.div>
	)
}

export default MotionReveal
