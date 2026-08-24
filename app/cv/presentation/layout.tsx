import React from 'react'
import type { Metadata } from 'next'

/** Slide-deck restatement of /cv — noindex so it never competes with the canonical CV. */
export const metadata: Metadata = {
	title: 'CV Presentation',
	robots: { index: false, follow: true },
	alternates: { canonical: '/cv' }
}

export default function CvPresentationLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>
}
