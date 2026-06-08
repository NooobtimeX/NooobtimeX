import React from 'react'

/**
 * Global fixed overlay: CRT scanlines + corner vignette.
 * Purely decorative, non-interactive, hidden in print.
 */
const ScanlineOverlay: React.FC = () => {
	return (
		<div aria-hidden className='pointer-events-none fixed inset-0 z-[100] print:hidden'>
			<div className='scanlines absolute inset-0 opacity-50' />
			<div
				className='absolute inset-0'
				style={{
					background: 'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)'
				}}
			/>
		</div>
	)
}

export default ScanlineOverlay
