import Navbar from "../layouts/navbar/navbar";
import Home from "../views/home/home";

const navbarRoute = {
  path: "/",
  element: <Navbar />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
  ],
};

export default navbarRoute;
