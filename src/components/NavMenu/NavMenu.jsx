import nav from "./NavMenu.module.css";
import common from "../../Common.module.css";
import { NavLink } from "react-router-dom";

export const NavMenu = (props) => {
  const linkClass = (navData) =>
    `${navData.isActive ? nav.active : nav.nav_item} ${common.hover}`;

  return (
    <div className={nav.main_nav_block}>
      <nav className={nav.nav_menu}>
        <NavLink className={linkClass} to="/profile">
          Profile
        </NavLink>
        <NavLink className={linkClass} to="/messages">
          Messages
        </NavLink>
        <NavLink className={linkClass} to="/news">
          News
        </NavLink>
        <NavLink className={linkClass} to="/music">
          Music
        </NavLink>
        <br></br>

        <NavLink className={linkClass} to="/Users">
          Users
        </NavLink>
        <br></br>
        <NavLink className={linkClass} to="/settings">
          Settings
        </NavLink>
        {/* <Outlet /> */}
      </nav>
      {/* //TODO Add isAuth prop n logic */}
      <div className={props.isAuth ? nav.nav_menu : common.display_none}>
        <h3>Friends</h3>
        <div className={nav.friends_block}>
          <FriendItem />
          <FriendItem />
          <FriendItem />
        </div>
      </div>
    </div>
  );
};

const FriendItem = () => {
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
};
