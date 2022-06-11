import React from "react";
import { connect } from "react-redux";
import { NavMenu } from "./NavMenu";
import { getIsAuthorised } from "../../utilities/selectors/authSelector";

class NavMenuContainer extends React.Component {
  render() {
    return (
      <>
        <NavMenu isAuth={this.props.isAuth} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: getIsAuthorised(state),
  };
};

export default connect(mapStateToProps, null)(NavMenuContainer);
