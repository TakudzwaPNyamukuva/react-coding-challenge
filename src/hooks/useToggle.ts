import useAppContext from '@/hooks/useAppContext'
import { ICardsData } from '@/interfaces'

export function useToggle() {
	const context = useAppContext()
	const data = context?.data
	const setData = context?.setData

	function handleClick(card: ICardsData) {
		const updatedData = data?.map((item) =>
			item.id === card?.id ? { ...item, pinned: !card?.pinned } : item,
		)

		setData?.(updatedData)
	}

	return { data, handleClick }
}
