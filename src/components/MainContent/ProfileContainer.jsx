import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { MainContent } from "./MainContent";
import { setUserInfoTC } from "./../../redux/mainPageReducer";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  setUserStatusTC,
  getUserStatusTC,
} from "./../../redux/mainPageReducer";
import {
  getUserInfo,
  getProfileStatus,
} from "../../utilities/selectors/profileSelector";
import { getAuthId } from "../../utilities/selectors/authSelector";

const ProfileContainer = (props) => {

  useEffect(() => {
    const userId = props.router.params.userId
      ? props.router.params.userId
      : props.authId;
    props.setUserInfoTC(userId);
    props.getUserStatusTC(userId);
  }, [props.router.params.userId]);

  if (props.userInfo === null) {
  }
  return (
    <MainContent
      {...props}
      userInfo={props.userInfo}
      profileStatus={props.profileStatus}
      setUserStatusTC={props.setUserStatusTC}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: getUserInfo(state),
    authId: getAuthId(state),
    profileStatus: getProfileStatus(state),
  };
};

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default compose(
  connect(mapStateToProps, { setUserInfoTC, setUserStatusTC, getUserStatusTC }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
