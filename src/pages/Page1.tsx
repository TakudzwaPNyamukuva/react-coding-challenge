import useAppContext from '@/hooks/useAppContext'
import { ICardsData } from '@/interfaces'

export default function Page1() {
	const context = useAppContext()
	const pageOneData = context?.pageOneData
	const setPageOneData = context?.setPageOneData
	const setPinnedData = context?.setPinnedData

	function handleClick(card: ICardsData) {
		const updatedData = pageOneData?.map((item) =>
			item.id === card?.id ? { ...item, pinned: !card?.pinned } : item,
		)

		console.log({ updatedData })

		setPageOneData?.(updatedData)
		setPinnedData?.(updatedData)
	}

	let pageContent
	if (pageOneData !== undefined) {
		pageContent = (
			<div className='px-2 flex flex-wrap gap-5'>
				{pageOneData?.map((card, index) => {
					return (
						<button
							onClick={() => handleClick(card)}
							key={index}
							className={`${card?.bg} ${card?.color} h-32 w-32 rounded-lg flex justify-center items-center capitalize font-semibold cursor-pointer`}
						>
							{card?.name}
							{card?.pinned && <p>(pinned)</p>}
						</button>
					)
				})}
			</div>
		)
	} else {
		pageContent = (
			<div className='px-2 flex space-x-4 text-sm text-gray-600'>No cards available</div>
		)
	}
	return (
		<>
			<h1 className='py-5 text-base font-semibold ml-2'>Page 1</h1>

			{pageContent}
		</>
	)
}
