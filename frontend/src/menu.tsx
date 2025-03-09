export default [
  {
    name: "Home",
    icon: "other_houses_outlined",
    path: "/",
    menuList: [],
  },
  {
    name: "Cadastros",
    icon: "",
    menuList: [
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
