import nav from "./NavMenu.module.css";
import { Outlet, NavLink } from "react-router-dom";

export function NavMenu() {
  return (
    <nav className={nav.nav_menu}>
      <NavLink
        className={(navData) => (navData.isActive ? nav.active : nav.nav_item)}
        to="/profile"
        
      >
        Profile
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? nav.active : nav.nav_item)}
        to="/messeges"
      >
        Messeges
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? nav.active : nav.nav_item)}
        to="/news"
      >
        News
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? nav.active : nav.nav_item)}
        to="/music"
      >
        Music
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? nav.active : nav.nav_item)}
        to="/settings"
      >
        Settings
      </NavLink>
      {/* <Outlet /> */}
    </nav>
  );
}
