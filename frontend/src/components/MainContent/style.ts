import { Theme } from "@mui/material";
import { SxProps } from "@mui/system";

const drawerWidth = 250;

export const mainContentStyles = (openDrawer: boolean): SxProps<Theme> => (theme) => ({
  pt: `calc(${theme.mixins.toolbar.minHeight}px + 10px)`,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ml: openDrawer ? `${drawerWidth}px` : `calc(${theme.spacing(8)} + 1px)`,
});
