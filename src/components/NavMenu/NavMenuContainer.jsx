import React from "react";
import { connect } from "react-redux";
import { NavMenu } from "./NavMenu";
import { getIsAuthorised } from "../../utilities/selectors/authSelector";

const NavMenuContainer = (props) => {
  return <NavMenu isAuth={props.isAuth} />;
};

const mapStateToProps = (state) => {
  return {
    isAuth: getIsAuthorised(state),
  };
};

export default connect(mapStateToProps, null)(NavMenuContainer);
