import { useState } from "react";
import MainAppBar from "./components/AppBar";
import MenuDrawer from "./components/Drawer";

function App() {
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
    </>
  );
}

export default App;
