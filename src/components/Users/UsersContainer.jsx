import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import { Users } from "./Users";
import {
  followUser,
  unfollowUser,
  setUsers,
  setPage,
  toggleLoading,
} from "./../../redux/usersReducer";
import { Preloader } from "../common/Preloader";

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    
    this.props.toggleLoading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleLoading(false);

        this.props.setUsers(response.data.items, response.data.totalCount);
      });
  }

  //* Here because of API get response

  onPageChanged = (page) => {
    this.props.toggleLoading(true);
    this.props.setPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items, response.data.totalCount);
        this.props.toggleLoading(false);
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
          follow={this.props.followUser}
          unfollow={this.props.unfollowUser}
          setUsers={this.props.setUsers}
          setPage={this.props.setPage}
          onPageChanged={this.onPageChanged}
          // isLoading={this.props.isLoading}
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

//! Можно избавиться от mapDispatchToProps и заменить обычным объектом, передающим ActionCreators
// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (id) => {
//       dispatch(followUserActionCreator(id));
//     },
//     unfollow: (id) => {
//       dispatch(unfollowUserActionCreator(id));
//     },
//     setUsers: (users, total) => {
//       dispatch(setUsersActionCreator(users, total));
//     },
//     setPage: (page) => {
//       dispatch(setPageAC(page));
//     },
//     toggleIsLoading: (isLoading) => {
//       dispatch(isLoadingAC(isLoading));
//     },
//   };
// };

export default connect(mapStateToProps, {
  followUser,
  unfollowUser,
  setUsers,
  setPage,
  toggleLoading,
})(UsersAPIContainer);
