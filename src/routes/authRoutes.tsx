import Login from "../views/authPages/login/login";
import Signin from "../views/authPages/signin/signin";

const authRoute = {
  path: "/",
  //   element: <Navbar />,
  children: [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
  ],
};

export default authRoute;
