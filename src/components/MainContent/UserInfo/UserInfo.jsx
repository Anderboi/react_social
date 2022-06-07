import { React } from "react";
import user from "./UserInfo.module.css";
import avatar from "../../../assets/images/avatar.png";
import job from "../../../assets/images/job-search.png";
import noJob from "../../../assets/images/unemployment.png";
import StatusComponent from "./StatusComponent";

export function UserInfo(props) {
  return (
    <div className={user.info}>
      <img
        src={props.photo ? props.photo : avatar}
        alt="avatar"
        className={user.info_img}
      ></img>
      <div className={user.info_description}>
        <h2>{props.fullName}</h2>
        <div>
          <StatusComponent aboutMe={props.aboutMe}/>
         
          <div>
            <b>Skills:</b> {props.lookingForAJobDescription}
          </div>
          <div>
            <b>Web Site:</b> {props.contacts.website}
          </div>
        </div>
      </div>
      <img
        src={props.lookingForAJob ? job : noJob}
        alt=""
        className={user.job_icon}
      />
    </div>
  );
}
