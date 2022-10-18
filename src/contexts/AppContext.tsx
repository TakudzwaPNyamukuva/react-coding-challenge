import { IAppContext, ICardsData } from '@/interfaces'
import React, { createContext, useState } from 'react'

interface IAppProvider {
	children: React.ReactNode
}

const AppContext = createContext<IAppContext | undefined>(undefined)

export function AppProvider({ children }: IAppProvider) {
	const [data, setData] = useState<ICardsData[] | undefined>([
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
		{ id: 5, page: 2, bg: 'bg-amber-600', color: 'text-amber-100', name: 'item 1', pinned: false },
		{ id: 6, page: 2, bg: 'bg-lime-600', color: 'text-lime-100', name: 'item 2', pinned: false },
		{
			id: 7,
			page: 2,
			bg: 'bg-teal-600',
			color: 'text-teal-100',
			name: 'item 3',
			pinned: false,
		},
		{ id: 8, page: 2, bg: 'bg-rose-600', color: 'text-rose-100', name: 'item 4', pinned: false },
	])

	const contextData = {
		data,
		setData,
	}

	return <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
}

export default AppContext
