import React from "react";
import UsersContainer from "./UsersContainer";
import css from "./UsersPage.module.css";

export const UsersPage = () => {
  return (
    <div className={css.userPageContainer}>
      <UsersContainer />
    </div>
  );
};
