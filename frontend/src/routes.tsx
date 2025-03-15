import { createBrowserRouter, Navigate } from "react-router-dom";
import Cadastros from "./pages/Cadastros";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "veiculos",
        element: <Cadastros />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export { router };
