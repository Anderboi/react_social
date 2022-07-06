// @ts-ignore
import { RootState } from "../../redux/reduxStore";

export const getAuthId = (state: RootState) => {
  return state.auth.id;
};
export const getAuthLogin = (state: RootState) => {
  return state.auth.login;
};
export const getAuthEmail = (state: RootState) => {
  return state.auth.email;
};
export const getIsAuthorised = (state: RootState) => {
  return state.auth.isAuthorised;
};
export const getAuthMessage = (state: RootState) => {
  return state.auth.authMessage;
};
export const getCaptchaUrl = (state: RootState) => {
  return state.auth.captchaUrl;
};
export const getErrorMessage = (state: RootState) => {
  return state.auth.errorMessage;
};
