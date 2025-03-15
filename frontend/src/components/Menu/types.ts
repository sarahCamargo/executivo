import { ReactNode } from "react";

export interface Menu {
  name: string;
  icon: ReactNode;
  path?: string;
  submenus: Submenu[];
}

export interface Submenu {
  title: string;
  submenuItems: SubmenuItem[];
};

export interface SubmenuItem {
  name: string;
  path: string;
  key: string;
}
