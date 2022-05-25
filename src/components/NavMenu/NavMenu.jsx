import nav from "./NavMenu.module.css";

export function NavMenu() {
  return (
    <nav className={nav.nav_menu}>
      <div className={nav.nav_item}>Profile</div>
      <div className={nav.nav_item}>Messeges</div>
      <div className={nav.nav_item}>News</div>
      <div className={nav.nav_item}>Music</div>
      <div className={nav.nav_item}>Settings</div>
    </nav>
  );
}
