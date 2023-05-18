import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Error from "../layout/Error";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },
]);

export default router;