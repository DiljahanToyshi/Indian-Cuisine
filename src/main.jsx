import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main.jsx'
import Home from './Components/Home.jsx'
import Chefs from './Components/Chefs.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import Blog from './Components/Blog.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/chef/:id",
        element: <Chefs></Chefs>,
        loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`),
      },
      {
        path: "/meal/:id",
        element: <Chefs></Chefs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
