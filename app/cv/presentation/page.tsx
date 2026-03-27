'use client'

import { useRouter } from 'next/navigation'
import PresentationView from '@/components/cv/PresentationView'

export default function PresentationPage() {
	const router = useRouter()
	return <PresentationView onExit={() => router.push('/cv')} />
}
