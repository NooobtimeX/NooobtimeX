'use client'

import { ReactNode } from 'react'
import ComicPop from '@/components/motion/ComicPop'

interface SectionTransitionProps {
	children: ReactNode
}

const SectionTransition = ({ children }: SectionTransitionProps) => {
	return <ComicPop triggerOnce={false}>{children}</ComicPop>
}

export default SectionTransition
