import { useState } from "react";
import MainAppBar from "../AppBar";
import MenuDrawer from "../Drawer";
import { Outlet } from "react-router-dom";
import MainContent from "../MainContent";

function Layout() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  return (
    <>
      <MainAppBar openDrawer={openDrawer} handleDrawerOpen={handleDrawerOpen} />
      <MenuDrawer
        openDrawer={openDrawer}
        handleDrawerClose={handleDrawerClose}
      />
      <MainContent openDrawer={openDrawer}>
        <Outlet />
      </MainContent>
    </>
  );
}

export default Layout;
