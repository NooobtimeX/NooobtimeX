import type { AbilityGroup } from '@/common/interface'
import { aeo } from './aeo'
import { antigravity } from './antigravity'
import { artificialIntelligence } from './artificialIntelligence'
import { chatgpt } from './chatgpt'
import { clickup } from './clickup'
import { css } from './css'
import { docker } from './docker'
import { facebookAds } from './facebookAds'
import { gemini } from './gemini'
import { github } from './github'
import { githubCopilot } from './githubCopilot'
import { googleAds } from './googleAds'
import { googleAnalytics } from './googleAnalytics'
import { jira } from './jira'
import { monday } from './monday'
import { mongodb } from './mongodb'
import { nats } from './nats'
import { nestjs } from './nestjs'
import { nextjs } from './nextjs'
import { nodejs } from './nodejs'
import { onlineMarketing } from './onlineMarketing'
import { postgresql } from './postgresql'
import { prisma } from './prisma'
import { railway } from './railway'
import { react } from './react'
import { redis } from './redis'
import { seo } from './seo'
import { shadcnui } from './shadcnui'
import { sitemap } from './sitemap'
import { tailwindcss } from './tailwindcss'
import { typescript } from './typescript'
import { vercel } from './vercel'
import { vscode } from './vscode'

export const abilitiesData: AbilityGroup[] = [
	{
		category: 'Frontend & UI',
		description: 'Modern web development and user interface abilities',
		icon: 'material-symbols:laptop-chromebook',
		abilities: [nextjs, react, typescript, tailwindcss, shadcnui, css]
	},
	{
		category: 'Backend',
		description: 'Server-side development and data management',
		icon: 'material-symbols:database',
		abilities: [nodejs, nestjs, postgresql, mongodb, prisma, nats, redis]
	},
	{
		category: 'DevOps & Cloud',
		description: 'Deployment, cloud services, and development workflow',
		icon: 'material-symbols:cloud',
		abilities: [vercel, railway, docker, github]
	},
	{
		category: 'Tools',
		description: 'Development tools and project management',
		icon: 'material-symbols:build',
		abilities: [vscode, clickup, jira, monday]
	},
	{
		category: 'Marketing',
		description: 'Digital marketing and analytics',
		icon: 'material-symbols:trending-up',
		abilities: [seo, aeo, sitemap, googleAnalytics, googleAds, facebookAds, onlineMarketing]
	},
	{
		category: 'Artificial Intelligence',
		description: 'AI tools and technologies',
		icon: 'material-symbols:robot-2',
		abilities: [artificialIntelligence, chatgpt, gemini, githubCopilot, antigravity]
	}
]
