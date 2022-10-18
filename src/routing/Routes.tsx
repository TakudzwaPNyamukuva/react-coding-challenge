import Dashboard from '@/pages/Dashboard'
import Page1 from '@/pages/Page1'
import Page2 from '@/pages/Page2'
import { Route, Routes as Router } from 'react-router-dom'

const Routes = () => {
	return (
		<>
			<Router>
				<Route path='/' element={<Dashboard />} />
				<Route path='/page1' element={<Page1 />} />
				<Route path='/page2' element={<Page2 />} />
			</Router>
		</>
	)
}

export default Routes
