'use client'

import React from 'react'
import CharacterPanel from '@/components/home/CharacterPanel'
import IntelPanel from '@/components/home/IntelPanel'
import MissionBoard from '@/components/home/MissionBoard'

const HomeContent: React.FC = () => {
	return (
		<div className='relative h-full min-h-screen w-full bg-zinc-950 lg:h-screen lg:overflow-hidden'>
			{/* Global dot grid background */}
			<div className='pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,hsl(355,85%,60%,0.07)_1px,transparent_1px)] bg-size-[24px_24px]' />

			{/* Lobby grid — 3 columns on lg+, stacked on mobile */}
			<div className='relative z-10 flex flex-col lg:grid lg:h-screen lg:grid-cols-[280px_1fr_300px] lg:items-start'>
				<CharacterPanel />
				<MissionBoard />
				<IntelPanel />
			</div>
		</div>
	)
}

export default HomeContent
