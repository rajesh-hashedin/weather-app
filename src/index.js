import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import City from "./components/city/city";
import Home from "./components/home/home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "city",
        element: <City />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
