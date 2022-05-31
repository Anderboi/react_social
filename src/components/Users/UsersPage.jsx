import React from "react";
import { UsersContainer } from "./UsersContainer";
import css from "./UsersPage.module.css";
import common from "../../Common.module.css";

export function UsersPage() {
  return (
    <div className={css.buttonContainer}>
      <UsersContainer />
      <div>
        <button className={`${common.button} ${css.showMoreButton}`}>
          SHOW MORE
        </button>
      </div>
    </div>
  );
}
