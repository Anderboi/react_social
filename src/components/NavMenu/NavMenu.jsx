import nav from "./NavMenu.module.css";
import NavBlock from "./../common/NavBlock";

export const NavMenu = (props) => {

  return (
    <div className={nav.main_nav_block}>
      <NavBlock isAuth={props.isAuth} />
    </div>
  );
};
