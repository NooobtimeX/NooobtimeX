'use client'

export default function Loading() {
	return (
		<div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-black'>
			{/* Halftone Overlay */}
			<div className='comic-halftone pointer-events-none absolute inset-0 opacity-20'></div>

			<div className='relative'>
				{/* Spinner Ring */}
				<div className='border-t-primary h-24 w-24 animate-spin rounded-full border-8 border-white'></div>

				{/* Center Icon */}
				<div className='absolute inset-0 flex items-center justify-center'>
					<div className='h-4 w-4 rotate-45 rounded-none bg-white'></div>
				</div>
			</div>

			<div className='mt-8 animate-pulse text-center'>
				<h2 className='mb-2 font-[Bangers] text-4xl tracking-widest text-white uppercase'>LOADING ISSUE...</h2>
				<div className='bg-primary inline-block -rotate-2 transform border-2 border-white px-4 py-1'>
					<span className='font-[Inter] text-sm font-bold tracking-wide text-white'>MEANWHILE...</span>
				</div>
			</div>
		</div>
	)
}
