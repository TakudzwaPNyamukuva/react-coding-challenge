import useAppContext from '@/hooks/useAppContext'

export default function Dashboard() {
	const context = useAppContext()
	const pinnedData = context?.pinnedData

	console.log({ pinnedData })

	let pageContent
	if (pinnedData !== undefined) {
		pageContent = (
			<div className='px-2 flex flex-wrap gap-5'>
				{pinnedData?.map((card, index) => {
					return (
						<div
							key={index}
							className={`${card?.bg} ${card?.color} h-32 w-32 rounded-lg flex justify-center items-center capitalize font-semibold cursor-pointer`}
						>
							{card?.name}
						</div>
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
