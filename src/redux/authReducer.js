import { authAPI } from "../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";
const WRONG_AUTH_DATA = "auth/WRONG_AUTH_DATA";
const LOGIN_USER = "auth/LOGIN_USER";
const LOGOUT_USER = "auth/LOGOUT_USER";

let initState = {
  id: null,
  login: null,
  email: null,
  isAuthorised: false,
  authMessage: null,
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

    case WRONG_AUTH_DATA: {
      return { message: "You have not registered yet" };
    }

    default:
      return state;
  }
};

export default authReducer;

export const setUserData = ({ id, login, email }) => {
  return { type: SET_USER_DATA, data: { id, login, email } };
};

export const loginUser = (message) => {
  return { type: LOGIN_USER, message };
};

export const logoutUser = () => {
  return { type: LOGOUT_USER };
};

export const authData = () => {
  return async (dispatch) => {
    const response = await authAPI.authInfo();
    if (response.resultCode === 0) {
      dispatch(setUserData(response.data));
    }
  };
};

export const loginTC = (values) => {
  return async (dispatch) => {
    const response = await authAPI.authLogin(values);
    if (response.resultCode === 0) {
      dispatch(loginUser("Success"));
      dispatch(authData());
    } else {
      dispatch(loginUser(response.messages[0]));
    }
  };
};

export const logoutTC = () => {
  return async (dispatch) => {
    const response = await authAPI.authLogout();
    if (response.data.resultCode === 0) {
      dispatch(logoutUser());
    }
  };
};
