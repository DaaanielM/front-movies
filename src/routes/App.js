import React from 'react';
import Nav from '../components/menu/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import Proximamente from '../views/Proximamente';
import Promociones from '../views/Promociones';
import Footer from '../views/ViewFooter';
function App() {
	return (
		<Router>
			<Nav />
			{/* <Search /> */}
			<Routes path='/*'>
				<Route index path='/' element={<Home />} />
				<Route path='/Proximamente' element={<Proximamente />} />
				<Route path='/Promociones' element={<Promociones />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
