import { IAppContext, ICardsData } from '@/interfaces'
import React, { createContext, useState } from 'react'

interface IAppProvider {
	children: React.ReactNode
}

const AppContext = createContext<IAppContext | undefined>(undefined)

export function AppProvider({ children }: IAppProvider) {
	const [cardsData, setCardsData] = useState<ICardsData[]>([
		{ id: 1, page: 1, color: 'blue-300', name: 'item 1' },
		{ id: 1, page: 1, color: 'blue-300', name: 'item 1' },
	])

	const contextData = {
		cardsData,
		setCardsData,
	}

	return <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
}

export default AppContext
