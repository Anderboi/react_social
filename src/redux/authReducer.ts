import { ThunkAction } from "redux-thunk";
import {
  authAPI,
  ResponseCodes,
  ResponseCodesForCaptcha,
  securityAPI,
} from "../api/api";
import { RootState } from "./reduxStore";

const SET_USER_DATA = "auth/SET_USER_DATA";
// const WRONG_AUTH_DATA = "auth/WRONG_AUTH_DATA";
const LOGIN_USER = "auth/LOGIN_USER";
const LOGOUT_USER = "auth/LOGOUT_USER";
const GET_CAPTCHA = "auth/GET_CAPTCHA";
const SHOW_ERROR = "auth/SHOW_ERROR";
const HIDE_ERROR = "auth/HIDE_ERROR";

let initState = {
  id: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuthorised: false as boolean,
  authMessage: null as string | null,
  captchaUrl: null as string | null,
  errorMessage: null as string | null,
};

export type AuthState = typeof initState;

type ActionType =
  | SetUserDataAction
  | LoginUserAction
  | LogoutUserAction
  | GetCaptchaUrlAction
  | ShowErrorAction
  | HideErrorAction;

const authReducer = (state = initState, action: ActionType): AuthState => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
        isAuthorised: true,
      };
    }

    case LOGIN_USER: {
      return {
        ...state,
        authMessage: action.payload,
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

    // case WRONG_AUTH_DATA: {
    //   return { message: "You have not registered yet" };
    // }

    default:
      return state;
  }
};

export default authReducer;

//! Actions

type SetUserDataPayload = {
  id: number | null;
  login: string | null;
  email?: string | null;
};

type SetUserDataAction = {
  type: typeof SET_USER_DATA;
  payload: SetUserDataPayload;
};
export const setUserData = ({
  id,
  login,
  email,
}: SetUserDataPayload): SetUserDataAction => {
  return { type: SET_USER_DATA, payload: { id, login, email } };
};

type LoginUserAction = {
  type: typeof LOGIN_USER;
  payload: string;
};
export const loginUser = (message: string): LoginUserAction => {
  return { type: LOGIN_USER, payload: message };
};

type LogoutUserAction = {
  type: typeof LOGOUT_USER;
};
export const logoutUser = (): LogoutUserAction => {
  return { type: LOGOUT_USER };
};

type GetCaptchaUrlAction = {
  type: typeof GET_CAPTCHA;
  url: string;
};
export const getCaptchaUrl = (url: string): GetCaptchaUrlAction => {
  return { type: GET_CAPTCHA, url };
};

type ShowErrorAction = {
  type: typeof SHOW_ERROR;
  message: string;
};
export const showError = (message: string): ShowErrorAction => {
  return { type: SHOW_ERROR, message };
};

type HideErrorAction = {
  type: typeof HIDE_ERROR;
};
export const hideError = (): HideErrorAction => {
  return { type: HIDE_ERROR };
};

//!Thunks

type AuthThunkActionType = ThunkAction<
  Promise<void>, //? Is here a Promise?
  RootState,
  unknown,
  ActionType
>;

export const authData = (): AuthThunkActionType => async (dispatch) => {
  const response = await authAPI.authInfo();
  if (response.resultCode === ResponseCodes.success) {
    dispatch(setUserData(response.data));
  }
};

type LoginType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string | null;
};

export const loginTC =
  (values: LoginType): AuthThunkActionType =>
    async (dispatch) => {
      try {
        const response = await authAPI.authLogin(values);
        if (response.resultCode === ResponseCodes.success) {
          dispatch(loginUser("Success"));
          dispatch(authData());
        } else {
          if (response.resultCode === ResponseCodesForCaptcha.captcha_needed) {
            dispatch(getCaptchaTC());
          }
          dispatch(loginUser(response.messages[0]));
        }
      } catch (error: any) {

        dispatch(showErrorMessage(error));
      }
    };

export const logoutTC = (): AuthThunkActionType => async (dispatch) => {
  const response = await authAPI.authLogout();
  if (response.data.resultCode === ResponseCodes.success) {
    dispatch(logoutUser());
  }
};

export const getCaptchaTC = (): AuthThunkActionType => async (dispatch) => {
  const response = await securityAPI.getCaptcha();
  dispatch(getCaptchaUrl(response.url));
};

export const showErrorMessage =
  (message: string): AuthThunkActionType =>
    async (dispatch) => {
      dispatch(showError(message));
      setTimeout(() => dispatch(hideError()), 3000);
    };
