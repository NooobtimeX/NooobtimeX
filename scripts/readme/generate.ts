/**
 * README asset generator — renders every profile-README SVG into .github/assets/.
 * Run: `bun run readme:assets`. Deterministic: identical data → identical bytes.
 * Dynamic cards (stats, contributions) are skipped (previous file kept) when
 * their fetch fails, so a rate-limited run never commits broken cards.
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { getContributions, getProfile, getRepos } from '@/lib/github'
import { renderArsenal } from './cards/arsenal'
import { BUTTONS, renderButton } from './cards/buttons'
import { renderCareer } from './cards/career'
import { renderChips } from './cards/chips'
import { renderComms } from './cards/comms'
import { renderContributions } from './cards/contributions'
import { GIGS, renderGig } from './cards/gigs'
import { renderHeader } from './cards/header'
import { SECTIONS, renderSection } from './cards/sections'
import { renderStats } from './cards/stats'

const OUT_DIR = join(process.cwd(), '.github', 'assets')

function write(file: string, svg: string): void {
	writeFileSync(join(OUT_DIR, file), svg, 'utf8')
	console.log(`written ${file} (${(svg.length / 1024).toFixed(1)} KB)`)
}

async function main(): Promise<void> {
	mkdirSync(OUT_DIR, { recursive: true })

	// --- static cards (data layer only) ---
	write('header.svg', renderHeader())
	write('chips.svg', renderChips())
	for (const button of BUTTONS) write(button.file, renderButton(button))
	for (const section of SECTIONS) write(section.file, renderSection(section))
	write('career.svg', renderCareer())
	write('arsenal.svg', renderArsenal())
	GIGS.forEach((gig, i) => write(gig.file, renderGig(gig, i)))
	for (const chip of renderComms()) write(chip.file, chip.svg)

	// --- dynamic cards (GitHub APIs, fail-soft) ---
	const [profile, repos, contrib] = await Promise.all([getProfile(), getRepos(), getContributions('last')])

	if (profile && repos && contrib) {
		write(
			'stats.svg',
			renderStats({
				stars: repos.stars,
				repos: profile.repos,
				followers: profile.followers,
				contributions: contrib.total,
				languages: repos.languages
			})
		)
	} else {
		console.warn('[stats] fetch failed (profile/repos/contributions) — keeping previous stats.svg')
	}

	if (contrib && contrib.days.length > 0) {
		write('contributions.svg', renderContributions(contrib.total, contrib.days))
	} else {
		console.warn('[contributions] fetch failed — keeping previous contributions.svg')
	}
}

main().catch(err => {
	console.error(err)
	process.exit(1)
})
