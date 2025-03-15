import { useState, MouseEvent } from "react";
import {
  ChevronLeftRounded,
  MenuRounded,
} from "@mui/icons-material";
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { DrawerHeader, StyledDrawer } from "./style";
import { useNavigate } from "react-router-dom";
import menu from "../../menu";

type MenuDrawerProps = {
  openDrawer: boolean;
  handleDrawerOpen: () => void;
};

function MenuDrawer({ openDrawer: open, handleDrawerOpen }: MenuDrawerProps) {
  const navigate = useNavigate();
  const menus = menu;

  const [menuPosition, setMenuPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);

  const [subMenu, setSubMenu] = useState<
    {
      title: string;
      menuItems: [{ name: string; path: string; key: string }];
    }[]
  >([]);

  const handleMenuOpen = (
    event: MouseEvent<HTMLButtonElement>,
    submenus: any
  ) => {
    if (!submenus || submenus.length == 0) {
      navigate("/");
      handleMenuClose();
      return;
    }

    const buttonRect = event.currentTarget.getBoundingClientRect();

    setMenuPosition({
      top: buttonRect.top + window.scrollY,
      left: open ? buttonRect.right + 10 : buttonRect.left + 56,
    });

    if (submenus) {
      setSubMenu(submenus);
    }
  };

  const handleMenuClose = () => {
    setMenuPosition(null);
    setSubMenu([]);
  };

  const handleNavigate = (route: string) => {
    navigate(route);
    handleMenuClose();
  };

  return (
    <StyledDrawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton sx={{ color: "white" }} onClick={handleDrawerOpen}>
          {open ? <ChevronLeftRounded /> : <MenuRounded />}
        </IconButton>
      </DrawerHeader>

      <List>
        {menus.map((menuItem) => (
          <ListItem
            key={menuItem.name}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              component="button"
              onClick={(event) => handleMenuOpen(event, menuItem.submenus)}
              sx={{
                minHeight: 48,
                px: 2.5,
                justifyContent: open ? "initial" : "center",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: "center",
                  mr: open ? 3 : "auto",
                  color: "white",
                }}
              >
                {menuItem.icon}
              </ListItemIcon>
              <ListItemText
                primary={menuItem.name}
                sx={{ opacity: open ? 1 : 0, color: "white" }}
              />
            </ListItemButton>
          </ListItem>
        ))}

        <Menu
          open={Boolean(menuPosition)}
          onClose={handleMenuClose}
          anchorReference="anchorPosition"
          anchorPosition={
            menuPosition
              ? { top: menuPosition.top, left: menuPosition.left }
              : undefined
          }
          elevation={4}
          slotProps={{
            paper: {
              sx: {
                borderRadius: "8px",
              },
            },
          }}
        >
          {subMenu.map((submenu, index) => (
            <div key={submenu.title}>
              <MenuItem sx={{ fontWeight: "bold", pointerEvents: "none" }}>
                {submenu.title}
              </MenuItem>
              {submenu.menuItems.map((item) => (
                <MenuItem
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                >
                  {item.name}
                </MenuItem>
              ))}
              {index < subMenu.length - 1 && <Divider />}
            </div>
          ))}
        </Menu>
      </List>

      <Divider />
    </StyledDrawer>
  );
}

export default MenuDrawer;
