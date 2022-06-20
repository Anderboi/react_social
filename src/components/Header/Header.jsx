import head from "./Header.module.css";
import logo from "../../Asset 13MLogo.png";
import { Link, NavLink } from "react-router-dom";
import avatar from "../../assets/images/avatar.png";

export const Header = (props) => {
  return (
    <header className={head.header}>
      <Link to="/profile">
        <img src={logo} alt="logo" className={head.logo_img}></img>
      </Link>

      <div className={head.logo_text}>MINIMAL</div>

      <UserInfoHeaderBlock
        id={props.id}
        email={props.email}
        logoutTC={props.logoutTC}
      />
      <LoginSignupHeaderBlock id={props.id} />
    </header>
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

  return <div className={id ? head.login_block : head.hide}>
    <h5 className={head.link}>{email}</h5>
    <NavLink to={"/profile"}>
      <img src={avatar} alt="" className={head.avatar} />
    </NavLink>
    <a href="/" onClick={logout} className={head.link} data-testid='logout-btn'>
      Logout
    </a>
  </div>;
};
