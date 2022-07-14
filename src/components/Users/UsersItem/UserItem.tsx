import React from "react";
import { NavLink } from "react-router-dom";
import css from "./UserItem.module.css";
import common from "../../../Common.module.css";

type Props = {
  id: number;
  icon: string;
  name: string;
  status: string;
  country?: string;
  city?: string;
  inProgressArray: Array<number>;
  isAuth: boolean;
  followed: boolean;
  authUserId: number;


  followUserTC: (id: number) => void;
  unfollowUserTC: (id: number) => void;
};

export const UserItem: React.FC<Props> = (props): JSX.Element => {


  const toggleFollow = () => {

    if (props.followed === false) {
      props.followUserTC(props.id);
    } else {
      props.unfollowUserTC(props.id);
    }
  };

  return (
    <div className={css.userItem}>
      <div className={css.userItem__iconContainer}>
        <NavLink to={`/profile/${props.id}`}>
          <img src={props.icon} alt="userIcon" className={css.iconContainer__userIcon} />
        </NavLink>
        <div>
          {!props.inProgressArray.some((id) => id === props.id) &&
            props.isAuth && props.authUserId !== props.id ? (
            <button
              onClick={toggleFollow}
              className={`${common.button} ${css.iconContainer__followButton}`}
              data-testid="follow-btn"
            >
              {props.followed ? "Unfollow" : "Follow"}
            </button>
          ) : (
            <button
              style={{ backgroundColor: "grey", border: "none" }}
              className={`${common.button} ${css.iconContainer__followButton}`}
            >
              Disabled
            </button>
          )}
        </div>
      </div>
      <NavLink to={`/profile/${props.id}`} className={css.userItem__userInfo}>
        <div>
          <h3>{props.name}</h3>
          <p className={css.userInfo__description}>{props.status}</p>
        </div>
      </NavLink>
      <div className={css.userInfo__id}>
        <div >User ID:</div>
        <div >{props.id}</div>
      </div>
    </div>
  );
};
