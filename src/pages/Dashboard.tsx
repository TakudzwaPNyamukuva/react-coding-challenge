import { useToggle } from '@/hooks/useToggle'

export default function Dashboard() {
	const { data, handleClick } = useToggle()
	const pinnedData = data?.filter((item) => item?.pinned)

	let pageContent
	if (pinnedData?.length !== 0) {
		pageContent = (
			<div className='px-2 pb-5 flex flex-wrap gap-5 justify-center lg:justify-start'>
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
