import React from "react";
import { NavLink } from "react-router-dom";
import css from "./UserItem.module.css";
import common from "../../../Common.module.css";

type Props = {
  id: number;
  icon: string;
  inProgressArray: Array<number>;
  isAuth: boolean;
  name: string;
  status: string;
  country?: string;
  city?: string;

  followUserTC: (id: number) => void;
  unfollowUserTC: (id: number) => void;
  followed: boolean;
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
      <div className={css.iconContainer}>
        <NavLink to={`/profile/${props.id}`}>
          <img src={props.icon} alt="userIcon" className={css.userIcon} />
        </NavLink>
        <div>
          {!props.inProgressArray.some((id) => id === props.id) &&
          props.isAuth ? (
            <button
              onClick={toggleFollow}
              className={`${common.button} ${css.followButton}`}
              data-testid="follow-btn"
            >
              {props.followed ? "Unfollow" : "Follow"}
            </button>
          ) : (
            <button
              style={{ backgroundColor: "grey", border: "none" }}
              className={`${common.button} ${css.followButton}`}
            >
              Disabled
            </button>
          )}
        </div>
      </div>
      <NavLink to={`/profile/${props.id}`} className={css.userInfo}>
        <div>
          <h3>{props.name}</h3>
          <p className={css.userInfoDescription}>{props.status}</p>
        </div>
      </NavLink>
      <div className={css.userAddress}>
        <div className="country">{props.country || "Belarus"}</div>
        <div className="city">{props.city || "Minsk"}</div>
      </div>
    </div>
  );
};