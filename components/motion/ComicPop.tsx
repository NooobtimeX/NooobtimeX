'use client'

import React from 'react'
import { HTMLMotionProps, motion } from 'framer-motion'

interface ComicPopProps extends HTMLMotionProps<'div'> {
	children: React.ReactNode
	delay?: number
	className?: string
	triggerOnce?: boolean
}

const ComicPop: React.FC<ComicPopProps> = ({ children, delay = 0, className = '', triggerOnce = true, ...props }) => {
	return (
		<motion.div
			initial={{ scale: 0.8, opacity: 0 }}
			whileInView={{ scale: 1, opacity: 1 }}
			viewport={{ once: triggerOnce }}
			transition={{
				type: 'spring',
				stiffness: 260,
				damping: 20,
				delay: delay
			}}
			className={className}
			{...props}>
			{children}
		</motion.div>
	)
}

export default ComicPop
