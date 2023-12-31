import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Profile from "./pages/Profile/Profile";
import Course from "./pages/Course/Course";

const router = createBrowserRouter([
  {
    path: "/learnsphere/",
    //path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      // errorElement: <ErrorPage />,
      { index: true, element: <Home /> },
      {
        path: "register",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <SignIn />,
      },

      {
        path: "profile/student",
        element: <Profile />,
      },
      {
        path: "profile/teacher",
        element: <Profile />,
      },
      {
        path: "course",
        element: <Course />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
