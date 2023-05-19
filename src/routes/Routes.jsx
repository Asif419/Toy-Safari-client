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
import Toy from "../pages/Toys/Toy/Toy";

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
        loader: () => fetch('http://localhost:5000/toys')
      },
      {
        path: 'toys/:id',
        element: <PrivateRoute><Toy /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`)
      },
      {
        path: '/myToys/:id',
        element: <PrivateRoute><MyToys /></PrivateRoute>,
      }
    ]
  },
]);

export default router;