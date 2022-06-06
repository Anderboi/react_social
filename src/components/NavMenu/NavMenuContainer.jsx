import React from "react";
import connect from "./../Users/UsersContainer";
import { NavMenu } from "./NavMenu";

class NavMenuContainer extends React.Component {
  render() {
    return <NavMenu isAuth={this.props.isAuth} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthorised,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavMenuContainer);
