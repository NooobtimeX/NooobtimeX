export interface IconObject {
	name: string
	icon: string // Icon name for @iconify/react
	description: string
}

export default interface MenuItem {
	title: string
	href: string
	icon: IconObject
}
