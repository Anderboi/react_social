import React from 'react'
//@ts-ignore
import nav from "./NavMenu.module.css";
//@ts-ignore
import NavBlock from "../common/NavBlock";


type Props = {
  isAuth: boolean;
};

export const NavMenu: React.FC<Props> = (props): JSX.Element => {
  
  return (
    <div className={nav.navBlock}>
      <NavBlock isAuth={props.isAuth} />
    </div>
  );
};
