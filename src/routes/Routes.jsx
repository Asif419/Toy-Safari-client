import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Error from "../layout/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Access/Login";
import Register from "../pages/Access/Register";
import AllToys from "../pages/Toys/AllToys/AllToys";
import MyToys from "../pages/Toys/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/toys',
        element: <AllToys />,
        loader: () => fetch('https://toy-safari-server.vercel.app/toys')
      },
      {
        path: '/myToys',
        element: <PrivateRoute><MyToys /></PrivateRoute>
      }
    ]
  },
]);

export default router;