export interface ICardsData {
	id: number
	page: number
	bg: string
	color: string
	name: string
	pinned: boolean
}

export interface IPinnedData {
	id: number
	page: number
	bg: string
	color: string
	name: string
}

export interface IAppContext {
	pageOneData: ICardsData[] | undefined
	setPageOneData: React.Dispatch<React.SetStateAction<ICardsData[] | undefined>>
	pageTwoData: ICardsData[] | undefined
	setPageTwoData: React.Dispatch<React.SetStateAction<ICardsData[] | undefined>>
	pinnedData: IPinnedData[] | undefined
	setPinnedData: React.Dispatch<React.SetStateAction<IPinnedData[] | undefined>>
}
