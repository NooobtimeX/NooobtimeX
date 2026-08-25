/**
 * The blog registry + resolver — the `resolveProject()` of posts.
 *
 * Authoring happens in one file per post under the year folders (filename === `id`,
 * year folder === `publishedAt`'s year — navigation only, the URL stays /blog/<id>).
 * Each year's `index.ts` lists its posts in publication order; this file folds them,
 * validates them, and derives everything routes may consume.
 *
 * Validation is two-tier (see `PostDef`): a `draft: true` stub needs only four fields
 * and renders nowhere; a full post must carry every AEO field or the BUILD fails —
 * the same loud-failure contract as `CyberIcon` and `resolveProject`'s highlight check.
 *
 * `postsData` is the ONLY export any route, the sitemap, llms.txt or ⌘K may read.
 */
import type { EntityId, ExperienceId, PostCategory, PostChapter } from '../../enums'
import type { Post, PostBlock, PostDef } from '../../interfaces'
import { entitiesData } from '../entities'
import { experiencesData } from '../experiences'
import { projectsData } from '../projects'
import { type SkillId, skillById } from '../skills'
import { posts2021 } from './2021'
import { posts2022 } from './2022'
import { posts2023 } from './2023'
import { posts2024 } from './2024'
import { posts2025 } from './2025'
import { posts2026 } from './2026'
import { type RefKind, extractRefs, flattenInline } from './inline'

export * from './inline'

/** Journey-phase metadata — spans mirror the exact dates in `experiences.ts`. */
export const chapterMetadata: Record<PostChapter, { label: string; span: string; description: string }> = {
	student: {
		label: 'Student Years',
		span: '2021–2025',
		description: 'Part-time at RS Trophy while enrolled at Thammasat — WordPress storefronts and a thesis.'
	},
	bridge: {
		label: 'The Bridge',
		span: 'Jun–Jul 2025',
		description: 'Forty-five days full-time at RS between graduating and joining JTS.'
	},
	scale: {
		label: 'Scale',
		span: '2025–2026',
		description: 'The JTS year — LOOKLOOK PET microservices, Medusa, Omise, and the MONOMax sprint.'
	},
	ownership: {
		label: 'Ownership',
		span: '2026–',
		description: 'CTO at RS Trophy — every technology decision, and the write-ups to prove it.'
	},
	freelance: {
		label: 'Freelance Thread',
		span: '2024–',
		description: 'The builds that ran underneath every role — flood dashboards, poker, prettier-config.dev.'
	}
}

export const categoryMetadataPosts: Record<PostCategory, { label: string; accent: string }> = {
	'nextjs': { label: 'Next.js', accent: '#00F0FF' },
	'infrastructure': { label: 'Infrastructure', accent: '#FCEE0A' },
	'commerce': { label: 'Commerce', accent: '#39FF14' },
	'seo-aeo': { label: 'SEO / AEO', accent: '#B026FF' },
	'engineering': { label: 'Engineering', accent: '#FF003C' }
}

/** Where a `[[kind:id]]` points. Hrefs are built from ids — SEO invariant #3, structurally. */
export const refHref = (kind: RefKind, id: string): string =>
	kind === 'skill' ? `/skills/${id}`
	: kind === 'project' ? `/projects/${id}`
	: kind === 'career' ? `/career/${id}`
	: `/companies/${id}`

/** Display label for a `[[kind:id]]` — from the data layer, so a rename retitles every mention. */
export function refLabel(kind: RefKind, id: string): string | undefined {
	if (kind === 'skill') return skillById[id as SkillId]?.name
	if (kind === 'project') return projectsData.find(p => p.id === id)?.title
	if (kind === 'career') {
		const role = experiencesData.find(e => e.id === id)
		return role ? role.organization.name : undefined
	}
	return entitiesData.find(o => o.id === id)?.name
}

