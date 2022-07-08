import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Users } from "./Users";
import {
  setPage,
  getUsersThunkConstructor,
  followUserTC,
  unfollowUserTC,
} from "../../redux/usersReducer";
import { Preloader } from "../common/Preloader";
import {
  getUsers,
  getUsersTotalCount,
  getPageSize,
  getSelectedPage,
  getIsLoading,
  getInProgressArray,
} from "../../utilities/selectors/usersSelector";
import { getIsAuthorised } from "../../utilities/selectors/authSelector";
import { IUser } from "../../types/types";
import { RootState } from "../../redux/reduxStore";



type MapStateToProps = {
  users: Array<IUser>;
  usersTotalCount: number;
  inProgressArray: Array<number>;
  isAuth: boolean;
  selectedPage: number;
  pageSize: number;
  isLoading: boolean;
};
type MapDispatchToProps = {
  getUsersThunkConstructor: (page: number, pageSize: number) => void;
  setPage: (page: number) => void;
  followUserTC: (id:number) => void;
  unfollowUserTC: (id:number) => void;
};

type OwnProps = {};

type Props = OwnProps & MapStateToProps & MapDispatchToProps;


const UsersContainer: React.FC<Props> = (props): JSX.Element => {
  useEffect(() => {
    props.getUsersThunkConstructor(props.selectedPage, props.pageSize);
  }, [props.selectedPage]);

  const onPageChanged = (page:number) => {
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
        onPageChanged={onPageChanged}
        isAuth={props.isAuth}
        inProgressArray={props.inProgressArray}
        followUserTC={props.followUserTC}
        unfollowUserTC={props.unfollowUserTC}
      />
    </>
  );
};

const mapStateToProps = (state: RootState) => {
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
  connect<MapStateToProps, MapDispatchToProps, OwnProps, RootState>(mapStateToProps, {
    setPage,
    getUsersThunkConstructor,
    followUserTC,
    unfollowUserTC,
  })
)(UsersContainer);
