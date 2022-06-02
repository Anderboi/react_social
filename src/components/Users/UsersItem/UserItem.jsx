import React from "react";
import css from "./UserItem.module.css";
import common from "../../../Common.module.css";
import { NavLink } from "react-router-dom";

export function UserItem(props) {
  const toggleFollow = (e) => {
    // e.stopPropagation();

    if (props.isFollowed === false) {
      props.follow(props.id);
    } else {
      props.unfollow(props.id);
    }
  };

  return (
    <div className={css.userItem}>
      <div className={css.iconContainer}>
        <NavLink to={`/profile?id=${props.id}`}>
          <img src={props.icon} alt="userIcon" className={css.userIcon} />
        </NavLink>
        <button
          onClick={toggleFollow}
          className={`${common.button} ${css.followButton}`}
        >
          {props.isFollowed ? "Unfollow" : "Follow"}
        </button>
      </div>
      <NavLink to={`/profile?id=${props.id}`} className={css.userInfo}>
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
