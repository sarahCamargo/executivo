import { ChevronLeftRounded } from "@mui/icons-material";
import { Divider, IconButton, useTheme } from "@mui/material";
import { DrawerHeader, StyledDrawer } from "./styles/style";

type MenuDrawerProps = {
  openDrawer: boolean;
  handleDrawerClose: () => void;
};

function MenuDrawer({ openDrawer: open, handleDrawerClose }: MenuDrawerProps) {
  const theme = useTheme();

  return (
    <StyledDrawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" && <ChevronLeftRounded />}
        </IconButton>
      </DrawerHeader>
      <Divider />
    </StyledDrawer>
  );
}

export default MenuDrawer;
