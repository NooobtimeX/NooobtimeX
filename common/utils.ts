interface HasStartDate {
	startDate: string
}

/** Standard descending date sort for items with a `startDate`. */
export const sortByDateDesc = (a: HasStartDate, b: HasStartDate) =>
	new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
