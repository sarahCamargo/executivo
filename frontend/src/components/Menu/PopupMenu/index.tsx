import { Menu } from "@mui/material";
import PopupSubmenu from "../PopupSubmenu";
import { Submenu } from "../types";

type PopupMenuProps = {
  handleMenuPopUpClose: () => void;
  submenus: Submenu[];
  menuPosition: {
    top: number;
    left: number;
  } | null;
};

function PopupMenu({
  handleMenuPopUpClose,
  submenus,
  menuPosition,
}: PopupMenuProps) {
  return (
    <Menu
      open={Boolean(menuPosition)}
      onClose={handleMenuPopUpClose}
      anchorReference="anchorPosition"
      anchorPosition={
        menuPosition
          ? { top: menuPosition.top, left: menuPosition.left }
          : undefined
      }
      elevation={4}
      slotProps={{
        paper: {
          sx: {
            borderRadius: "8px",
          },
        },
      }}
    >
      {submenus.map((submenu, index) => (
        <PopupSubmenu
          key={submenu.title}
          submenu={submenu}
          isLastMenu={index < submenus.length - 1}
          handleMenuPopUpClose={handleMenuPopUpClose}
        />
      ))}
    </Menu>
  );
}

export default PopupMenu;
