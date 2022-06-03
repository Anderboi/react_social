import React from "react";
import css from "./UserItem.module.css";
import common from "../../../Common.module.css";
import { NavLink } from "react-router-dom";
import { followUser, unfollowUser } from "./../../../api/api";

export function UserItem(props) {
  const toggleFollow = (e) => {
    if (props.isFollowed === false) {
      followUser(props.id).then((data) => {
        if (data.resultCode === 0) {
          props.follow(props.id);
        }
      });
    } else {
      unfollowUser(props.id).then((data) => {
        if (data.resultCode === 0) {
          props.unfollow(props.id);
        }
      });
    }
  };

  return (
    <div className={css.userItem}>
      <div className={css.iconContainer}>
        <NavLink to={`/profile/${props.id}`}>
          <img src={props.icon} alt="userIcon" className={css.userIcon} />
        </NavLink>
        <div>
          {props.isAuth ? (
            <button
              onClick={toggleFollow}
              className={`${common.button} ${css.followButton}`}
            >
              {props.isFollowed ? "Unfollow" : "Follow"}
            </button>
          ) : (
            <button
              onClick={toggleFollow}
              style={{ "background-color": "grey", border: "none" }}
              className={`${common.button} ${css.followButton}`}
            >
              Sign in
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
