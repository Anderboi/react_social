import React, { useEffect, useState } from "react";
import common from "../../../Common.module.css";
import c from "./UserInfo.module.css";
import { TextForm } from "./../../common/Forms";


const StatusComponent = (props) => {
  const userInfo = props.userInfo;

  const [editMode, setEditMode] = useState(false);
  const [hoverMode, setHoverMode] = useState(false);
  const [statusInput, setStatusInput] = useState(props.currentData);
  const [userStatusInput, setUserStatusInput] = useState(props.userStatusData);

  useEffect(() => {
    setStatusInput(props.currentData);
    setUserStatusInput(props.userStatusData);
  }, [props.currentData, props.userStatusData]);

  const setProfileStatus = () => {
    setEditMode(false);
    props.setInfoState(userStatusInput);
  };

  const hoverModeOn = () => {
    props.authId === props.userId && setHoverMode(true);
  };
  const hoverModeOff = () => {
    props.authId === props.userId && setHoverMode(false);
  };

  const setProfileData = () => {
    setEditMode(false);

    props.setInfoState({
      ...userInfo,

      aboutMe:
        props.userInfoPropertie === "aboutMe" ? statusInput : userInfo.aboutMe,
      lookingForAJob: userInfo.lookingForAJobDescription ? true : false,
      lookingForAJobDescription:
        props.userInfoPropertie === "lookingForAJobDescription"
          ? statusInput
          : userInfo.lookingForAJobDescription,
      fullName:
        props.userInfoPropertie === "fullName"
          ? statusInput
          : userInfo.fullName,
      contacts: {
        github:
          props.userInfoPropertie === "github"
            ? statusInput
            : userInfo.contacts.github,
        vk:
          props.userInfoPropertie === "vk" ? statusInput : userInfo.contacts.vk,
        facebook:
          props.userInfoPropertie === "facebook"
            ? statusInput
            : userInfo.contacts.facebook,
        instagram:
          props.userInfoPropertie === "instagram"
            ? statusInput
            : userInfo.contacts.instagram,
        twitter:
          props.userInfoPropertie === "twitter"
            ? statusInput
            : userInfo.contacts.twitter,
        website:
          props.userInfoPropertie === "website"
            ? statusInput
            : userInfo.contacts.website,
        youtube:
          props.userInfoPropertie === "youtube"
            ? statusInput
            : userInfo.contacts.youtube,
        mainLink:
          props.userInfoPropertie === "github"
            ? statusInput
            : userInfo.contacts.github,
      },
    });
  };

  const handleEditMode = () => {
    if (props.authId === props.userId) {
      setEditMode(true);
    }
  };

  return (
    <div>
      {editMode && (
        <>
          <div>
            <TextForm
              autoFocus
              value={props.userStatusData ? userStatusInput : statusInput}
              onChange={(e) =>
                props.userStatusData
                  ? setUserStatusInput(e.currentTarget.value)
                  : setStatusInput(e.currentTarget.value)
              }
              placeholder={props.placeholder}
              onBlur={props.userStatusData ? setProfileStatus : setProfileData}
              className={common.input}
              data-testid="status-input"
            />
          </div>
          {/* <div
            className={
              props.userInfo.errorMessage
                ? common.display_flex
                : common.display_none
            }
          >
            {props.userInfo.errorMessage}
          </div> */}
        </>
      )}
      {!editMode && (
        <div className={c.info__profileBlock}>
          <div
            onDoubleClick={handleEditMode}
            data-testid="status-div"
            className={`${props.className}`}
            onMouseEnter={hoverModeOn}
            onMouseLeave={hoverModeOff}
          >
            <b>{props.children} </b>
            {props.currentData || props.userStatusData || "Nothing"}
          </div>
          <div
            className={
              hoverMode ? c.info__profileBlock_hover : common.display_none
            }
          >
            double click to edit ...
          </div>
          {/* <div
            className={
              props.userInfo.errorMessage
                ? common.display_flex
                : common.display_none
            }
          >
            {props.userInfo.errorMessage}
          </div> */}
        </div>
      )}
    </div>
  );
};

export default StatusComponent;
