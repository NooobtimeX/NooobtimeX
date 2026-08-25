/**
 * Inline micro-format for post text — the four forms `PostBlock` strings may carry:
 *
 *   `code`                 inline code
 *   **bold**               strong emphasis
 *   [text](href)           a link — internal hrefs become <Link> in the renderer
 *   [[kind:id]]            a cross-reference into the data layer, e.g. [[skill:next-js]]
 *
 * Deliberately NOT markdown: this file is pure parsing with zero JSX so that
 * `scripts/llms/generate.ts` (plain Bun, no React) can flatten post text, and so the
 * resolver can extract `[[kind:id]]` refs to validate them at build time. The React
 * renderer lives in `lib/inline.tsx` and consumes these tokens.
 *
 * `[[kind:id]]` resolves its LABEL from the data layer (`skillById`, `projectsData`, …),
 * so renaming a project retitles every mention, and an unknown id throws in
 * `resolvePost` instead of shipping a dead link.
 */

export type RefKind = 'skill' | 'project' | 'career' | 'company'

export type InlineToken =
	| { type: 'text'; text: string }
	| { type: 'code'; text: string }
	| { type: 'bold'; text: string }
	| { type: 'link'; text: string; href: string }
	| { type: 'ref'; kind: RefKind; id: string }

/** One pass, longest-first alternation. Anything unmatched falls through as plain text. */
const TOKEN = /\[\[(skill|project|career|company):([a-z0-9-]+)\]\]|\[([^\]]+)\]\(([^)\s]+)\)|`([^`]+)`|\*\*([^*]+)\*\*/g

export function tokenizeInline(text: string): InlineToken[] {
	const tokens: InlineToken[] = []
	let last = 0
	for (const m of text.matchAll(TOKEN)) {
		if (m.index > last) tokens.push({ type: 'text', text: text.slice(last, m.index) })
		if (m[1]) tokens.push({ type: 'ref', kind: m[1] as RefKind, id: m[2] })
		else if (m[3]) tokens.push({ type: 'link', text: m[3], href: m[4] })
		else if (m[5]) tokens.push({ type: 'code', text: m[5] })
		else tokens.push({ type: 'bold', text: m[6] })
		last = m.index + m[0].length
	}
	if (last < text.length) tokens.push({ type: 'text', text: text.slice(last) })
	return tokens
}

/** Every `[[kind:id]]` in a string — the resolver validates these against the data layer. */
export function extractRefs(text: string): { kind: RefKind; id: string }[] {
	return tokenizeInline(text).flatMap(t => (t.type === 'ref' ? [{ kind: t.kind, id: t.id }] : []))
}

/**
 * Strip markup down to plain prose. `resolveRef` supplies the display label for a
 * `[[kind:id]]` (the llms generator passes the real resolver; a bare `id` fallback keeps
 * this callable without one).
 */
export function flattenInline(text: string, resolveRef?: (kind: RefKind, id: string) => string): string {
	return tokenizeInline(text)
		.map(t => {
			if (t.type === 'ref') return resolveRef ? resolveRef(t.kind, t.id) : t.id
			return t.text
		})
		.join('')
}
