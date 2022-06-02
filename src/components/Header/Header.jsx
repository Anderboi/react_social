import head from "./Header.module.css";
import logo from "../../Asset 13MLogo.png";
import { Link, NavLink } from "react-router-dom";
import avatar from "../../assets/images/avatar.png";

export function Header(props) {
  console.log(props);
  return (
    <header className={head.header}>
      <Link to="/profile">
        <img src={logo} alt="logo" className={head.logo_img}></img>
      </Link>

      <div className={head.logo_text}>MINIMAL</div>

      <div className={props.id !== null ? head.login_block : head.hide}>
        <h5>{props.email}</h5>
        <NavLink to={"/profile"}>
          <img src={avatar} alt="" className={head.avatar} />
        </NavLink>
      </div>

      <div className={props.id === null ? head.login_block : head.hide}>
        {/* <div className={head.login_block}> */}
        <NavLink to={"/login"} className={head.link}>
          <span>LogIn</span>
        </NavLink>
        <span> | </span>
        <NavLink to={"/register"} className={head.link}>
          <span>Sign Up</span>
        </NavLink>
      </div>
    </header>
  );
}
