import { MenuRounded } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { StyledAppBar } from "./styles/style";

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
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={[
                { mr: 2 },
                { marginRight: 5 },
                openDrawer && { display: "none" },
              ]}
              onClick={handleDrawerOpen}
            >
              <MenuRounded />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Executivo
            </Typography>
          </Toolbar>
        </Container>
      </StyledAppBar>
    </>
  );
}

export default MainAppBar;
