import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function Layout() {
	return (
		<>
			<Header />
			<main className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
				<Outlet />
			</main>
		</>
	)
}
