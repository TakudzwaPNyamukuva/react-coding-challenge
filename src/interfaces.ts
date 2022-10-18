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
	data: ICardsData[] | undefined
	setData: React.Dispatch<React.SetStateAction<ICardsData[] | undefined>>
}
