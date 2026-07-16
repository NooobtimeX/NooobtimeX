import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

// Utility function to check if an organization is current (no end date)
export function isCurrentPosition(endDate?: string): boolean {
	return !endDate
}

// Utility function to format date range for organization
export function formatExperienceDuration(startDate: string, endDate?: string): string {
	const start = new Date(startDate)
	const startMonth = start.toLocaleDateString('en-US', { month: 'short' })
	const startYear = start.getFullYear()

	if (!endDate) {
		// A role that hasn't started yet reads as upcoming, not ongoing.
		if (start.getTime() > Date.now()) {
			return `Starts ${startMonth} ${startYear}`
		}
		return `${startMonth} ${startYear} - Present`
	}

	const end = new Date(endDate)
	const endMonth = end.toLocaleDateString('en-US', { month: 'short' })
	const endYear = end.getFullYear()

	return `${startMonth} ${startYear} - ${endMonth} ${endYear}`
}

// Format a single milestone date as e.g. "Jun 2026"
export function formatMilestoneDate(date: string): string {
	return new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

/** Format a kebab-case position id for display, e.g. 'chief-technology-officer' → 'Chief Technology Officer'. */
export function formatPosition(position: string): string {
	return position
		.split('-')
		.map(w => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ')
}

/**
 * Converts a string into a URL-friendly slug.
 * Example: "Next.js" -> "next-js"
 */
export function slugify(text: string): string {
	return text
		.toString()
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/[^\w-]+/g, '-') // Replace all non-word chars with - (handles . in Next.js)
		.replace(/--+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start
		.replace(/-+$/, '') // Trim - from end
}

/**
 * Reverses a slug back into a display-friendly name (best effort)
 * Note: This is mainly used for mapping back to the data objects.
 */
export function unslugify(slug: string): string {
	return slug.replace(/-/g, ' ').replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
}
