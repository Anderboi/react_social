import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const WRONG_AUTH_DATA = "WRONG_AUTH_DATA";
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";

let initState = {
  id: null,
  login: null,
  email: null,
  isAuthorised: false,
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

    // case LOGIN_USER: {
    //   return {
    //     ...state,
    //   };
    // }
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

export const loginUser = () => {
  return { type: LOGIN_USER };
};

export const logoutUser = () => {
  return { type: LOGOUT_USER };
};

export const authData = () => {
  return (dispatch) => {
    authAPI.authInfo().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserData(data.data));
      }
    });
  };
};

export const loginTC = (values) => {
  return (dispatch) => {
    authAPI.authLogin(values).then((data) => {
      if (data.resultCode === 0) {
        dispatch(authData());
      }
    });
  };
};

export const logoutTC = () => {
  return (dispatch) => {
    authAPI.authLogout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(logoutUser());
      }
    });
  };
};
