/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import css from "./Users.module.css";
import { UserItem } from "./UsersItem/UserItem";
import userIcon from "../../assets/images/avatar.png";
import Pagination from "./../common/Pagination";

export const Users = (props) => {
  return (
    <div className={css.usersList}>
      {props.users.map((user) => (
        <UserItem
          name={user.name}
          status={user.status}
          followed={user.followed || false}
          icon={user.photos.small != null ? user.photos.small : userIcon}
          id={user.id}
          follow={props.follow}
          unfollow={props.unfollow}
          isAuth={props.isAuth}
          key={user.id}
          inProgressArray={props.inProgressArray}
          requestInProgress={props.requestInProgress}
          followUserTC={props.followUserTC}
          unfollowUserTC={props.unfollowUserTC}
        />
      ))}
      <Pagination
        itemsTotalCount={props.usersTotalCount}
        pageSize={props.pageSize}
        selectedPage={props.selectedPage}
        onPageChanged={props.onPageChanged}
        pagesRange={7}
      />
    </div>
  );
};
