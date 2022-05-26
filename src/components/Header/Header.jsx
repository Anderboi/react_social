import head from "./Header.module.css";
import logo from "../../Asset 13MLogo.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className={head.header}>
      <Link to="/profile">
        <img src={logo} alt="logo" className={head.logo_img}></img>
      </Link>

      <div className={head.logo_text}>MINIMAL</div>
    </header>
  );
}
