import { MenuRounded } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { StyledAppBar } from "./style";

type MainAppBarProps = {
  openDrawer: boolean;
  handleDrawerOpen: () => void;
};

function MainAppBar({ openDrawer, handleDrawerOpen }: MainAppBarProps) {
  return (
    <>
      <CssBaseline />
      <StyledAppBar
        position="fixed"
        color="default"
        elevation={0}
        open={openDrawer}
      >
        <Toolbar disableGutters>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={[
              { marginLeft: 1 },
              openDrawer && { display: "none" },
            ]}
            onClick={handleDrawerOpen}
          >
            <MenuRounded />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 5 }}>
            Executivo
          </Typography>
        </Toolbar>
      </StyledAppBar>
    </>
  );
}

export default MainAppBar;
