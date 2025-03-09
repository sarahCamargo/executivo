import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import MainAppBar from "./components/AppBar";

const router = createBrowserRouter([
  {
    element: <MainAppBar />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export { router };
