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
    element: <Layout />,
    // errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      // errorElement: <ErrorPage />,
      // { index: true, element: <Home /> },
      {
        path: "/learnsphere/",
        element: <Home />,
      },
      {
        path: "/learnsphere/sign-up",
        element: <SignUp />,
      },
      {
        path: "/learnsphere/sign-in",
        element: <SignIn />,
      },

      {
        path: "/learnsphere/profile/student",
        element: <Profile />,
      },
      {
        path: "/learnsphere/profile/teacher",
        element: <Profile />,
      },
      {
        path: "/learnsphere/course",
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
