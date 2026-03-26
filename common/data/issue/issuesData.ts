import type { Issue } from '@/common/interface'
import { looklookPet } from './looklook-pet'
import { n8nRailway } from './n8n-railway'
import { onlinePokerGame } from './online-poker-game'
import { prettierConfig } from './prettier-config'
import { rsAward } from './rs-award'
import { rsMedal } from './rs-medal'
import { rsTrophy } from './rs-trophy'
import { rsTrophyV1 } from './rs-trophy-v1'
import { tencentRailwayMigration } from './tencent-railway-migration'

const issues = [
	rsTrophy,
	tencentRailwayMigration,
	n8nRailway,
	looklookPet,
	onlinePokerGame,
	prettierConfig,
	rsTrophyV1,
	rsAward,
	rsMedal
]

export const issuesData: Issue[] = issues.sort((a, b) => {
	return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
})
