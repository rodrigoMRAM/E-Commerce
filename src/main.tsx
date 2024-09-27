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
	}
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		{/* <App /> */}
		<CartProvider>

		<RouterProvider router={router}/>
		</CartProvider>
	</React.StrictMode>
);
