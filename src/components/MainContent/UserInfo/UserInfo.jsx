import { React } from "react";
import user from "./UserInfo.module.css";
import avatar from "../../../assets/images/avatar.png";
import job from "../../../assets/images/job-search.png";
import noJob from "../../../assets/images/unemployment.png";
import StatusComponent from "./StatusComponent";

export const UserInfo = (props) => {

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
            userId={props.userInfo.userId}
            authId={props.authId}
            setInfoState={props.setUserStatusTC}
            displayInfo={props.profileStatus}
            userInfo={props.userInfo}
            currentData={props.profileStatus}
            placeholder='Enter your status'

          >
            Status:
          </StatusComponent>
          <StatusComponent
            userId={props.userInfo.userId}
            authId={props.authId}
            setInfoState={props.setUserProfileTC}
            displayInfo={props.userInfo}
            currentData={props.userInfo.lookingForAJobDescription}
            userInfoPropertie="lookingForAJobDescription"
            placeholder='Describe your skills'
          >
            Skills:
          </StatusComponent>
          <StatusComponent
            userId={props.userInfo.userId}
            authId={props.authId}
            userInfo={props.userInfo}
            displayInfo={props.userInfo}
            currentData={props.userInfo.aboutMe}
            setInfoState={props.setUserProfileTC}
            userInfoPropertie="aboutMe"
            placeholder='Describe yourself'

          >
            About me:
          </StatusComponent>
        </div>
      </div>
     
      <img
        src={props.userInfo.lookingForAJob ? job : noJob}
        alt="job"
        className={user.job_icon}
      />
    </div>
  );
};
