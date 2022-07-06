import React, { useEffect } from "react";
import { connect } from "react-redux";
import { MainContent } from "./MainContent";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  setUserInfoTC,
  setUserStatusTC,
  getUserStatusTC,
  setUserProfileTC,
  getUserProfileTC,
  uploadPhoto,
} from "../../redux/mainPageReducer";
import {
  getUserInfo,
  getProfileStatus,
} from "../../utilities/selectors/profileSelector";
import { getAuthId } from "../../utilities/selectors/authSelector";
import withRouter from "../../hoc/withRouter";
import { RootState } from "../../redux/reduxStore";
import { UserInfo } from "../../types/types";

type MapStateToProps = {
  userInfo: UserInfo | null;
  authId: number | null;
  profileStatus: string | null;
};
type MapDispatchToProps = {
  setUserInfoTC: (userId: number) => void;
  setUserStatusTC: () => void;
  getUserStatusTC: (userId: number) => void;
  setUserProfileTC: (profileData: UserInfo) => void;
  getUserProfileTC: (userId: number) => void;
  uploadPhoto: () => void;
};

type OwnProps = {
  router: any;
};

type Props = OwnProps & MapStateToProps & MapDispatchToProps;

const ProfileContainer: React.FC<Props> = (props) => {
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
      userInfo={props.userInfo!}
      profileStatus={props.profileStatus!}
      setUserStatusTC={props.setUserStatusTC}
      setUserProfileTC={props.setUserProfileTC}
      uploadPhoto={props.uploadPhoto}
      authId={props.authId!}
    />
  );
};

const mapStateToProps = (state: RootState): MapStateToProps => {
  return {
    userInfo: getUserInfo(state),
    authId: getAuthId(state),
    profileStatus: getProfileStatus(state),
  };
};

export default compose(
  connect(
    mapStateToProps,
    {
      uploadPhoto,
      setUserInfoTC,
      setUserStatusTC,
      getUserStatusTC,
      setUserProfileTC,
      getUserProfileTC,
    }
  ),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
