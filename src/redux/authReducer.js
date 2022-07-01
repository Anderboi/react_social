import { authAPI } from "../api/api";
import { securityAPI } from "./../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";
const WRONG_AUTH_DATA = "auth/WRONG_AUTH_DATA";
const LOGIN_USER = "auth/LOGIN_USER";
const LOGOUT_USER = "auth/LOGOUT_USER";
const GET_CAPTCHA = "auth/GET_CAPTCHA";
const SHOW_ERROR = "auth/SHOW_ERROR";
const HIDE_ERROR = "auth/HIDE_ERROR";

let initState = {
  id: null,
  login: null,
  email: null,
  isAuthorised: false,
  authMessage: null,
  captchaUrl: null,
  errorMessage: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuthorised: true,
      };
    }

    case LOGIN_USER: {
      return {
        ...state,
        authMessage: action.message,
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        id: null,
        login: null,
        email: null,
        isAuthorised: false,
      };
    }

    case GET_CAPTCHA: {
      return {
        ...state,
        captchaUrl: action.url,
      };
    }
    case SHOW_ERROR: {
      return {
        ...state,
        errorMessage: action.message,
      };
    }
    case HIDE_ERROR: {
      return {
        ...state,
        errorMessage: null,
      };
    }

    case WRONG_AUTH_DATA: {
      return { message: "You have not registered yet" };
    }

    default:
      return state;
  }
};

export default authReducer;

//! Actions
export const setUserData = ({ id, login, email }) => {
  return { type: SET_USER_DATA, data: { id, login, email } };
};

export const loginUser = (message) => {
  return { type: LOGIN_USER, message };
};

export const logoutUser = () => {
  return { type: LOGOUT_USER };
};

export const getCaptchaUrl = (url) => {
  return { type: GET_CAPTCHA, url };
};

export const showError = (message) => {
  return { type: SHOW_ERROR, message };
};
export const hideError = () => {
  return { type: HIDE_ERROR };
};

//!Thunks
export const authData = () => async (dispatch) => {
  const response = await authAPI.authInfo();
  if (response.resultCode === 0) {
    dispatch(setUserData(response.data));
  }
};

export const loginTC = (values) => async (dispatch) => {
  try {
    const response = await authAPI.authLogin(values);
    if (response.resultCode === 0) {
      dispatch(loginUser("Success"));
      dispatch(authData());
    } else {
      if (response.resultCode === 10) {
        dispatch(getCaptchaTC());
      }
      dispatch(loginUser(response.messages[0]));
    }
  } catch (error) {
    debugger;
    dispatch(showErrorMessage(error));
  }
};

export const logoutTC = () => async (dispatch) => {
  const response = await authAPI.authLogout();
  if (response.data.resultCode === 0) {
    dispatch(logoutUser());
  }
};

export const getCaptchaTC = () => async (dispatch) => {
  const response = await securityAPI.getCaptcha();
  dispatch(getCaptchaUrl(response.data.url));
};

export const showErrorMessage = (message) => async (dispatch) => {
  dispatch(showError(message));
  setTimeout(dispatch(hideError), 3000);
};
