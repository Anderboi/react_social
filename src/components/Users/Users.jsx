import React from "react";
import css from "./Users.module.css";
import { UserItem } from "./UsersItem/UserItem";
import userIcon from "../../assets/images/avatar.png";

export const Users = (props) => {
  console.log(props.isLoading);

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
          isFollowed={user.isFollowed || false}
          icon={user.photos.small != null ? user.photos.small : userIcon}
          // country={user.address.country || 'Belarus'}
          // city={user.address.city || 'Minsk'}
          id={user.id}
          follow={props.follow}
          unfollow={props.unfollow}
          key={user.id}
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
