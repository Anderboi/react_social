import React from "react";
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
import {getIsAuthorised} from '../../utilities/selectors/authSelector'

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkConstructor(
      this.props.selectedPage,
      this.props.pageSize
    );
  }

  onPageChanged = (page) => {
    this.props.getUsersThunkConstructor(page, this.props.pageSize);
    this.props.setPage(page);
  };

  render() {
    return (
      <>
        {this.props.isLoading ? <Preloader /> : null}
        <Users
          users={this.props.users}
          usersTotalCount={this.props.usersTotalCount}
          pageSize={this.props.pageSize}
          selectedPage={this.props.selectedPage}
          follow={this.props.followUser}
          unfollow={this.props.unfollowUser}
          setUsers={this.props.setUsers}
          setPage={this.props.setPage}
          onPageChanged={this.onPageChanged}
          isAuth={this.props.isAuth}
          inProgressArray={this.props.inProgressArray}
          requestInProgress={this.props.requestInProgress}
          followUserTC={this.props.followUserTC}
          unfollowUserTC={this.props.unfollowUserTC}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    usersTotalCount: getUsersTotalCount(state),
    pageSize: getPageSize(state),
    selectedPage: getSelectedPage(state),
    isLoading:getIsLoading(state),
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
)(UsersAPIContainer);
