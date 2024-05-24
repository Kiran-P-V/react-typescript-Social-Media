import Navbar from "../layouts/navbar/navbar";
import Home from "../views/home/home";
import MessengerPage from "../views/messenger/messenger";

const navbarRoute = {
  path: "/",
  element: <Navbar />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/messenger",
      element: <MessengerPage />,
    },
  ],
};

export default navbarRoute;
