import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { MouseEvent } from "react";
import { Menu, Submenu } from "../types";

type MenuDrawerProps = {
  menuItem: Menu;
  isDrawerOpen: boolean;
  handleMenuPopUpOpen: (
    event: MouseEvent<HTMLButtonElement>,
    submenus: Submenu[],
    isDrawerOpen: boolean
  ) => void;
};

function MenuDrawer({
  menuItem,
  isDrawerOpen,
  handleMenuPopUpOpen,
}: MenuDrawerProps) {
  return (
    <ListItem disablePadding sx={{ display: "block" }}>
      <ListItemButton
        component="button"
        onClick={(event) =>
          handleMenuPopUpOpen(event, menuItem.submenus, isDrawerOpen)
        }
        sx={{
          minHeight: 48,
          px: 2.5,
          justifyContent: isDrawerOpen ? "initial" : "center",
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            justifyContent: "center",
            mr: isDrawerOpen ? 3 : "auto",
            color: "white",
          }}
        >
          {menuItem.icon}
        </ListItemIcon>
        <ListItemText
          primary={menuItem.name}
          sx={{ opacity: isDrawerOpen ? 1 : 0, color: "white" }}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default MenuDrawer;
