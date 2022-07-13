/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import css from "./Users.module.css";
import { UserItem } from "./UsersItem/UserItem";
//@ts-ignore
import userIcon from "../../assets/images/avatar.png";
import Pagination from "../common/Pagination/Pagination";
import { IUser } from "../../types/types";

type Props = {
  users: Array<IUser>;
  // follow: () => void;
  // unfollow: () => void;
  // requestInProgress: () => void;
  followUserTC: (id: number) => void;
  unfollowUserTC: (id: number) => void;
  searchUsersTC: (text: string) => void;
  isAuth: boolean;
  inProgressArray: Array<number>;

  usersTotalCount: number;
  pageSize: number;
  selectedPage: number;
  onPageChanged: (page: number) => void;
};

export const Users: React.FC<Props> = (props) => {


  const search = (text: string) => {

    props.searchUsersTC(text);
  }

  return (
    <>
      <section>
        <input type="text" name="search" id="search" onChange={(e) => search(e.currentTarget.value)} />
      </section>
      <div className={css.usersList}>
        {props.users.map((user) => (
          <UserItem
            name={user.name}
            status={user.status!}
            followed={user.followed || false}
            icon={user.photos.small != null ? user.photos.small : userIcon}
            id={user.id}
            isAuth={props.isAuth}
            key={user.id}

            // follow={props.follow}
            // unfollow={props.unfollow}
            inProgressArray={props.inProgressArray}
            // requestInProgress={props.requestInProgress}
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
    </>
  );
};
