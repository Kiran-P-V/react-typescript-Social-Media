import { createBrowserRouter } from "react-router-dom";

import navbarRoute from "./navbarRoutes";
import authRoute from "./authRoutes";

const router = createBrowserRouter([navbarRoute, authRoute]);

export default router;
