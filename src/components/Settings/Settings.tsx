import React, { useState, useEffect } from "react";
import settings from "./Settings.module.css";
import common from "../../Common.module.css";
import { connect } from "react-redux";
import { getUserInfo } from "../../utilities/selectors/profileSelector";
import { RootState } from "../../redux/reduxStore";
import { IUserInfo } from "../../types/types";
import { compose } from "redux";
import { getUserProfileTC } from "../../redux/mainPageReducer";
import { getAuthId } from "../../utilities/selectors/authSelector";
import InputWithLabel from "../common/Inputs/InputWithLabel";
import TextareaWithLabel from "../common/Inputs/TextareaWithLabel";
import CheckboxWithLabel from "../common/Inputs/CheckboxWithLabel";

type MapStateToProps = {
  profileInfo: IUserInfo | null;
  userId: number | null;
};

type MapDispatchToProps = {
  getUserProfileTC: (userId: number) => void;
};

type OwnProps = {};

type Props = MapStateToProps & MapDispatchToProps & OwnProps;

const SettingsContainer: React.FC<Props> = (props): JSX.Element => {
  useEffect(() => {
    props.getUserProfileTC(props.userId!);
  }, [props.userId]);

  return <Settings userInfo={props.profileInfo} />;
};

type SettingsProps = {
  userInfo: IUserInfo | null;
};

const Settings: React.FC<SettingsProps> = (props): JSX.Element => {
  const [fullName, getFullName] = useState(props.userInfo?.fullName);
  const [skillsSteck, getSkillsSteck] = useState(
    props.userInfo?.lookingForAJobDescription
  );
  const [isLooking, getIsLooking] = useState(props.userInfo?.lookingForAJob);

  return (
    <div className={settings.settings}>
      <div className={settings.settings__submenu}>
        <h1>Settings</h1>
        <div className={settings.submenu__items}>
          <div>Profile information</div>
          <div>Appearance</div>
          <div>Security</div>
        </div>
      </div>
      <div className={settings.settings__infoblock}>
        <h2>Personal Information</h2>
        <hr className={settings.infoblock__divider} />
        <h4>Profile</h4>
        <span>
          This information will be displayed publicly so be careful what you
          share.
        </span>
        <div className={settings.infoblock__inputblock}>
          <InputWithLabel
            type="text"
            labelText="Full name"
            inputName="firstName"
            value={fullName!}
            key={"firstName"}
          />

          <CheckboxWithLabel
            inputName="JobSearch"
            labelText="Search for employment"
            value={isLooking!}
          />

          <TextareaWithLabel
            labelText="Skills"
            inputName="skillsSteck"
            value={skillsSteck!}
            key={"Skills"}
          />
        </div>
        <input type="submit" value="Save" className={common.button} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState): MapStateToProps => {
  return {
    profileInfo: getUserInfo(state),
    userId: getAuthId(state),
  };
};

export default compose(
  connect<MapStateToProps, MapDispatchToProps, OwnProps, RootState>(
    mapStateToProps,
    { getUserProfileTC }
  )
)(SettingsContainer);
