import { AffiliationCategory, AffiliationId, EmploymentType, Position } from '@/common/enum'
import { Affiliation } from './Affiliation'

// AffiliationItem interface
export interface AffiliationItem {
	id: AffiliationId
	affiliation: Affiliation
	position: Position
	description: string
	type: EmploymentType
	category: AffiliationCategory
	startDate: string
	endDate?: string
}
