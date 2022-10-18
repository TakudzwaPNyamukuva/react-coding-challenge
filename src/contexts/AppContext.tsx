import { IAppContext, ICardsData } from '@/interfaces'
import { cardsData } from '@/mockData'
import React, { createContext, useState } from 'react'

interface IAppProvider {
	children: React.ReactNode
}

const AppContext = createContext<IAppContext | undefined>(undefined)

export function AppProvider({ children }: IAppProvider) {
	const [data, setData] = useState<ICardsData[] | undefined>(cardsData)

	const contextData = {
		data,
		setData,
	}

	return <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
}

export default AppContext
