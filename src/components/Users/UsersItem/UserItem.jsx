import React from "react";
import css from "./UserItem.module.css";
import common from "../../../Common.module.css";

export function UserItem(props) {

  const toggleFollow = () => {
     if (props.isFollowed === false) {
      props.follow(props.id);
    } else {
      props.unfollow(props.id);
    }
  };

  return (
    <div className={css.userItem}>
      <div className={css.iconContainer}>
        <img src={props.icon} alt="userIcon" className={css.userIcon} />
        <button
          onClick={toggleFollow}
          className={`${common.button} ${css.followButton}`}
        >
          {props.isFollowed ? "Follow" : "Unfollow"}
        </button>
      </div>
      <div className={css.userInfo}>
        <h3>
          {props.name} {props.surname}
        </h3>
        <p className={css.userInfoDescription}>{props.description}</p>
      </div>
      <div className={css.userAddress}>
        <div className="country">{props.country}</div>
        <div className="city">{props.city}</div>
      </div>
    </div>
  );
}
