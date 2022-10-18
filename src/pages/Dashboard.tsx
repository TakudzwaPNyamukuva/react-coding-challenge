import useAppContext from '@/hooks/useAppContext'
import { ICardsData } from '@/interfaces'

export default function Dashboard() {
	const context = useAppContext()
	const pinnedData = context?.pinnedData
	const setPinnedData = context?.setPinnedData

	console.log({ pinnedData })

	function handleClick(card: ICardsData) {
		const updatedData = pinnedData?.filter((item) => item?.id !== card?.id)

		setPinnedData?.(updatedData)
	}

	let pageContent
	if (pinnedData?.length !== 0) {
		pageContent = (
			<div className='px-2 flex flex-wrap gap-5'>
				{pinnedData?.map((card, index) => {
					return (
						<button
							onClick={() => handleClick(card)}
							key={index}
							className={`${card?.bg} ${card?.color} h-32 w-32 rounded-lg flex flex-col justify-center items-center capitalize font-semibold cursor-pointer`}
						>
							<p>{card?.name}</p>
							<p>Page {card?.page}</p>
						</button>
					)
				})}
			</div>
		)
	} else {
		pageContent = (
			<div className='px-2 flex space-x-4 text-sm text-gray-600'>No cards pinned yet</div>
		)
	}

	return (
		<>
			<h1 className='py-5 text-base font-semibold ml-2'>Dashboard</h1>

			{pageContent}
		</>
	)
}
