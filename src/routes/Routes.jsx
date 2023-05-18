import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Error from "../layout/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />
  },
]);

export default router;