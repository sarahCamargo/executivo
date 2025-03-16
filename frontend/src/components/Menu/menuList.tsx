import { EditRounded, HouseRounded } from "@mui/icons-material";
import { Menu } from "./types";
import Cadastros from "../../pages/Cadastros";
import Home from "../../pages/Home";

const menuList: Menu[] = [
  {
    name: "Home",
    icon: <HouseRounded />,
    path: "/",
    submenus: [],
    element: <Home />,
  },
  {
    name: "Cadastros",
    icon: <EditRounded />,
    submenus: [
      {
        title: "Veículos",
        submenuItems: [
          {
            name: "Cadastro de Veículos",
            path: "cadastro/veiculos",
            key: "CADASTRO_VEICULOS",
            element: <Cadastros />,
          },
        ],
      },
      {
        title: "Clientes",
        submenuItems: [
          {
            name: "Cadastro de Clientes",
            path: "/clientes",
            key: "CADASTRO_CLIENTES",
          },
        ],
      },
    ],
  },
];

export default menuList;
