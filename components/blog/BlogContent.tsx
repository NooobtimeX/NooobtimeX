import React from 'react'
import PostCard from '@/components/blog/PostCard'
import Container from '@/components/cyber/Container'
import MotionReveal from '@/components/cyber/MotionReveal'
import SectionHeader from '@/components/cyber/SectionHeader'
import { postsData } from '@/common'

/**
 * The /blog index — posts grouped by the YEAR THE WORK HAPPENED (`publishedAt`),
 * newest year first, using the grouped-section rule from `SkillsContent`. The archive
 * reads as a journal of the work, which is the whole framing of the blog.
 */
const BlogContent: React.FC = () => {
	const years = [...new Set(postsData.map(p => p.publishedAt.slice(0, 4)))].sort((a, b) => b.localeCompare(a))

	return (
		<Container className='py-12 md:py-16'>
			<SectionHeader
				as='h1'
				code='08'
				title='Journal'
				subtitle={`${postsData.length} entries — the engineering journey, written up with the numbers.`}
			/>

			{years.map((year, idx) => {
				const items = postsData.filter(p => p.publishedAt.startsWith(year))
				return (
					<section key={year} className='mt-12'>
						<div className='mb-5 flex items-center gap-3'>
							<span className='text-cyber-cyan font-mono text-xs tracking-[0.3em] uppercase'>
								{String(idx + 1).padStart(2, '0')}
							</span>
							<h2 className='font-display text-xl font-bold tracking-wide uppercase'>{year}</h2>
							<span className='bg-border h-px flex-1' />
							<span className='text-muted-foreground font-mono text-xs'>{items.length}</span>
						</div>
						<div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
							{items.map((p, i) => (
								<MotionReveal key={p.id} delay={(i % 3) * 0.08}>
									<PostCard post={p} index={i} />
								</MotionReveal>
							))}
						</div>
					</section>
				)
			})}
		</Container>
	)
}

export default BlogContent
