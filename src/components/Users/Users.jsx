/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import css from "./Users.module.css";
import { UserItem } from "./UsersItem/UserItem";
import userIcon from "../../assets/images/avatar.png";

export const Users = (props) => {
  
  const pages = Math.ceil(props.usersTotalCount / props.pageSize);

  const pageNumbers = [];

  for (let x = 1; x <= pages; x++) {
    pageNumbers.push(x);
  }

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
      <div className={css.pagination}>
        <a
          className={css.page}
          href="#"
          onClick={() => {
            props.onPageChanged(1);
          }}
        >
          First
        </a>
        {pageNumbers
          .map((p) => {
            return (
              <a
                href="#"
                key={p}
                className={`${props.selectedPage === p && css.selectedPage} ${
                  css.page
                }`}
                onClick={() => {
                  props.onPageChanged(p);
                }}
              >
                {" "}
                {p}{" "}
              </a>
            );
          })
          .slice(
            props.selectedPage > 3 ? props.selectedPage - 4 : 0,
            props.selectedPage > 3 ? props.selectedPage + 3 : 7
          )}{" "}
        <a
          className={css.page}
          href="#"
          onClick={() => {
            props.onPageChanged(pages);
          }}
        >
          ...{pages}
        </a>
      </div>
    </div>
  );
};
