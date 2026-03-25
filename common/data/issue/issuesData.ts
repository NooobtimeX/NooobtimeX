import type { Issue } from '@/common/interface'
import { floodPrediction } from './flood-prediction'
import { looklookPet } from './looklook-pet'
import { onlinePokerGame } from './online-poker-game'
import { prettierConfig } from './prettier-config'
import { rsAward } from './rs-award'
import { rsMedal } from './rs-medal'
import { rsTrophy } from './rs-trophy'
import { webAppAutomation } from './web-app-automation'

export const issuesData: Issue[] = [
	rsTrophy,
	looklookPet,
	onlinePokerGame,
	floodPrediction,
	webAppAutomation,
	prettierConfig,
	rsAward,
	rsMedal
]
