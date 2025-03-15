import { useState, MouseEvent } from "react";
import {
  ChevronLeftRounded,
  EditRounded,
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
  useTheme,
} from "@mui/material";
import { DrawerHeader, StyledDrawer } from "./style";
import { useNavigate } from "react-router-dom";

type MenuDrawerProps = {
  openDrawer: boolean;
  handleDrawerOpen: () => void;
};

function MenuDrawer({ openDrawer: open, handleDrawerOpen }: MenuDrawerProps) {
  const theme = useTheme();
  const navigate = useNavigate();

  const [menuPosition, setMenuPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);

  const handleMenuOpen = (event: MouseEvent<HTMLButtonElement>) => {
    const buttonRect = event.currentTarget.getBoundingClientRect();

    setMenuPosition({
      top: buttonRect.top + window.scrollY,
      left: open ? buttonRect.right + 10 : buttonRect.left + 56,
    });
  };

  const handleMenuClose = () => {
    setMenuPosition(null);
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
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            component="button"
            onClick={handleMenuOpen}
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
              <EditRounded />
            </ListItemIcon>
            <ListItemText
              primary={"Cadastros"}
              sx={{ opacity: open ? 1 : 0, color: "white" }}
            />
          </ListItemButton>
        </ListItem>

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
          <MenuItem onClick={() => handleNavigate("/cadastros")}>
            Veículos
          </MenuItem>
        </Menu>
      </List>

      <Divider />
    </StyledDrawer>
  );
}

export default MenuDrawer;
