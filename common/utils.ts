interface HasStartDate {
	startDate: string
}

/** Standard descending date sort for items with a `startDate`. */
export const sortByDateDesc = (a: HasStartDate, b: HasStartDate) =>
	new Date(b.startDate).getTime() - new Date(a.startDate).getTime()

interface HasDateRange {
	id: string
	startDate: string
	endDate?: string
}

/**
 * The id of the entry active at `now` — the one that gets the pulsing NOW badge.
 *
 * Takes `now` explicitly rather than calling `new Date()` itself so the caller decides
 * when "now" is. That matters: these pages are statically prerendered, so computing it
 * inside a client component meant the server rendered it at BUILD time and the browser
 * recomputed it at VIEW time. Any role boundary crossed in between is a hydration
 * mismatch. Callers resolve it on the server and pass the id down.
 */
export function currentEntryId(items: readonly HasDateRange[], now: Date): string | undefined {
	return items.find(r => new Date(r.startDate) <= now && (!r.endDate || new Date(r.endDate) >= now))?.id
}
