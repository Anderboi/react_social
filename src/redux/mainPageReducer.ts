import { ThunkAction } from "redux-thunk";
import { profileAPI, ResponseCodes } from "../api/api";
import { IPhotos, IPost, IUserInfo } from "../types/types";
import { RootState } from "./reduxStore";

const ADD_POST = "postsPage/ADD-POST";
const SET_USER_INFO = "postsPage/SET_USER_INFO";
const SET_USER_STATUS = "postsPage/SET_USER_STATUS";
const DELETE_POST = "postsPage/DELETE_POST";
const EDIT_POST = "postsPage/EDIT_POST";
const SET_USER_PHOTO = "postsPage/SET_USER_PHOTO";
const SET_USER_PROFILE = "postsPage/SET_USER_PROFILE";
const SET_USER_PROFILE_MESSAGE = "postsPage/SET_USER_PROFILE_MESSAGE";

interface IState  {
  posts: Array<IPost>;
  userInfo: IUserInfo | null;
  profileStatus: string | null;
  errorMessage: string | null;
};

const initState: IState = {
  posts: [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dignissimos minus vitae maxime omnis magnam, fugit iste ducimus veniam vero eius et alias deserunt est illo sequi aut enim ratione!",
      id: 1,
    },
    {
      text: "us et alias deserunt est illo sequi aut enim ratione!",
      id: 2,
    },
    {
      text: "mnis magnam, fugit iste ducimus veniam vero eius et alias deserunt est illo sequi aut enim ratione!",
      id: 3,
    },
  ],
  userInfo: null,
  profileStatus: null,
  errorMessage: "",
};

const mainPageReducer = (state = initState, action: ActionType): IState => {
  switch (action.type) {
    case ADD_POST: {
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
          ...state.posts.map((t) => {
            if (t.id === action.postId) {
              return (t = { text: (t.text = action.newPostText), id: t.id });
            } else {
              return t;
            }
          }),
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

    case SET_USER_PROFILE_MESSAGE: {
      return {
        ...state,
        errorMessage: action.message,
      };
    }

    case SET_USER_PHOTO: {
      return {
        ...state,
        userInfo: { ...state.userInfo!, photos: action.file },
      };
      // {//TODO UserInfo! should be reviewed }
    }

    default:
      return state;
  }
};

export default mainPageReducer;

//! Actions

type ActionType =
  | AddPostAction
  | DeletePostAction
  | EditPostAction
  | SetUserInfoAction
  | SetUserStatusAction
  | SetUserPhotoAction
  | SetUserProfileAction
  | SetUserProfileMessageAction;

type AddPostAction = {
  type: typeof ADD_POST;
  data: string;
};
export const addPostActionCreator = (data: string): AddPostAction => {
  return { type: ADD_POST, data };
};

type DeletePostAction = {
  type: typeof DELETE_POST;
  postId: number;
};
export const deletePost = (postId: number): DeletePostAction => {
  return { type: DELETE_POST, postId };
};

type EditPostAction = {
  type: typeof EDIT_POST;
  postId: number;
  newPostText: string;
};
export const editPost = (
  postId: number,
  newPostText: string
): EditPostAction => {
  return { type: EDIT_POST, postId, newPostText };
};

type SetUserInfoAction = {
  type: typeof SET_USER_INFO;
  userInfo: IUserInfo;
};
export const setUserInfo = (userInfo: IUserInfo): SetUserInfoAction => {
  return { type: SET_USER_INFO, userInfo };
};

type SetUserStatusAction = {
  type: typeof SET_USER_STATUS;
  data: string;
};
export const setUserStatus = (data: string): SetUserStatusAction => {
  return { type: SET_USER_STATUS, data };
};

type SetUserPhotoAction = {
  type: typeof SET_USER_PHOTO;
  file: IPhotos;
};
export const setUserPhoto = (file: IPhotos): SetUserPhotoAction => {
  return { type: SET_USER_PHOTO, file };
};

type SetUserProfileAction = {
  type: typeof SET_USER_PROFILE;
  data: IUserInfo;
};
export const setUserProfile = (data: IUserInfo): SetUserProfileAction => {
  return { type: SET_USER_PROFILE, data };
};

type SetUserProfileMessageAction = {
  type: typeof SET_USER_PROFILE_MESSAGE;
  message: string;
};
export const setUserProfileMessage = (
  message: string
): SetUserProfileMessageAction => {
  return { type: SET_USER_PROFILE_MESSAGE, message };
};

//! Thunks

type AuthThunkActionType = ThunkAction<
  void, //? Is here a Promise?
  RootState,
  unknown,
  ActionType
>;

export const setUserInfoTC = (userId: number): AuthThunkActionType => {
  return async (dispatch) => {
    const response = await profileAPI.getUserProfile(userId);
    dispatch(setUserInfo(response.data));
  };
};

export const uploadPhoto = (image: any): AuthThunkActionType => {
  return async (dispatch) => {
    const response = await profileAPI.uploadPhoto(image);
    if (response.resultCode === ResponseCodes.success) {
      dispatch(setUserPhoto(response.data.photos));
    }
  };
};

export const setUserProfileTC = (
  profileData: IUserInfo
): AuthThunkActionType => {
  return async (dispatch) => {
    const response = await profileAPI.setUserProfile(profileData);

    if (response.data.resultCode === ResponseCodes.success) {
      dispatch(setUserInfo(profileData));
    }
  };
};
export const getUserProfileTC = (userId: number): AuthThunkActionType => {
  return async (dispatch) => {
    const response = await profileAPI.getUserProfile(userId);
    dispatch(setUserInfo(response.data));
  };
};

export const getUserStatusTC =
  (userId: number): AuthThunkActionType =>
  async (dispatch) => {
    const response = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatus(response.data));
  };

export const setUserStatusTC =
  (text: string): AuthThunkActionType =>
  async (dispatch) => {
    const response = await profileAPI.setUserStatusApi(text);

    if (response.data.resultCode === ResponseCodes.success) {
      dispatch(setUserStatus(text));
    }
  };
