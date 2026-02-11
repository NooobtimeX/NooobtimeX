import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

// ─── Frontend & UI ──────────────────────────────────────────
export const nextjs: Ability = {
	name: 'Next.js',
	icon: 'logos:nextjs-icon',
	category: AbilityCategory.Frontend,
	level: AbilityLevel.Expert
}

export const react: Ability = {
	name: 'React',
	icon: 'logos:react',
	category: AbilityCategory.Frontend,
	level: AbilityLevel.Expert
}

export const typescript: Ability = {
	name: 'TypeScript',
	icon: 'logos:typescript-icon',
	category: AbilityCategory.Frontend,
	level: AbilityLevel.Expert
}

export const tailwindcss: Ability = {
	name: 'Tailwind CSS',
	icon: 'logos:tailwindcss-icon',
	category: AbilityCategory.Frontend,
	level: AbilityLevel.Expert
}

export const shadcnui: Ability = {
	name: 'Shadcn/ui',
	icon: 'simple-icons:shadcnui',
	category: AbilityCategory.Frontend,
	level: AbilityLevel.Advanced
}

export const css: Ability = {
	name: 'CSS',
	icon: 'logos:css-3',
	category: AbilityCategory.Frontend,
	level: AbilityLevel.Advanced
}

// ─── Backend ────────────────────────────────────────────────
export const nodejs: Ability = {
	name: 'Node.js',
	icon: 'logos:nodejs-icon',
	category: AbilityCategory.Backend,
	level: AbilityLevel.Advanced
}

export const nestjs: Ability = {
	name: 'Nest.js',
	icon: 'logos:nestjs',
	category: AbilityCategory.Backend,
	level: AbilityLevel.Advanced
}

export const nats: Ability = {
	name: 'NATS',
	icon: 'logos:nats-icon',
	category: AbilityCategory.Backend,
	level: AbilityLevel.Intermediate
}

// ─── Database ───────────────────────────────────────────────
export const postgresql: Ability = {
	name: 'PostgreSQL',
	icon: 'logos:postgresql',
	category: AbilityCategory.Database,
	level: AbilityLevel.Advanced
}

export const mongodb: Ability = {
	name: 'MongoDB',
	icon: 'logos:mongodb-icon',
	category: AbilityCategory.Database,
	level: AbilityLevel.Intermediate
}

export const prisma: Ability = {
	name: 'Prisma',
	icon: 'logos:prisma',
	category: AbilityCategory.Database,
	level: AbilityLevel.Advanced,
	whiteBg: true
}

export const redis: Ability = {
	name: 'Redis',
	icon: 'logos:redis',
	category: AbilityCategory.Database,
	level: AbilityLevel.Intermediate
}

// ─── DevOps & Cloud ─────────────────────────────────────────
export const vercel: Ability = {
	name: 'Vercel',
	icon: 'logos:vercel-icon',
	category: AbilityCategory.DevOps,
	level: AbilityLevel.Advanced,
	whiteBg: true
}

export const railway: Ability = {
	name: 'Railway',
	icon: 'simple-icons:railway',
	category: AbilityCategory.DevOps,
	level: AbilityLevel.Intermediate
}

export const docker: Ability = {
	name: 'Docker',
	icon: 'logos:docker-icon',
	category: AbilityCategory.DevOps,
	level: AbilityLevel.Intermediate
}

export const github: Ability = {
	name: 'Git/GitHub',
	icon: 'logos:github-icon',
	category: AbilityCategory.DevOps,
	level: AbilityLevel.Advanced,
	whiteBg: true
}

// ─── Tools ──────────────────────────────────────────────────
export const vscode: Ability = {
	name: 'VS Code',
	icon: 'logos:visual-studio-code',
	category: AbilityCategory.Tools,
	level: AbilityLevel.Expert
}

export const clickup: Ability = {
	name: 'ClickUp',
	icon: 'logos:clickup-icon',
	category: AbilityCategory.Tools,
	level: AbilityLevel.Intermediate
}

export const jira: Ability = {
	name: 'Jira',
	icon: 'logos:jira',
	category: AbilityCategory.Tools,
	level: AbilityLevel.Intermediate
}

export const monday: Ability = {
	name: 'Monday',
	icon: 'logos:monday-icon',
	category: AbilityCategory.Tools,
	level: AbilityLevel.Intermediate
}

// ─── Marketing ──────────────────────────────────────────────
export const seo: Ability = {
	name: 'SEO',
	icon: 'material-symbols:search',
	category: AbilityCategory.Marketing,
	level: AbilityLevel.Advanced
}

export const googleAnalytics: Ability = {
	name: 'Google Analytics',
	icon: 'logos:google-analytics',
	category: AbilityCategory.Marketing,
	level: AbilityLevel.Intermediate
}

export const googleAds: Ability = {
	name: 'Google Ads',
	icon: 'logos:google-ads',
	category: AbilityCategory.Marketing,
	level: AbilityLevel.Intermediate
}

export const facebookAds: Ability = {
	name: 'Facebook Ads',
	icon: 'logos:facebook',
	category: AbilityCategory.Marketing,
	level: AbilityLevel.Intermediate
}

export const onlineMarketing: Ability = {
	name: 'Online Marketing',
	icon: 'material-symbols:palette',
	category: AbilityCategory.Marketing,
	level: AbilityLevel.Intermediate
}

export const sitemap: Ability = {
	name: 'Sitemap',
	icon: 'material-symbols:map',
	category: AbilityCategory.Marketing,
	level: AbilityLevel.Advanced
}

export const aeo: Ability = {
	name: 'AEO',
	icon: 'material-symbols:smart-toy',
	category: AbilityCategory.Marketing,
	level: AbilityLevel.Advanced
}

// ─── Artificial Intelligence ────────────────────────────────
export const artificialIntelligence: Ability = {
	name: 'Artificial Intelligence',
	icon: 'material-symbols:robot-2',
	category: AbilityCategory.AI,
	level: AbilityLevel.Advanced
}

export const chatgpt: Ability = {
	name: 'ChatGPT',
	icon: 'logos:openai-icon',
	category: AbilityCategory.AI,
	level: AbilityLevel.Advanced,
	whiteBg: true
}

export const gemini: Ability = {
	name: 'Gemini',
	icon: 'logos:google-bard-icon',
	category: AbilityCategory.AI,
	level: AbilityLevel.Advanced
}

export const githubCopilot: Ability = {
	name: 'GitHub Copilot',
	icon: 'simple-icons:githubcopilot',
	category: AbilityCategory.AI,
	level: AbilityLevel.Advanced
}

export const antigravity: Ability = {
	name: 'Antigravity',
	icon: 'logos:google-gemini',
	category: AbilityCategory.AI,
	level: AbilityLevel.Advanced
}
