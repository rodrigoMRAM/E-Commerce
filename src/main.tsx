import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { App } from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { LayoutMain } from "./components/Layout/LayoutMain";
import Home from "./pages/Home/Home";
// import { Cart } from "./pages/Cart/Cart";
import { CartProvider } from "./context/CartProvider";
import Checkout from "./pages/Checkout/Checkout";
import { QueryClient ,QueryClientProvider} from '@tanstack/react-query'
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";


const queryClient = new QueryClient()

const router = createBrowserRouter([
	{
		path: '/',
		element: <LayoutMain/>,
		children: [
			{
				index:true,element: <Home/>
			},
			{path:"/checkout", element: <Checkout/>}
		]
	},
	{
		path: "/login",element: <Login/>
	},
	{
		path:"/dashboard" , element: <Dashboard/>
	},
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		{/* <App /> */}
		<QueryClientProvider client={queryClient}>
		<CartProvider>
		<RouterProvider router={router}/>
		</CartProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
