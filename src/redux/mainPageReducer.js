import { profileAPI } from "../api/api";

const ADD_POST = "postsPage/ADD-POST";
const SET_USER_INFO = "postsPage/SET_USER_INFO";
const SET_USER_STATUS = "postsPage/SET_USER_STATUS";
const DELETE_POST = "postsPage/DELETE_POST";
const EDIT_POST = "postsPage/EDIT_POST";

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

  userInfo: null,
  profileStatus: "",
};

const mainPageReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST: {
      // if (state.newPostMessage.length > 0) {
      return {
        ...state,
        posts: [
          {
            text: action.data,
            id: Math.random() * 100,
          },
          ...state.posts,
        ],
      };
    }

    case DELETE_POST: {
      return {
        ...state,
        posts: [...state.posts.filter((t) => t.id !== action.postId)],
      };
    }

    case EDIT_POST: {
      return {
        ...state,
        posts: [
          ...state.posts.map((t) =>
            t.id === action.postId ? (t.text = action.postText) : t
          ),
        ],
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

export const addPostActionCreator = (data) => {
  return { type: ADD_POST, data };
};
export const deletePost = (postId) => {
  return { type: DELETE_POST, postId };
};
export const editPost = ([postId, newPost]) => {
  return { type: EDIT_POST, postId, newPost };
};

export const setUserInfo = (userInfo) => {
  return { type: SET_USER_INFO, userInfo };
};

export const setUserStatus = (data) => {
  return { type: SET_USER_STATUS, data };
};

export const setUserInfoTC = (userId) => {
  return async (dispatch) => {
    const response = await profileAPI.getAuthUser(userId);
    dispatch(setUserInfo(response));
  };
};

export const getUserStatusTC = (userId) => async (dispatch) => {
  const response = await profileAPI.getUserStatus(userId);
  dispatch(setUserStatus(response.data));
};

export const setUserStatusTC = (text) => async (dispatch) => {
  const response = await profileAPI.setUserStatusApi(text);
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(text));
  }
};
