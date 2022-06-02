import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import { Users } from "./Users";
import {
  followUserActionCreator,
  unfollowUserActionCreator,
  setUsersActionCreator,
  setPageAC,
  isLoadingAC,
} from "./../../redux/usersReducer";
import { Preloader } from "../common/Preloader";

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsLoading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsLoading(false);

        this.props.setUsers(response.data.items, response.data.totalCount);
      });
  }

  //* Here because of API get response

  onPageChanged = (page) => {
    this.props.toggleIsLoading(true);
    this.props.setPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items, response.data.totalCount);
        this.props.toggleIsLoading(false);
      });
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
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          setUsers={this.props.setUsers}
          setPage={this.props.setPage}
          onPageChanged={this.onPageChanged}
          isLoading={this.props.isLoading}
        />
      </>
    );
  }
}

// export default UsersAPIContainer;

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    usersTotalCount: state.usersPage.usersTotalCount,
    pageSize: state.usersPage.pageSize,
    selectedPage: state.usersPage.selectedPage,
    isLoading: state.usersPage.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (id) => {
      dispatch(followUserActionCreator(id));
    },
    unfollow: (id) => {
      dispatch(unfollowUserActionCreator(id));
    },
    setUsers: (users, total) => {
      dispatch(setUsersActionCreator(users, total));
    },
    setPage: (page) => {
      dispatch(setPageAC(page));
    },
    toggleIsLoading: (isLoading) => {
      dispatch(isLoadingAC(isLoading));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);
