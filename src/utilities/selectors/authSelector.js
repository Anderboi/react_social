export const getAuthId = (state) => {
  return state.auth.id;
};
export const getAuthLogin = (state) => {
  return state.auth.login;
};
export const getAuthEmail = (state) => {
  return state.auth.email;
};
export const getIsAuthorised = (state) => {
  return state.auth.isAuthorised;
};
export const getAuthMessage = (state) => {
  return state.auth.authMessage;
};
export const getCaptchaUrl = (state) => {
  return state.auth.captchaUrl;
};
export const getErrorMessage = (state) => {
  return state.auth.errorMessage;
};
