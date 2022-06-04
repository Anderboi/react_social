import { authInfo } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const WRONG_AUTH_DATA = "WRONG_AUTH_DATA";

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

export const authData = () => {
  return (dispatch) => {
    authInfo().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserData(data.data));
      }
    });
  };
};
