import React from "react";
import ReactDOM from "react-dom/client";

import "./i18next/index.jsx";

import "./style/GlobalStyle.scss";  

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./page/Home/index.jsx";
import Blog from "./page/Blog/index.jsx"
import App from "./App.jsx";
import ErrorPage from "./page/ErrorPage/index.jsx";

import 'aos/dist/aos.css';
import AOS from 'aos'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/> ,
      },
      {
        path: "Blog",
        element: <Blog/>,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

AOS.init();
