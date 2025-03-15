import { CssBaseline, Toolbar, Typography } from "@mui/material";
import { StyledAppBar } from "./style";

type MainAppBarProps = {
  openDrawer: boolean;
};

function MainAppBar({ openDrawer }: MainAppBarProps) {
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: 10 }}
          >
            Executivo
          </Typography>
        </Toolbar>
      </StyledAppBar>
    </>
  );
}

export default MainAppBar;
