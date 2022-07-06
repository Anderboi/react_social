import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../redux/reduxStore";

import nav from "./NavMenu.module.css";

import { getIsAuthorised } from "../../utilities/selectors/authSelector";

import NavBlock from "../common/NavBlock";

type Props = {
  isAuth: boolean;
};

const NavMenuContainer: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className={nav.main_nav_block}>
      <NavBlock isAuth={props.isAuth} isForMobile={false} />
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    isAuth: getIsAuthorised(state),
  };
};

export default connect(mapStateToProps, null)(NavMenuContainer);
