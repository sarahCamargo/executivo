import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Submenu } from "../types";

function useMenu() {
  const navigate = useNavigate();

  const [menuPosition, setMenuPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);

  const [submenus, setSubmenus] = useState<Submenu[]>([]);

  const handleMenuPopUpClose = () => {
    setMenuPosition(null);
    setSubmenus([]);
  };

  const handleMenuPopUpOpen = (
    event: MouseEvent<HTMLButtonElement>,
    submenus: Submenu[],
    isDrawerOpen: boolean
  ) => {
    if (!submenus || submenus.length == 0) {
      navigate("/");
      handleMenuPopUpClose();
      return;
    }

    const buttonRect = event.currentTarget.getBoundingClientRect();

    setMenuPosition({
      top: buttonRect.top + window.scrollY,
      left: isDrawerOpen ? buttonRect.right + 10 : buttonRect.left + 56,
    });

    setSubmenus(submenus);
  };

  return { handleMenuPopUpOpen, handleMenuPopUpClose, menuPosition, submenus };
}

export { useMenu };
