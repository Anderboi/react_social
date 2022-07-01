import React, { useEffect } from "react";
import { connect } from "react-redux";
import { MainContent } from "./MainContent";
import { setUserInfoTC } from "./../../redux/mainPageReducer";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  setUserStatusTC,
  getUserStatusTC,
  setUserProfileTC,
  getUserProfileTC,
  uploadPhoto,
} from "./../../redux/mainPageReducer";
import {
  getUserInfo,
  getProfileStatus,
} from "../../utilities/selectors/profileSelector";
import { getAuthId } from "../../utilities/selectors/authSelector";
import withRouter from './../../hoc/withRouter';

const ProfileContainer = (props) => {
  useEffect(() => {
    const userId = props.router.params.userId || props.authId;
    props.setUserInfoTC(userId);
    props.getUserStatusTC(userId);
    props.getUserProfileTC(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.router.params.userId, props.authId]);

  return (
    <MainContent
      {...props}
      userInfo={props.userInfo}
      profileStatus={props.profileStatus}
      setUserStatusTC={props.setUserStatusTC}
      setUserProfileTC={props.setUserProfileTC}
      uploadPhoto={props.uploadPhoto}
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

export default compose(
  connect(mapStateToProps, {
    setUserInfoTC,
    setUserStatusTC,
    getUserStatusTC,
    setUserProfileTC,
    getUserProfileTC,
    uploadPhoto,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
