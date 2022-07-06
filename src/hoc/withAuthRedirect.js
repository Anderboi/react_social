import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/reduxStore";

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthorised,
  };
};

//! Приходит
export const withAuthRedirect = (WrapedComponent) => {
  const RedirectComponent = (props) => {
    if (!props.isAuth) {
      return <Navigate to={"/login"} />;
    }
    return <WrapedComponent {...props} />;
  };

  //! Оборачивается
  let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);

  //! Уходит
  return ConnectedRedirectComponent;
};
