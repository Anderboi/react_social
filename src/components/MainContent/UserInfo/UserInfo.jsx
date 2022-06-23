import { React } from "react";
import user from "./UserInfo.module.css";
import avatar from "../../../assets/images/avatar.png";
import job from "../../../assets/images/job-search.png";
import noJob from "../../../assets/images/unemployment.png";
import StatusComponent from "./StatusComponent";

export function UserInfo(props) {
  //* upload photo from input
  const getAvatarPhoto = (e) => {
    if (e.target.value.length) {
      props.uploadPhoto(e.target.files[0]);
    }
  };

  return (
    <div className={user.info}>
      <div className={user.info_avatar}>
        <img
          src={props.userInfo.photos.small || avatar}
          alt="avatar"
          className={user.info_img}
        ></img>
        {props.userInfo.userId === props.authId && (
          <input
            type="file"
            className={user.pick_file}
            onChange={getAvatarPhoto}
          />
        )}
      </div>
      <div className={user.info_description}>
        <h2>{props.userInfo.fullName}</h2>
        <div>
          <StatusComponent
            // aboutMe={props.aboutMe}
            userId={props.userInfo.userId}
            authId={props.authId}
            setInfoState={props.setUserStatusTC}
            displayInfo={props.profileStatus}
          >
            About Me:
          </StatusComponent>
          <StatusComponent
            // aboutMe={props.aboutMe}
            userId={props.userInfo.userId}
            authId={props.authId}
            setInfoState={props.setUserProfileTC}
            displayInfo={props.lookingForAJobDescription}
          >
            Skills:
          </StatusComponent>
          <StatusComponent
            aboutMe={props.userInfo.aboutMe}
            userId={props.userInfo.userId}
            authId={props.authId}
            // setInfoState={props.setUserProfileTC}
            // displayInfo={props.lookingForAJobDescription}
          >
            About me:
          </StatusComponent>

          <div>
            <b>Web Site:</b> {props.userInfo.contacts.website}
          </div>
        </div>
      </div>
      <img
        src={props.userInfo.lookingForAJob ? job : noJob}
        alt="job"
        className={user.job_icon}
      />
    </div>
  );
}
