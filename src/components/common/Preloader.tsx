import React from "react";
import css from "../../Common.module.css";
// @ts-ignore
import spinner from "../../assets/images/Dual Ring-1s-200px.svg";

export const Preloader = (): JSX.Element => {
  return (
    <div className={css.spinner}>
      <img src={spinner} alt="spinner" />
    </div>
  );
};
