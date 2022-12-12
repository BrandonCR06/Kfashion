import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Catalog from './pages/Catalog'

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path='/catalog' element={<Catalog />} />
					<Route path='/' element={<MainPage />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
