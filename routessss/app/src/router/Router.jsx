import { createBrowserRouter } from "react-router-dom";
import Home from "../CompTwo/Home";
import About from "../CompTwo/About";
import Layout from "../layout/Layout";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
