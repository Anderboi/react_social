import head from "./Header.module.css";
import logo from "../../Asset 13MLogo.png";

export function Header() {
  return (
    <header className={head.header}>
      <img src={logo} alt="logo" className={head.logo_img}></img>
      <div className={head.logo_text}>MINIMAL</div>
    </header>
  );
}
