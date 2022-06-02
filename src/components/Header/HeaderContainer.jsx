import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import { setPage, toggleLoading } from "./../../redux/usersReducer";
import { setUserData } from "../../redux/authReducer";
// import { Preloader } from "../common/Preloader";
import { Header } from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    // this.props.toggleLoading(true);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        //? withCredentials - allow cookie sending
        withCredentials: true,
      })
      .then((response) => {
        
        // this.props.toggleLoading(false);
        if (response.data.resultCode === 0) {
          this.props.setUserData(response.data.data);
        }
      });
  }

  render() {
    if (this.props.id !== null) {
      return (
        <>
          {/* {this.props.isLoading ? <Preloader /> : null} */}
          <Header {...this.props} />
        </>
      );
    }
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
  // setPage,
  // toggleLoading,
})(HeaderContainer);
