import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Main/Home';
import Order from './component/Order/Order';
import Products from './component/Products/Products';
import CartProductsLoader from './loaders/CartProductsLoader';
import Login from './component/login/Login';
import Register from './component/register/Register';
import AuthProviders from './providers/AuthProviders';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Products></Products>,
        loader:CartProductsLoader
      },
      {
        path: "/order",
        element: <Order></Order>,
        loader:CartProductsLoader
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProviders>
  <RouterProvider router={router} />
  </AuthProviders>
)