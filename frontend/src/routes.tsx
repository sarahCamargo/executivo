import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import menuList from "./components/Menu/menuList";

const generateRoutes = () => {
  const routes = [];

  for (const menu of menuList) {
    if (menu.path && menu.element) {
      routes.push({ path: menu.path, element: menu.element });
    }

    if (menu.submenus) {
      for (const submenu of menu.submenus) {
        for (const subItem of submenu.submenuItems) {
          if (subItem.path && subItem.element) {
            routes.push({ path: subItem.path, element: subItem.element });
          }
        }
      }
    }
  }

  return routes;
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      ...generateRoutes(),
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export { router };
