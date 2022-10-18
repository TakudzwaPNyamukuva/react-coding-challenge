export interface ICardsData {
	id: number
	page: number
	color: string
	name: string
}

export interface IAppContext {
	cardsData: ICardsData[]
	setCardsData: React.Dispatch<React.SetStateAction<ICardsData[]>>
}