/** Every text field a post can carry refs in — scanned for validation and back-links. */
function textFields(d: PostDef): string[] {
	const out: string[] = []
	if (d.tldr) out.push(d.tldr)
	for (const f of d.faqs ?? []) out.push(f.q, f.a)
	for (const l of d.lessons ?? []) out.push(l)
	for (const b of d.body ?? []) {
		if ('text' in b && typeof b.text === 'string') out.push(b.text)
		if (b.kind === 'list') out.push(...b.items)
		if (b.kind === 'code' && b.caption) out.push(b.caption)
		if (b.kind === 'image' && b.caption) out.push(b.caption)
		if (b.kind === 'table') out.push(...b.head, ...b.rows.flat())
	}
	return out
}

const DATE = /^\d{4}-\d{2}-\d{2}$/
const wordCount = (blocks: PostBlock[]): number =>
	blocks
		.map(b =>
			b.kind === 'code' ? b.code
			: b.kind === 'list' ? b.items.join(' ')
			: b.kind === 'table' ? [...b.head, ...b.rows.flat()].join(' ')
			: 'text' in b ? b.text
			: ''
		)
		.join(' ')
		.split(/\s+/)
		.filter(Boolean).length

/** Build-time "now" — the site is statically prerendered, so this is the deploy date. */
const TODAY = new Date().toISOString().slice(0, 10)

const fail = (id: string, msg: string): never => {
	throw new Error(`[posts] "${id}": ${msg}`)
}

const resolvePost = (d: PostDef): Post => {
	if (!/^[a-z0-9-]+$/.test(d.id)) fail(d.id, 'id must be url-safe kebab-case')
	if (!DATE.test(d.publishedAt)) fail(d.id, `publishedAt "${d.publishedAt}" is not YYYY-MM-DD`)
	if (d.updatedAt && (!DATE.test(d.updatedAt) || d.updatedAt < d.publishedAt))
		fail(d.id, `updatedAt "${d.updatedAt}" must be YYYY-MM-DD on or after publishedAt`)

	if (d.draft) {
		// Stub tier — reserve the slot, skip the AEO contract. Never surfaces anywhere.
		return {
			description: '',
			tldr: '',
			category: 'engineering',
			faqs: [],
			body: [],
			accent: '#00F0FF',
			...d,
			readingMinutes: 0
		}
	}

	// Full tier — the AEO contract. A post that cannot be cited must not build.
	if (d.publishedAt > TODAY) fail(d.id, `publishedAt ${d.publishedAt} is in the future — posts are never future-dated`)
	if (!d.category) fail(d.id, 'category is required once draft is off')
	if (!d.description) fail(d.id, 'description is required once draft is off')
	if (d.description!.length > 155)
		fail(d.id, `description is ${d.description!.length} chars — max 155 (lib/seo.ts clamps at the same budget)`)
	if (!d.tldr || d.tldr.length < 120) fail(d.id, 'tldr must be the actual answer — at least 120 chars of it')
	if (!d.faqs || d.faqs.length < 3)
		fail(d.id, `has ${d.faqs?.length ?? 0} faqs — at least 3 real questions feed FAQPage`)
	if (!d.body || d.body.length === 0) fail(d.id, 'body is empty')

	// Every [[kind:id]] and every related*Ids entry must resolve, or the link is dead on arrival.
	for (const text of textFields(d)) {
		for (const ref of extractRefs(text))
			if (!refLabel(ref.kind, ref.id)) fail(d.id, `[[${ref.kind}:${ref.id}]] does not resolve — check the id`)
		// Single-star *italics* is not a supported inline token — it renders as literal
		// asterisks, the exact defect the project descriptions once shipped. Bold or nothing.
		if (/(?<!\*)\*[^*\s][^*]*\*(?!\*)/.test(text.replace(/\*\*[^*]+\*\*/g, '')))
			fail(d.id, `text contains single-star *italics* — only **bold** is supported: ${text.slice(0, 80)}…`)
	}
	for (const pid of d.relatedProjectIds ?? [])
		if (!projectsData.some(p => p.id === pid)) fail(d.id, `relatedProjectIds "${pid}" is not a project id`)

	const category = d.category!
	return {
		accent: categoryMetadataPosts[category].accent,
		...d,
		description: d.description!,
		tldr: d.tldr!,
		category,
		faqs: d.faqs!,
		body: d.body!,
		readingMinutes: Math.max(1, Math.round(wordCount(d.body!) / 200))
	}
}

