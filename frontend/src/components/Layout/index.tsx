import { useState } from "react";
import MainAppBar from "../AppBar";
import MenuDrawer from "../Drawer";
import { Outlet } from "react-router-dom";
import MainContent from "../MainContent";

function Layout() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    if (openDrawer) {
      setOpenDrawer(false);
    } else {
      setOpenDrawer(true);
    }
  };

  return (
    <>
      <MainAppBar openDrawer={openDrawer} />
      <MenuDrawer openDrawer={openDrawer} handleDrawerOpen={handleDrawerOpen} />
      <MainContent openDrawer={openDrawer}>
        <Outlet />
      </MainContent>
    </>
  );
}

export default Layout;
