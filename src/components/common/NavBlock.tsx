import React from "react";
import { NavLink } from "react-router-dom";
import common from "../../Common.module.css";
import nav from "./NavBlock.module.css";

interface Props {
  isForMobile?: boolean | null;
  isAuth: boolean;
}

const NavBlock: React.FC<Props> = (props): JSX.Element => {
  
  const linkClass = (navData:any) =>
    `${navData.isActive ? nav.active : nav.nav_item} ${common.hover}`;

  return (
    <div
      className={`${
        !props.isForMobile ? nav.navBlock : nav.navBlock_mobile
      }`}
    >
      <nav className={nav.nav_menu}>
        <NavLink className={linkClass} to="/profile" data-testid="profile-link">
          Profile
        </NavLink>
        <NavLink
          className={linkClass}
          to="/messages"
          data-testid="messages-link"
        >
          Messages
        </NavLink>
         <NavLink className={linkClass} to="/news" data-testid="news-link">
          News
        </NavLink> 
         <NavLink className={linkClass} to="/music" data-testid="music-link">
          Music
        </NavLink> 
        <br></br>

        <NavLink className={linkClass} to="/Users" data-testid="users-link">
          Users
        </NavLink>
        <br></br>
        <NavLink
          className={linkClass}
          to="/settings"
          data-testid="settings-link"
        >
          Settings
        </NavLink>
        {/* <Outlet /> */}
      </nav>

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

const FriendItem = (): JSX.Element => {
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

export default NavBlock;
