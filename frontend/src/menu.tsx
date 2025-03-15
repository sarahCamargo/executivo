import { EditRounded, HouseRounded } from "@mui/icons-material";

export default [
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
        menuItems: [
          {
            name: "Cadastro de Veículos",
            path: "/veiculos",
            key: "CADASTRO_VEICULOS",
          },
        ],
      },
      {
        title: "Clientes",
        menuItems: [
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
