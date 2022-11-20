import React from 'react';
import Home from '../views/Home';
import Nav from '../components/menu/Nav';
import Footer from '../components/footer/Footer';

function Layout() {
	return (
		<>
			<Nav />
			<Home />
			<Footer />
		</>
	);
}

export default Layout;
