import { useToggle } from '@/hooks/useToggle'

export default function Page2() {
	const { data, handleClick } = useToggle()
	const pageData = data?.filter((item) => item?.page === 2)

	let pageContent
	if (pageData !== undefined) {
		pageContent = (
			<div className='px-2 flex flex-wrap gap-5'>
				{pageData?.map((card, index) => {
					return (
						<button
							onClick={() => handleClick(card)}
							key={index}
							className={`${card?.bg} ${card?.color} h-32 w-32 rounded-lg flex flex-col justify-center items-center capitalize font-semibold cursor-pointer`}
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
			<h1 className='py-5 text-base font-semibold ml-2'>Page 2</h1>

			{pageContent}
		</>
	)
}
