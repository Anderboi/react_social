import React from "react";
import css from "./Users.module.css";
import { UserItem } from "./UsersItem/UserItem";

export const Users = (props) => {
  const usersList = props.users.map((user) => (
    <UserItem
      name={user.name}
      surname={user.surname}
      description={user.description}
      isFollowed={user.isFollowed}
      icon={user.icon}
      country={user.address.country}
      city={user.address.city}
      id={user.id}
      follow={props.follow}
      unfollow={props.unfollow}
      key={user.id}
    />
  ));

  return <div className={css.usersList}>{usersList}</div>;
};
