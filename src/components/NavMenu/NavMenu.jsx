import nav from "./NavMenu.module.css";
import { NavLink } from "react-router-dom";

export function NavMenu() {
  return (
    <div className={nav.main_nav_block}>
      <nav className={nav.nav_menu}>
        <NavLink
          className={(navData) =>
            navData.isActive ? nav.active : nav.nav_item
          }
          to="/profile"
        >
          Profile
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? nav.active : nav.nav_item
          }
          to="/messeges"
        >
          Messeges
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? nav.active : nav.nav_item
          }
          to="/news"
        >
          News
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? nav.active : nav.nav_item
          }
          to="/music"
        >
          Music
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? nav.active : nav.nav_item
          }
          to="/settings"
        >
          Settings
        </NavLink>
        {/* <Outlet /> */}
      </nav>
      <div className={nav.nav_menu}>
        <h3>Friends</h3>
        <div className={nav.friends_block}>
          <FriendItem />
          <FriendItem />
          <FriendItem />
        </div>
      </div>
    </div>
  );
}



function FriendItem() {
  return (
    <div className={nav.friends_block_item}>
      <img
        className={nav.friends_block_img}
        src="https://cdn-icons-png.flaticon.com/512/4139/4139970.png"
        alt="icon"
      />
      <span>Andrei</span>
    </div>
  );
}
