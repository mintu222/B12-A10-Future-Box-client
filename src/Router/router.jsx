import { createBrowserRouter } from "react-router";

import FindPartners from "../Pages/FindPartners/FindPartners";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Root from "../Root/Root";
import Home from "../Pages/Home/home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "find_partners",
        element: <FindPartners></FindPartners>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/*",
        element: <h2>Error 404: not fount</h2>,
      },
    ],
  },
]);

export default router;
