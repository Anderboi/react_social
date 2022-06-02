import user from "./UserInfo.module.css";
import avatar from "../../../assets/images/avatar.png";
import job from "../../../assets/images/job-search.png";
import noJob from "../../../assets/images/unemployment.png";

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
          <div>About me: {props.aboutMe}</div>

          <div>Education: BSU'07</div>
          <div>Web Site: {props.contacts.website}</div>
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
