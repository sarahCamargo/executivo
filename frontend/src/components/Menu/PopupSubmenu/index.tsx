import { Divider, MenuItem } from "@mui/material";
import { Submenu } from "../types";
import { useNavigate } from "react-router-dom";

type PopupSubmenuProps = {
  submenu: Submenu;
  isLastMenu: boolean;
  handleMenuPopUpClose: () => void;
};

function PopupSubmenu({
  submenu,
  isLastMenu,
  handleMenuPopUpClose,
}: PopupSubmenuProps) {
  const navigate = useNavigate();

  const handleNavigate = (route: string) => {
    navigate(route);
    handleMenuPopUpClose();
  };

  return (
    <>
      <MenuItem sx={{ fontWeight: "bold", pointerEvents: "none" }}>
        {submenu.title}
      </MenuItem>
      {submenu.submenuItems.map((item) => (
        <MenuItem key={item.key} onClick={() => handleNavigate(item.path)}>
          {item.name}
        </MenuItem>
      ))}
      {!isLastMenu && <Divider />}
    </>
  );
}

export default PopupSubmenu;
