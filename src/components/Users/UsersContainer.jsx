import React from "react";
import { connect } from "react-redux";
import { Users } from "./Users";
import {
  followUser,
  unfollowUser,
  setUsers,
  setPage,
  toggleLoading,
} from "./../../redux/usersReducer";
import { Preloader } from "../common/Preloader";
import { getUsers } from "../../api/api";

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.toggleLoading(true);
    getUsers(this.props.selectedPage, this.props.pageSize).then((data) => {
      this.props.toggleLoading(false);

      this.props.setUsers(data.items, data.totalCount);
    });
  }

  //* Here because of API get response

  onPageChanged = (page) => {
    this.props.toggleLoading(true);
    this.props.setPage(page);
    getUsers(page, this.props.pageSize).then((data) => {
      this.props.setUsers(data.items, data.totalCount);
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
          isAuth={this.props.isAuth}
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
  };
};

export default connect(mapStateToProps, {
  followUser,
  unfollowUser,
  setUsers,
  setPage,
  toggleLoading,
})(UsersAPIContainer);
