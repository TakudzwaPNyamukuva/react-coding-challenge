import Layout from '@/components/Layout'
import Dashboard from '@/pages/Dashboard'
import Page1 from '@/pages/Page1'
import Page2 from '@/pages/Page2'
import { Route, Routes as Router } from 'react-router-dom'

const Routes = () => {
	return (
		<>
			<Router>
				<Route element={<Layout />}>
					<Route path='/' element={<Dashboard />} />
					<Route path='/page1' element={<Page1 />} />
					<Route path='/page2' element={<Page2 />} />
				</Route>
			</Router>
		</>
	)
}

export default Routes
