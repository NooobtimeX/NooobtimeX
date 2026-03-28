export const slideVariants = {
	enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
	center: { x: 0, opacity: 1 },
	exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 })
}

export const actVariants = {
	enter: { opacity: 0, scale: 0.9 },
	center: { opacity: 1, scale: 1 },
	exit: { opacity: 0, scale: 1.1 }
}

export const swipeThreshold = 50
export const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity
}
