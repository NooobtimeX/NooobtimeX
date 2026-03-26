import type { Issue } from '@/common/interface'
import {
	looklookPet,
	n8nRailway,
	onlinePokerGame,
	portfolio,
	prettierConfig,
	qrFood,
	rsAward,
	rsMedal,
	rsTrophy,
	rsTrophyV1,
	tencentRailwayMigration
} from './issues'

const issues = [
	rsTrophy,
	tencentRailwayMigration,
	n8nRailway,
	looklookPet,
	onlinePokerGame,
	prettierConfig,
	rsTrophyV1,
	rsAward,
	rsMedal,
	portfolio,
	qrFood
]

export const issuesData: Issue[] = issues.sort((a, b) => {
	return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
})
