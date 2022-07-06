import React from "react";
import css from "./Settings.module.css";
import common from '../../../Common.module.css'
import { NavLink } from "react-router-dom";


const Settings = () => {
  return (
    <div className={css.settings}>
      <div className={css.settings__submenu}>
        <h1>Settings</h1>
        <div className={css.settings__submenu_items}>
          <div>Profile information</div>
          <div>Appearance</div>
          <div>Security</div>
        </div>
      </div>
      <div className={css.settings__infoblock}>
        <h2>Personal Information</h2>
        <hr className={css.settings__infoblock_divider} />
        <h4>Profile</h4>
        <span>
          This information will be displayed publicly so be careful what you
          share.
        </span>
        <div className={css.settings__infoblock_inputblock}>
          <div className={css.settings__infoblock_inputblock_item}>
            <label htmlFor="firstName">First name</label>
            <input type="text" name="firstName" id="firstName" className={common.input}/>
          </div>

          <div className={css.settings__infoblock_inputblock_item}>
            <label htmlFor="lastName">Last name</label>
            <input type="text" name="lastName" id="lastName" className={common.input}/>
          </div>

          <div className={css.settings__infoblock_inputblock_item}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" className={common.input}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
