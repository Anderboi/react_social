import React, { ChangeEvent } from "react";
import user from "./UserInfo.module.css";
//@ts-ignore
import avatar from "../../../assets/images/avatar.png";
//@ts-ignore
import job from "../../../assets/images/job-search.png";
//@ts-ignore
import noJob from "../../../assets/images/unemployment.png";
import StatusComponent from "./StatusComponent";
import { IUserInfo as UserInfoType } from "../../../types/types";

type Props = {
  userId?: number;
  authId: number;
  userInfo: UserInfoType;
  currentData?: string | null;
  setUserStatusTC: () => void;
  setUserProfileTC: (profileData: UserInfoType) => void;
  uploadPhoto: (data: ChangeEvent<HTMLInputElement> | null) => void;
  profileStatus: string;
};

export const UserInfo: React.FC<Props> = (props): JSX.Element => {
  //* upload photo from input
  const getAvatarPhoto = (e: any) => {
    if (e.target.value.length) {
      props.uploadPhoto(e.target.files![0]);
    }
  };

  return (
    <div className={user.info}>
      <div className={user.info__avatar}>
        <img
          src={props.userInfo.photos?.small || avatar}
          alt="avatar"
          className={user.info__avatar_img}
        ></img>
        {props.userInfo.userId === props.authId && (
          <input
            type="file"
            className={user.info__avatar_pickFile}
            onChange={getAvatarPhoto}
          />
        )}
      </div>
      <div className={user.info__description}>
        <div>
          <h2 className={user.info__description_username}>
            <StatusComponent
              userId={props.userInfo.userId}
              authId={props.authId}
              userInfo={props.userInfo}
              currentData={props.userInfo.fullName}
              setInfoState={props.setUserProfileTC}
              userInfoPropertie="fullName"
              placeholder="Enter your full name"
            ></StatusComponent>
          </h2>
          <StatusComponent
            className={user.info__description_status}
            userId={props.userInfo.userId}
            authId={props.authId}
            setStatusState={props.setUserStatusTC}
            userInfo={props.userInfo}
            userStatusData={props.profileStatus}
            placeholder="Enter your status"
          ></StatusComponent>
        </div>
        <div>
          <StatusComponent
            className={user.info__description_profileInfo}
            userId={props.userInfo.userId}
            authId={props.authId}
            userInfo={props.userInfo}
            currentData={props.userInfo.lookingForAJobDescription!}
            setInfoState={props.setUserProfileTC}
            userInfoPropertie="lookingForAJobDescription"
            placeholder="Describe your skills"
          >
            Skills:
          </StatusComponent>
          <StatusComponent
            className={user.info__description_profileInfo}
            userId={props.userInfo.userId}
            authId={props.authId}
            userInfo={props.userInfo}
            currentData={props.userInfo.aboutMe}
            setInfoState={props.setUserProfileTC}
            userInfoPropertie="aboutMe"
            placeholder="Describe yourself"
          >
            About me:
          </StatusComponent>

          <StatusComponent
            className={user.info__description_profileInfo}
            userId={props.userInfo.userId}
            authId={props.authId}
            userInfo={props.userInfo}
            currentData={props.userInfo.contacts?.website}
            setInfoState={props.setUserProfileTC}
            userInfoPropertie="website"
            placeholder="Place your website"
          >
            Website:
          </StatusComponent>
        </div>
      </div>

      <img
        src={props.userInfo.lookingForAJob ? job : noJob}
        alt="job"
        className={user.info__jobIcon}
      />
    </div>
  );
};
