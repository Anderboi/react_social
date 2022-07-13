import { useState } from "react";
import { NavLink } from "react-router-dom";
import head from "./Header.module.css";
import nav from "../NavMenu/NavMenu.module.css";
import common from '../../Common.module.css'
//@ts-ignore
import logo from "../../Asset 13MLogo.png";
//@ts-ignore
import avatar from "../../assets/images/avatar.png";
import NavBlock from "../common/NavBlock";

type Props = {
  id?: number | null;
  email?: string | null;
  isAuthorised?: boolean | null;

  logoutTC: () => void;
};

export const Header: React.FC<Props> = (props): JSX.Element => {
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

        <img src={logo} alt="logo" className={head.header__logoImg}></img>
        <div className={head.header__burger} onClick={onClick}>
          burger
        </div>

        <div className={head.header__logoText}>MINIMAL</div>

        <UserInfoHeaderBlock
          id={props.id}
          email={props.email}
          logoutTC={props.logoutTC}
        />
        <LoginSignupHeaderBlock id={props.id} logoutTC={props.logoutTC} />
      </header>
      {state && <div className={nav.nav_back} onClick={blur}></div>}
      <div
        className={`${state ? nav.navBlock_mobile_open : nav.navBlock_mobile_close} ${
          nav.navBlock_mobile
        }`}
        onClick={blur} //TODO Заменить на логику - при переходе на страницу
      >
        <NavBlock isAuth={props.isAuthorised!} isForMobile={true} />
        {/*//! isAuth prop must be reviewed */}
      </div>
    </>
  );
};

const LoginSignupHeaderBlock: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className={!props.id ? head.loginBlock : common.display_none}>
      <NavLink to={"/login"} className={head.loginBlock__link}>
        <span>Log In</span>
      </NavLink>
      <span> | </span>
      <NavLink to={"/register"} className={head.loginBlock__link}>
        <span>Sign Up</span>
      </NavLink>
    </div>
  );
};

const UserInfoHeaderBlock: React.FC<Props> = ({ id, email, logoutTC }) => {
  const logout = () => {
    logoutTC();
  };

  return (
    <div className={id ? head.loginBlock : common.display_none}>
      <h5 className={head.loginBlock__link}>{email}</h5>
      <NavLink to={"/profile"}>
        <img src={avatar} alt="" className={head.loginBlock__avatar} />
      </NavLink>
      <a
        href="/"
        onClick={logout}
        className={head.loginBlock__link}
        data-testid="logout-btn"
      >
        Logout
      </a>
    </div>
  );
};
