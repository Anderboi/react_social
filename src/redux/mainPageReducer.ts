import { profileAPI } from "../api/api";
import { Photos, Post, UserInfo } from "../types/types";

const ADD_POST = "postsPage/ADD-POST";
const SET_USER_INFO = "postsPage/SET_USER_INFO";
const SET_USER_STATUS = "postsPage/SET_USER_STATUS";
const DELETE_POST = "postsPage/DELETE_POST";
const EDIT_POST = "postsPage/EDIT_POST";
const SET_USER_PHOTO = "postsPage/SET_USER_PHOTO";
const SET_USER_PROFILE = "postsPage/SET_USER_PROFILE";
const SET_USER_PROFILE_MESSAGE = "postsPage/SET_USER_PROFILE_MESSAGE";

type State = {
  posts: Array<Post>;
  userInfo: UserInfo | null;
  profileStatus: string | null;
  errorMessage: string | null;
};

let initState: State = {
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

const mainPageReducer = (state = initState, action: any): State => {
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

    case SET_USER_PROFILE_MESSAGE: {
      return {
        ...state,
        errorMessage: action.message,
      };
    }

    case SET_USER_PHOTO: {
      return { ...state, userInfo: { ...state.userInfo!, photos: action.file } }; 
      // {//TODO UserInfo! should be reviewed }
    }

    default:
      return state;
  }
};

export default mainPageReducer;

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
  newPost: string;
};
export const editPost = (postId: number, newPost: string): EditPostAction => {
  return { type: EDIT_POST, postId, newPost };
};

type SetUserInfoAction = {
  type: typeof SET_USER_INFO;
  userInfo: UserInfo;
};
export const setUserInfo = (userInfo: UserInfo): SetUserInfoAction => {
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
  file: Photos;
};
export const setUserPhoto = (file: Photos): SetUserPhotoAction => {
  return { type: SET_USER_PHOTO, file };
};

type SetUserProfileAction = {
  type: typeof SET_USER_PROFILE;
  data: UserInfo;
};
export const setUserProfile = (data: UserInfo): SetUserProfileAction => {
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

export const setUserInfoTC = (userId: number) => {
  return async (dispatch: any) => {
    const response = await profileAPI.getAuthUser(userId);
    dispatch(setUserInfo(response));
  };
};

export const uploadPhoto = (image: any) => {
  return async (dispatch: any) => {
    const response = await profileAPI.uploadPhoto(image);
    if (response.data.resultCode === 0) {
      dispatch(setUserPhoto(response.data.data.photos));
    }
  };
};

export const setUserProfileTC = (profileData: UserInfo) => {
  return async (dispatch: any) => {
    const response = await profileAPI.setUserProfile(profileData);

    if (response.data.resultCode === 0) {
      dispatch(setUserInfo(profileData));
    }
  };
};
export const getUserProfileTC = (userId: number) => {
  return async (dispatch: any) => {
    const response = await profileAPI.getUserProfile(userId);

    if (response.data.resultCode === 0) {
      dispatch(setUserInfo(response.data));
    }
  };
};

export const getUserStatusTC = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getUserStatus(userId);
  dispatch(setUserStatus(response.data));
};

export const setUserStatusTC = (text: string) => async (dispatch: any) => {
  const response = await profileAPI.setUserStatusApi(text);

  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(text));
  }
};
