import { EditRounded, HouseRounded } from "@mui/icons-material";
import { Menu } from "./types";

const menuList: Menu[] = [
  {
    name: "Home",
    icon: <HouseRounded />,
    path: "/",
    submenus: [],
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
            path: "/veiculos",
            key: "CADASTRO_VEICULOS",
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
