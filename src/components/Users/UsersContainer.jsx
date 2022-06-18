import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Users } from "./Users";
import {
  followUser,
  unfollowUser,
  setPage,
  requestInProgress,
  getUsersThunkConstructor,
  followUserTC,
  unfollowUserTC,
} from "./../../redux/usersReducer";
import { Preloader } from "../common/Preloader";
import { compose } from "redux";
import {
  getUsers,
  getUsersTotalCount,
  getPageSize,
  getSelectedPage,
  getIsLoading,
  getInProgressArray,
} from "../../utilities/selectors/usersSelector";
import { getIsAuthorised } from "../../utilities/selectors/authSelector";

const UsersContainer = (props) => {
  
  useEffect(() => {
    props.getUsersThunkConstructor(props.selectedPage, props.pageSize);
  }, [props.selectedPage]);

  const onPageChanged = (page) => {
    props.getUsersThunkConstructor(page, props.pageSize);
    props.setPage(page);
  };

  return (
    <>
      {props.isLoading ? <Preloader /> : null}
      <Users
        users={props.users}
        usersTotalCount={props.usersTotalCount}
        pageSize={props.pageSize}
        selectedPage={props.selectedPage}
        follow={props.followUser}
        unfollow={props.unfollowUser}
        setUsers={props.setUsers}
        setPage={props.setPage}
        onPageChanged={onPageChanged}
        isAuth={props.isAuth}
        inProgressArray={props.inProgressArray}
        requestInProgress={props.requestInProgress}
        followUserTC={props.followUserTC}
        unfollowUserTC={props.unfollowUserTC}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    usersTotalCount: getUsersTotalCount(state),
    pageSize: getPageSize(state),
    selectedPage: getSelectedPage(state),
    isLoading: getIsLoading(state),
    inProgressArray: getInProgressArray(state),
    isAuth: getIsAuthorised(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setPage,
    requestInProgress,
    getUsersThunkConstructor,
    followUserTC,
    unfollowUserTC,
  })
)(UsersContainer);
