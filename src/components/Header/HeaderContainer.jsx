import React from "react";
import { connect } from "react-redux";
import { setUserData, authData, logoutTC } from "../../redux/authReducer";
import { Header } from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authData();
  }

  render() {
    // if (this.props.id !== null) {
      return (
        <>
          {/* {this.props.isLoading ? <Preloader /> : null} */}
          <Header {...this.props} />
        </>
      );
    // }
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    isLoading: state.usersPage.isLoading,
  };
};

export default connect(mapStateToProps, {
  setUserData,
  authData,
  logoutTC,
})(HeaderContainer);
