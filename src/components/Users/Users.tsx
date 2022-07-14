import React from "react";
import common from '../../Common.module.css'
import css from "./Users.module.css";
import { UserItem } from "./UsersItem/UserItem";
//@ts-ignore
import userIcon from "../../assets/images/avatar.png";
import Pagination from "../common/Pagination/Pagination";
import { IUser } from "../../types/types";

type Props = {
  users: Array<IUser>;
  
  followUserTC: (id: number) => void;
  unfollowUserTC: (id: number) => void;
  searchUsers: (text:string)=>void
  isAuth: boolean;
  inProgressArray: Array<number>;
  authUserId: number;
  searchedUsersBarValue:string;

  usersTotalCount: number;
  pageSize: number;
  selectedPage: number;
  onPageChanged: (page: number) => void;
};

export const Users: React.FC<Props> = (props) => {



  return (
    <>
      <section className={css.searchbar}>
        <input className={common.input} placeholder='Search...' type="text" name="search" id="search" onChange={(e) => props.searchUsers(e.currentTarget.value)} value={props.searchedUsersBarValue} />
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
            authUserId={props.authUserId}

            inProgressArray={props.inProgressArray}
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
