import React from "react";
import { connect } from "react-redux";
import nav from "./NavMenu.module.css";
import { getIsAuthorised } from "../../utilities/selectors/authSelector";
import NavBlock from "./../common/NavBlock";

const NavMenuContainer = (props) => {
  return (
    <div className={nav.main_nav_block}>
      <NavBlock isAuth={props.isAuth} isForMobile={false}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: getIsAuthorised(state),
  };
};

export default connect(mapStateToProps, null)(NavMenuContainer);
