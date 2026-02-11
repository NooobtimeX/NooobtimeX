import type { AbilityGroup } from '@/common/interface'
import {
	aeo,
	antigravity,
	artificialIntelligence,
	chatgpt,
	clickup,
	css,
	docker,
	facebookAds,
	gemini,
	github,
	githubCopilot,
	googleAds,
	googleAnalytics,
	jira,
	monday,
	mongodb,
	nats,
	nestjs,
	nextjs,
	nodejs,
	onlineMarketing,
	postgresql,
	prisma,
	railway,
	react,
	redis,
	seo,
	shadcnui,
	sitemap,
	tailwindcss,
	typescript,
	vercel,
	vscode
} from './abilities'

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
