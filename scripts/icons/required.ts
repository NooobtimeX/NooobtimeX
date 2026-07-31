/**
 * The set of icon names that must exist in `lib/og-icons.generated.json`.
 *
 * Derived from the TYPED DATA LAYER, never from a regex scan of source files. That is
 * not a style preference — a scan produces false positives that fail the build on
 * icons nobody uses. Two live examples:
 *   - `common/data/skills.ts` mentions `simple-icons:recharts` in a comment; the skill
 *     itself uses `mdi:chart-line`.
 *   - `common/data/personal.ts` has three `icon:` lines inside a doc comment showing
 *     how to add a contact channel (`mdi:phone`, `simple-icons:whatsapp`,
 *     `simple-icons:line`) — none are real entries.
 *
 * Equally, the ~56 `collection:id` literals in `components/` and `app/` are CLIENT-side
 * `@iconify/react`, which fetches from the Iconify API in the browser. They must stay
 * out of the subset — bundling them would grow the server payload for nothing.
 *
 * Imports only `@/common` (~112 KB), never `./collections` — `scripts/icons/check.ts`
 * runs on every build and must not pull in the 26.7 MB of collections.
 */
import { categoryMetadata, personalData, projectsData, skillsData } from '@/common'

/**
 * Escape hatch for names a server-rendered surface hard-codes rather than reading from
 * `common/data`. Empty today: every server-side consumer (the Satori cards in
 * `components/og/`, the README cards in `scripts/readme/cards/`) resolves its icons
 * from the data layer.
 */
const EXTRA_ICONS: string[] = []

/**
 * Every icon-bearing field in `common/`, sorted and deduped.
 *
 * Strictly required by a server-side renderer today:
 *   - `skillsData[].icon` — Satori cards (`components/og/*SquareCard.tsx`) and the
 *     README arsenal/gig cards
 *   - `categoryMetadata[*].icon` — the README arsenal card
 *   - `personalData.socialLinks[].icon` — the README comms card
 *
 * Included for headroom (client-rendered today, ~11 KB total): `contactChannels` and
 * project timeline milestones. Cheap insurance against a future card reaching for one.
 */
export function requiredIcons(): string[] {
	const names = [
		...skillsData.map(s => s.icon),
		...Object.values(categoryMetadata).map(m => m.icon),
		...personalData.socialLinks.map(s => s.icon),
		...(personalData.contactChannels ?? []).map(c => c.icon),
		...projectsData.flatMap(p => (p.timeline ?? []).flatMap(m => (m.icon ? [m.icon] : []))),
		...EXTRA_ICONS
	]
	return [...new Set(names)].sort()
}
