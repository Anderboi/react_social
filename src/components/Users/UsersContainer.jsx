import { Users } from "./Users";
import { connect } from "react-redux";
import { followUserActionCreator } from "../../redux/usersReducer";
import { unfollowUserActionCreator } from "./../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
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
  };
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
