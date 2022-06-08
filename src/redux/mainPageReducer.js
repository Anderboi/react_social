import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_INPUT = "UPDATE-INPUT";
const SET_USER_INFO = "SET_USER_INFO";
const SET_USER_STATUS = "SET_USER_STATUS";

let initState = {
  posts: [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dignissimos minus vitae maxime omnis magnam, fugit iste ducimus veniam vero eius et alias deserunt est illo sequi aut enim ratione!",
      id: "01",
    },
    {
      text: "us et alias deserunt est illo sequi aut enim ratione!",
      id: "02",
    },
    {
      text: "mnis magnam, fugit iste ducimus veniam vero eius et alias deserunt est illo sequi aut enim ratione!",
      id: "03",
    },
  ],
  newPostMessage: "",
  userInfo: null,
  profileStatus: "First",
};

const mainPageReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST: {
      if (state.newPostMessage.length > 0) {
        return {
          ...state,
          posts: [
            {
              text: state.newPostMessage,
              id: Math.random() * 10,
            },
            ...state.posts,
          ],
          newPostMessage: "",
        };
      }
      break;
    }
    case UPDATE_INPUT: {
      return {
        ...state,
        newPostMessage: action.data,
      };
    }
    case SET_USER_INFO: {
      return {
        ...state,
        userInfo: action.userInfo,
      };
    }

    case SET_USER_STATUS: {
      
      return { ...state, profileStatus: action.data };
    }

    default:
      return state;
  }
};

export default mainPageReducer;

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};
export const updatePostInputActionCreator = (data) => {
  return { type: UPDATE_INPUT, data: data };
};
export const setUserInfo = (userInfo) => {
  return { type: SET_USER_INFO, userInfo };
};

export const setUserStatus = (data) => {
  return { type: SET_USER_STATUS, data };
};

export const setUserInfoTC = (userId) => {
  return (dispatch) => {
    profileAPI.getAuthUser(userId).then((data) => {
      dispatch(setUserInfo(data));
    });
  };
};

export const getUserStatusTC = (userId) => (dispatch) => {
  profileAPI.getUserStatus(userId).then((response) => {
    
    dispatch(setUserStatus(response.data));
  });
};

export const setUserStatusTC = (text) => (dispatch) => {
  profileAPI.setUserStatusApi(text).then((response) => {
   
    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(text));
    }
  });
};
