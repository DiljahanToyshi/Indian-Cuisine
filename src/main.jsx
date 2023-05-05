import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main.jsx";
import Home from "./Components/Home.jsx";
import Chefs from "./Components/Chefs.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import Blog from "./Components/Blog.jsx";
import AuthProvider from "./Components/providers/AuthProvider.jsx";
import ChefDetails from "./Components/ChefDetails.jsx";
import ChefsLayout from "./Layout/ChefsLayout.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import PrivateRoute from "./Components/Routes/PrivateRoute.jsx";
import SignUp from "./Components/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/chefs",
        element: <Chefs></Chefs>,
        loader: () =>
          fetch(`https://assignment-10-server-diljahantoyshi.vercel.app/chefs`),
      },

      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "chefs",
    element: <ChefsLayout></ChefsLayout>,
    children: [
      {
        path: "/chefs/:id",
        element: (
          <PrivateRoute>
            <ChefDetails></ChefDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-diljahantoyshi.vercel.app/chefs/${params.id}`
          ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>{" "}
  </React.StrictMode>
);
