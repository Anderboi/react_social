import React from "react";
import css from "./UserItem.module.css";
import common from "../../../Common.module.css";
import { NavLink } from "react-router-dom";

export function UserItem(props) {
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
}
