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
import UpdateToy from "../pages/Toys/UpsartToy/UpdateToy";
import AddToy from "../pages/Toys/UpsartToy/AddToy";
import Profile from "../pages/Profile/Profile";
import Blogs from "../pages/Blogs/Blogs";

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
        path: '/toy/:id',
        element: <PrivateRoute><Toy /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toy-safari-server.vercel.app/toy/${params.id}`)
      },
      {
        path: '/myToys',
        element: <PrivateRoute><MyToys /></PrivateRoute>,
      },
      {
        path: '/myToys/:id',
        element: <PrivateRoute><UpdateToy /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toy-safari-server.vercel.app/toy/${params.id}`)
      },
      {
        path: '/addToy',
        element: <PrivateRoute><AddToy /></PrivateRoute>
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/blogs',
        element: <Blogs />
      }
    ]
  },
]);

export default router;