import Users from "./Users";
import { connect } from "react-redux";
import { followUserActionCreator } from "../../redux/usersReducer";
import {
  unfollowUserActionCreator,
  setUsersActionCreator,
  setPageAC,
} from "./../../redux/usersReducer";

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
      debugger;
      dispatch(setPageAC(page));
    },
  };
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
