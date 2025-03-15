import { ChevronLeftRounded, MenuRounded } from "@mui/icons-material";
import { Divider, IconButton } from "@mui/material";
import { DrawerHeader, StyledDrawer } from "./style";
import Menu from "../Menu";

type MenuDrawerProps = {
  isDrawerOpen: boolean;
  handleDrawerOpen: () => void;
};

function MenuDrawer({ isDrawerOpen, handleDrawerOpen }: MenuDrawerProps) {
  return (
    <StyledDrawer variant="permanent" open={isDrawerOpen}>
      <DrawerHeader>
        <IconButton sx={{ color: "white" }} onClick={handleDrawerOpen}>
          {isDrawerOpen ? <ChevronLeftRounded /> : <MenuRounded />}
        </IconButton>
      </DrawerHeader>
      <Menu isDrawerOpen={isDrawerOpen} />
      <Divider />
    </StyledDrawer>
  );
}

export default MenuDrawer;