/** Registration order — publication order within each year folder's index. */
const defs: PostDef[] = [...posts2021, ...posts2022, ...posts2023, ...posts2024, ...posts2025, ...posts2026]

// Registry-level checks: unique ids, and series parts that are 1..n with no gaps.
{
	const seen = new Set<string>()
	for (const d of defs) {
		if (seen.has(d.id)) throw new Error(`[posts] duplicate id "${d.id}"`)
		seen.add(d.id)
	}
	const bySeries = new Map<string, number[]>()
	for (const d of defs)
		if (d.series && !d.draft) bySeries.set(d.series.id, [...(bySeries.get(d.series.id) ?? []), d.series.part])
	for (const [sid, parts] of bySeries) {
		const sorted = [...parts].sort((a, b) => a - b)
		if (sorted.some((p, i) => p !== i + 1))
			throw new Error(
				`[posts] series "${sid}" parts are [${sorted.join(', ')}] — must be 1..n with no gaps or duplicates`
			)
	}
}

/**
 * Published posts, newest work first. The ONLY list any route, the sitemap, llms.txt
 * or the ⌘K palette may read — drafts exist solely as version-controlled backlog.
 */
export const postsData: Post[] = defs
	.map(resolvePost)
	.filter(p => !p.draft)
	.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))

export const postById = (id: string): Post | undefined => postsData.find(p => p.id === id)

/** Published posts in a series, ordered by part — drives "Part n of N" navigation. */
export const postsInSeries = (seriesId: string): Post[] =>
	postsData.filter(p => p.series?.id === seriesId).sort((a, b) => a.series!.part - b.series!.part)

/**
 * Back-link indexes — the reverse side of cross-referencing. A post counts as
 * "about" an entity if it names it in the typed arrays OR as a `[[kind:id]]` token,
 * so linking inside prose is enough. Built from `postsData`, so drafts never leak.
 */
function refsOf(p: Post): { kind: RefKind; id: string }[] {
	const fromText = textFields(p).flatMap(extractRefs)
	return [
		...fromText,
		...(p.skills ?? []).map(id => ({ kind: 'skill' as const, id })),
		...(p.relatedProjectIds ?? []).map(id => ({ kind: 'project' as const, id })),
		...(p.relatedExperienceIds ?? []).map(id => ({ kind: 'career' as const, id })),
		...(p.relatedEntityIds ?? []).map(id => ({ kind: 'company' as const, id }))
	]
}

function buildIndex(kind: RefKind): Record<string, Post[]> {
	const out: Record<string, Post[]> = {}
	for (const p of postsData)
		for (const id of new Set(
			refsOf(p)
				.filter(r => r.kind === kind)
				.map(r => r.id)
		))
			(out[id] ??= []).push(p)
	return out
}

export const postsBySkill = buildIndex('skill') as Partial<Record<SkillId, Post[]>>
export const postsByProject = buildIndex('project') as Partial<Record<string, Post[]>>
export const postsByExperience = buildIndex('career') as Partial<Record<ExperienceId, Post[]>>
export const postsByEntity = buildIndex('company') as Partial<Record<EntityId, Post[]>>

/** Plain-prose flatten with real labels — what `scripts/llms/generate.ts` consumes. */
export const flattenPostText = (text: string): string => flattenInline(text, (kind, id) => refLabel(kind, id) ?? id)
