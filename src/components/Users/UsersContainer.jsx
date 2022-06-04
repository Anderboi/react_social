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
    users: state.usersPage.users,
    usersTotalCount: state.usersPage.usersTotalCount,
    pageSize: state.usersPage.pageSize,
    selectedPage: state.usersPage.selectedPage,
    isLoading: state.usersPage.isLoading,
    isAuth: state.auth.isAuthorised,
    inProgressArray: state.usersPage.inProgressArray,
  };
};

export default connect(mapStateToProps, {
  followUser,
  unfollowUser,
  setPage,
  requestInProgress,
  getUsersThunkConstructor,
  followUserTC,
  unfollowUserTC,
})(UsersAPIContainer);
