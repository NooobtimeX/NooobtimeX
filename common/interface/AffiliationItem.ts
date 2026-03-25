import { AffiliationType, Position } from '@/common/enum'
import { Affiliation } from './Affiliation'

// AffiliationItem interface
export interface AffiliationItem {
	id: string
	affiliation: Affiliation
	position: Position
	description: string
	type: AffiliationType
	startDate: string
	endDate?: string
}
