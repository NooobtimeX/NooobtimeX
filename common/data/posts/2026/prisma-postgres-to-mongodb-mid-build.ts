import type { PostDef } from '../../../interfaces'

/** STUB — a reserved slot in the journey. Promote by filling the AEO fields and removing `draft`. */
export const prismaPostgresToMongodbMidBuild: PostDef = {
	id: 'prisma-postgres-to-mongodb-mid-build',
	title: 'Switching from Prisma/Postgres to MongoDB mid-build',
	publishedAt: '2026-01-28',
	chapter: 'scale',
	draft: true
}
