import React from 'react'

/**
 * Renders one JSON-LD block.
 *
 * Exists so the `dangerouslySetInnerHTML` + `JSON.stringify` pair is written once
 * rather than repeated in every route that carries structured data.
 *
 * `<` is escaped because a `</script>` sequence inside any string value — a project
 * description, an org `about` — would otherwise close the tag early and spill the rest
 * of the payload into the document as markup.
 */
const JsonLd: React.FC<{ data: object }> = ({ data }) => (
	<script
		type='application/ld+json'
		dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
	/>
)

export default JsonLd
