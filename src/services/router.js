import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/home/home";
import City from "../components/city/city";

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

export default router;
