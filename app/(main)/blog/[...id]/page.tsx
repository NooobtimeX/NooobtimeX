import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PostDetail from '@/components/blog/PostDetail'
import JsonLd from '@/components/seo/JsonLd'
import { blogPostingSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import { pageMetadata } from '@/lib/seo'
import { categoryMetadataPosts, flattenPostText, postsData } from '@/common'

interface PostPageProps {
	params: Promise<{ id: string[] }>
}

export async function generateStaticParams() {
	// `postsData` is already draft-filtered, so a draft's URL is never prerendered —
	// with `dynamicParams = false` below it is a real 404, not a soft-404.
	return postsData.map(p => ({ id: [p.id] }))
}

/**
 * Unknown slugs must 404 at the routing layer, not render.
 *
 * `app/loading.tsx` streams a shell for any matched route, which flushes response
 * headers at 200 — so a later `notFound()` renders 404 UI inside an already-committed
 * 200. That turned every mistyped detail slug into an indexable soft-404 titled
 * "… Not Found". With `generateStaticParams` above and `dynamicParams` false, Next
 * never enters the segment for an unknown param.
 */
export const dynamicParams = false

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
	const { id } = await params
	const post = postsData.find(p => p.id === id?.[0])

	if (!post) return { title: 'Post Not Found', robots: { index: false, follow: false } }

	return pageMetadata({
		path: `/blog/${post.id}`,
		title: post.title,
		description: post.description,
		ogImage: `/card/og/blog/${post.id}`,
		article: {
			publishedTime: post.publishedAt,
			...(post.updatedAt && { modifiedTime: post.updatedAt }),
			section: categoryMetadataPosts[post.category].label,
			tags: post.skills
		}
	})
}

const PostPage: React.FC<PostPageProps> = async ({ params }) => {
	const { id } = await params
	const post = postsData.find(p => p.id === id?.[0])

	if (!post) notFound()

	const posting = blogPostingSchema({
		id: post.id,
		title: post.title,
		description: post.description,
		publishedAt: post.publishedAt,
		updatedAt: post.updatedAt,
		section: categoryMetadataPosts[post.category].label,
		keywords: post.skills ?? [],
		wordCount: post.readingMinutes * 200,
		image: `/card/og/blog/${post.id}`
	})

	// FAQ answers are flattened to plain prose — JSON-LD must not carry `[[ref]]` markup.
	const faqs = faqSchema(post.faqs.map(f => ({ q: flattenPostText(f.q), a: flattenPostText(f.a) })))

	const breadcrumbs = breadcrumbSchema([
		{ name: 'Home', path: '/' },
		{ name: 'Journal', path: '/blog' },
		{ name: post.title, path: `/blog/${post.id}` }
	])

	return (
		<>
			<JsonLd data={posting} />
			<JsonLd data={faqs} />
			<JsonLd data={breadcrumbs} />
			<PostDetail post={post} />
		</>
	)
}

export default PostPage
