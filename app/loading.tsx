export default function Loading() {
	return (
		<div className='bg-background fixed inset-0 z-50 flex flex-col items-center justify-center'>
			<div className='cyber-grid pointer-events-none absolute inset-0 opacity-20' />
			<div className='relative flex items-center justify-center'>
				<div className='border-cyber-cyan/20 border-t-cyber-cyan size-20 animate-spin rounded-full border-4' />
				<span className='bg-cyber-yellow absolute size-3' />
			</div>
			<p className='neon-text-cyan mt-8 animate-pulse font-mono text-sm tracking-[0.4em] uppercase'>Loading…</p>
		</div>
	)
}
