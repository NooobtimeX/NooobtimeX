import { AffiliationType, Position } from '@/common/enum'
import type { AffiliationItem } from '@/common/interface'
import { privateLife } from './companies-info'

export const born: AffiliationItem = {
	id: 'born',
	affiliation: privateLife,
	position: Position.NewBorn,
	description: 'The beginning of the journey.',
	type: AffiliationType.LifeEvent,
	startDate: '1999-01-01'
}
