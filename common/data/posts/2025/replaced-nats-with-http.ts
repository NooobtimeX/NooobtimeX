import type { PostDef } from '../../../interfaces'

/** STUB — a reserved slot in the journey. Promote by filling the AEO fields and removing `draft`. */
export const replacedNatsWithHttp: PostDef = {
	id: 'replaced-nats-with-http',
	title: 'We replaced a NATS message bus with plain HTTP calls',
	publishedAt: '2025-10-30',
	chapter: 'scale',
	series: { id: 'looklook', part: 1 },
	draft: true
}
