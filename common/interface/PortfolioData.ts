import { Ability } from './Ability'
import { AffiliationItem } from './AffiliationItem'
import { Issue } from './Issue'
import { PersonalData } from './PersonalData'

// Data container interface
export interface PortfolioData {
	personal: PersonalData
	issues: Issue[]
	abilities: Ability[]
	affiliations: AffiliationItem[]
}
