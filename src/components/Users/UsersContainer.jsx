import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import { Users } from "./Users";
import {
  followUserActionCreator,
  unfollowUserActionCreator,
  setUsersActionCreator,
  setPageAC,
} from "./../../redux/usersReducer";

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items, response.data.totalCount);
      });
  }

  //* Here because of API get response

  onPageChanged = (page) => {
    this.props.setPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items, response.data.totalCount);
      });
  };

  render() {
    return (
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
      />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);
