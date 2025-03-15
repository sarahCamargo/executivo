import { Box } from "@mui/material";
import { ReactNode } from "react";
import { mainContentStyles } from "./style";

interface MainContentProps {
  children: ReactNode;
  openDrawer: boolean;
}

function MainContent({ children, openDrawer }: MainContentProps) {
  return (
    <Box component="main" sx={mainContentStyles(openDrawer)}>
      {children}
    </Box>
  );
}

export default MainContent;
