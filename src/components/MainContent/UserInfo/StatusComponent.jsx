import React, { useEffect, useState } from "react";
import common from "../../../Common.module.css";

const StatusComponent = (props) => {
  const userInfo = props.displayInfo;

  const [editMode, setEditMode] = useState(false);
  const [statusInput, setStatusInput] = useState(props.currentData);

  useEffect(() => {
    setStatusInput(props.currentData);
  }, [props.currentData]);

  const setProfileStatus = () => {
    setEditMode(false);
    props.setInfoState(statusInput);
  };

  const setProfileData = () => {
    setEditMode(false);

    props.setInfoState({
      ...userInfo,

      aboutMe:
        props.userInfoPropertie === "aboutMe" ? statusInput : userInfo.aboutMe,
      // lookingForAJob: userInfo.lookingForAJob,
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
        <div>
          <input
            autoFocus
            value={statusInput}
            onChange={(e) => setStatusInput(e.currentTarget.value)}
            placeholder={props.placeholder}
            onBlur={
              typeof props.displayInfo === "string"
                ? setProfileStatus
                : setProfileData
            }
            className={common.input}
            data-testid="status-input"
          />
        </div>
      )}
      {!editMode && (
        <div onDoubleClick={handleEditMode} data-testid="status-div">
          <b>{props.children}</b> {props.currentData || "Nothing"}
        </div>
      )}
    </div>
  );
};

export default StatusComponent;
