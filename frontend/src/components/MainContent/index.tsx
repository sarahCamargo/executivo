import { Box, Stack } from "@mui/material";
import { ReactNode } from "react";
import { mainContentStyles } from "./style";
import LayoutBreadCrumb from "../Breadcrumb";

interface MainContentProps {
  children: ReactNode;
  openDrawer: boolean;
}

const MainContent = ({ children, openDrawer }: MainContentProps) => {
  return (
    <Stack sx={mainContentStyles(openDrawer)} direction="column">
      <LayoutBreadCrumb />
      <Box p={2}>{children}</Box>
    </Stack>
  );
};

export default MainContent;
