import { IconType } from 'react-icons'
import { SocialPlatform } from '@/common/enum'

// Social link interface
export interface SocialLink {
	platform: SocialPlatform
	url: string
	icon: IconType
	username?: string
}
