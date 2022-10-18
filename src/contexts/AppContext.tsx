import { IAppContext, ICardsData } from '@/interfaces'
import React, { createContext, useState } from 'react'

interface IAppProvider {
	children: React.ReactNode
}

const AppContext = createContext<IAppContext | undefined>(undefined)

export function AppProvider({ children }: IAppProvider) {
	const [pageOneData, setPageOneData] = useState<ICardsData[] | undefined>([
		{ id: 1, page: 1, bg: 'bg-blue-600', color: 'text-blue-100', name: 'item 1', pinned: false },
		{ id: 2, page: 1, bg: 'bg-red-600', color: 'text-red-100', name: 'item 2', pinned: false },
		{
			id: 3,
			page: 1,
			bg: 'bg-purple-600',
			color: 'text-purple-100',
			name: 'item 3',
			pinned: false,
		},
		{ id: 4, page: 1, bg: 'bg-green-600', color: 'text-green-100', name: 'item 4', pinned: false },
	])

	const [pageTwoData, setPageTwoData] = useState<ICardsData[] | undefined>([
		{ id: 1, page: 2, bg: 'bg-blue-600', color: 'text-blue-100', name: 'item 1', pinned: false },
		{ id: 2, page: 2, bg: 'bg-red-600', color: 'text-red-100', name: 'item 2', pinned: false },
		{
			id: 3,
			page: 2,
			bg: 'bg-purple-600',
			color: 'text-purple-100',
			name: 'item 3',
			pinned: false,
		},
		{ id: 4, page: 2, bg: 'bg-green-600', color: 'text-green-100', name: 'item 4', pinned: false },
	])

	const [pinnedData, setPinnedData] = useState<ICardsData[] | undefined>([])

	const contextData = {
		pageOneData,
		setPageOneData,
		pageTwoData,
		setPageTwoData,
		pinnedData,
		setPinnedData,
	}

	return <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
}

export default AppContext
