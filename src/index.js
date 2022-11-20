import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import Home from './views/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Info from './components/info/Info';
import Admin from './components/admin/Admin';
import Promociones from './views/Promociones';
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/info/:id',
		element: <Info />,
	},
	{
		path: '/promociones',
		element: <Promociones />,
	},
	{
		path: '/admin',
		element: <Admin />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
