import AppContext from '@/contexts/AppContext'
import { IAppContext } from '@/interfaces'
import { useContext } from 'react'

export default function useAppContext(): IAppContext | undefined {
	return useContext(AppContext)
}
