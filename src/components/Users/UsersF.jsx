import React from "react";
import css from "./Users.module.css";
import { UserItem } from "./UsersItem/UserItem";
import * as axios from "axios";
import userIcon from "../../assets/images/avatar.png";

// export const Users = (props) => {
//   console.log("NEW");

//   if (props.users.length === 0) {
//     axios
//       .get("https://social-network.samuraijs.com/api/1.0/users")
//       .then((response) => {
//         console.log(response.data.items);
//         props.setUsers(response.data.items);
//       });
//   }

//   const usersList = props.users.map((user) => (
//     <UserItem
//       name={user.name}
//       status={user.status}
//       isFollowed={user.isFollowed}
//       icon={user.photos.small != null ? user.photos.small : userIcon}
//       // country={user.address.country}
//       // city={user.address.city}
//       id={user.id}
//       follow={props.follow}
//       unfollow={props.unfollow}
//       key={user.id}
//     />
//   ));

//   return <div className={css.usersList}>{usersList}</div>;
// };
