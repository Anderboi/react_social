import React from "react";
import { connect } from "react-redux";
import { setUserData, authData, logoutTC } from "../../redux/authReducer";
import { Header } from "./Header";
import { getIsLoading } from "./../../utilities/selectors/usersSelector";
import {
  getAuthId,
  getAuthLogin,
  getAuthEmail,
} from "./../../utilities/selectors/authSelector";

const HeaderContainer = (props) => {
  return (
    <>
      <Header {...props} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    id: getAuthId(state),
    login: getAuthLogin(state),
    email: getAuthEmail(state),
    isLoading: getIsLoading(state),
  };
};

export default connect(mapStateToProps, {
  setUserData,
  authData,
  logoutTC,
})(HeaderContainer);
