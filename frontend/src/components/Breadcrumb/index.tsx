import { Breadcrumbs, Link, Stack, Typography, useTheme } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import startCase from "lodash/startCase";
import menuList from "../Menu/menuList";
import { NavigateNextOutlined } from "@mui/icons-material";

const findRoute = (path: string) => {
  for (const menu of menuList) {
    if (menu.path === path) return menu;

    if (menu.submenus) {
      for (const submenu of menu.submenus) {
        for (const subItem of submenu.submenuItems) {
          if (subItem.path === path) return subItem;
        }
      }
    }
  }
  return null;
};

const LayoutBreadCrumb = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const theme = useTheme();

  const paths = useMemo(() => pathname.split("/").filter(Boolean), [pathname]);

  if (!paths.length) return null;

  const renderBreadcrumbItem = (pathName: string, index: number) => {
    const to = `/${paths.slice(0, index + 1).join("/")}`;
    const isLast = index === paths.length - 1;

    const route = findRoute(to);
    const name = route?.name ?? startCase(pathName.replace(/-/g, " "));

    if (isLast || !route?.element) {
      return (
        <Typography component="span" key={to}>
          {name}
        </Typography>
      );
    }

    return (
      <Link
        underline="hover"
        onClick={() => navigate(to)}
        sx={{ cursor: "pointer" }}
        key={to}
      >
        {name}
      </Link>
    );
  };

  return (
    <Stack
      width="100%"
      py={2}
      px={2}
      direction="row"
      sx={{
        backgroundColor: theme.palette.grey[100],
        borderColor: theme.palette.grey[200],
      }}
      border={2}
    >
      <Breadcrumbs separator={<NavigateNextOutlined fontSize="small" />}>
        <Link
          underline="hover"
          onClick={() => navigate("/")}
          sx={{ cursor: "pointer" }}
          color="inherit"
        >
          Início
        </Link>
        {paths.map(renderBreadcrumbItem)}
      </Breadcrumbs>
    </Stack>
  );
};

export default LayoutBreadCrumb;
