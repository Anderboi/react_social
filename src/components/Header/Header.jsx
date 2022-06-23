import head from "./Header.module.css";
import logo from "../../Asset 13MLogo.png";
import avatar from "../../assets/images/avatar.png";
import nav from "../NavMenu/NavMenu.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import NavBlock from "./../common/NavBlock";

export const Header = (props) => {
  const [state, setState] = useState(false);

  const onClick = () => {
    !state ? setState(true) : setState(false);
  };

  const blur = () => {
    setState(false);
  };

  return (
    <>
      <header className={head.header}>
        <img
          src={logo}
          alt="logo"
          className={head.logo_img}
          onClick={onClick}
        ></img>

        <div className={head.logo_text}>MINIMAL</div>

        <UserInfoHeaderBlock
          id={props.id}
          email={props.email}
          logoutTC={props.logoutTC}
        />
        <LoginSignupHeaderBlock id={props.id} />
      </header>
      <div
        className={`${state ? nav.m_navbar_open : nav.m_navbar_close} ${
          nav.main_nav_block_mobile
        }`}
        onClick={blur}
      >
        <NavBlock isAuth={props.isAuth} isForMobile={true} />
      </div>
    </>
  );
};

const LoginSignupHeaderBlock = (props) => {
  return (
    <div className={!props.id ? head.login_block : head.display_none}>
      <NavLink to={"/login"} className={head.link}>
        <span>Log In</span>
      </NavLink>
      <span> | </span>
      <NavLink to={"/register"} className={head.link}>
        <span>Sign Up</span>
      </NavLink>
    </div>
  );
};

const UserInfoHeaderBlock = ({ id, email, logoutTC }) => {
  const logout = () => {
    logoutTC();
  };

  return (
    <div className={id ? head.login_block : head.hide}>
      <h5 className={head.link}>{email}</h5>
      <NavLink to={"/profile"}>
        <img src={avatar} alt="" className={head.avatar} />
      </NavLink>
      <a
        href="/"
        onClick={logout}
        className={head.link}
        data-testid="logout-btn"
      >
        Logout
      </a>
    </div>
  );
};
