import { createBrowserRouter } from "react-router-dom";
import Navbar from "../layouts/navbar/navbar";
import Home from "../views/home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
