import { AffiliationId, IssueId } from '@/common/enum'
import { Ability } from './Ability'

// Issue interface
export interface Issue {
	id: IssueId
	title: string
	description: string
	images: {
		banner: string // Used for issue detail page header and card previews
		photos: string[] // Gallery of issue screenshots/photos
	}
	abilities: Ability[]
	links: {
		live?: string
	}
	startDate: string // YYYY-MM-DD
	endDate?: string // YYYY-MM-DD or undefined if ongoing/single release
	linkedAffiliationId?: AffiliationId // ID of the Affiliation this issue belongs to
}
