import { List } from "@mui/material";
import MenuDrawerList from "./MenuDrawer";
import PopupMenu from "./PopupMenu";
import { useMenu } from "./hooks/useMenu";
import menuList from "./menuList";

type MenuProps = {
  isDrawerOpen: boolean;
};

function Menu({ isDrawerOpen }: MenuProps) {
  const {
    menuPosition,
    handleMenuPopUpOpen,
    handleMenuPopUpClose,
    submenus,
  } = useMenu();

  return (
    <List>
      {menuList.map((menuItem) => (
        <MenuDrawerList
          key={menuItem.name}
          menuItem={menuItem}
          isDrawerOpen={isDrawerOpen}
          handleMenuPopUpOpen={handleMenuPopUpOpen}
        />
      ))}
      <PopupMenu
        handleMenuPopUpClose={handleMenuPopUpClose}
        submenus={submenus}
        menuPosition={menuPosition}
      />
    </List>
  );
}

export default Menu;
