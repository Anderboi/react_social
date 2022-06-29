import { profileAPI } from "../api/api";

const ADD_POST = "postsPage/ADD-POST";
const SET_USER_INFO = "postsPage/SET_USER_INFO";
const SET_USER_STATUS = "postsPage/SET_USER_STATUS";
const DELETE_POST = "postsPage/DELETE_POST";
const EDIT_POST = "postsPage/EDIT_POST";
const SET_USER_PHOTO = "postsPage/SET_USER_PHOTO";
const SET_USER_PROFILE = "postsPage/SET_USER_PROFILE";

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

    // case SET_USER_PROFILE: {
    //   return {
    //     ...state,
    //     userInfo: {
    //       ...state.userInfo,
    //       aboutMe: action.data.aboutMe,
    //       lookingForAJob: action.data.lookingForAJob,
    //       lookingForAJobDescription: action.data.lookingForAJobDescription,
    //       fullName: action.data.fullName,
    //       photos: action.data.photos,
    //       contacts: {
    //         ...state.userInfo.contacts,
    //         github: action.data.github,
    //         vk: action.data.vk,
    //         facebook: action.data.facebook,
    //         instagram: action.data.instagram,
    //         twitter: action.data.twitter,
    //         website: action.data.website,
    //         youtube: action.data.youtube,
    //         mainLink: action.data.mainLink,
    //       },
    //     },
    //   };
    // }

    case SET_USER_PHOTO: {
      return { ...state, userInfo: { ...state.userInfo, photos: action.file } };
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

export const setUserPhoto = (file) => {
  return { type: SET_USER_PHOTO, file };
};

export const setUserProfile = (data) => {
  return { type: SET_USER_PROFILE, data };
};

export const setUserInfoTC = (userId) => {
  return async (dispatch) => {
    const response = await profileAPI.getAuthUser(userId);
    dispatch(setUserInfo(response));
  };
};

export const uploadPhoto = (image) => {
  return async (dispatch) => {
    const response = await profileAPI.uploadPhoto(image);
    if (response.data.resultCode === 0) {
      console.log(response.data);
      dispatch(setUserPhoto(response.data.data.photos));
    }
  };
};

export const setUserProfileTC = (profileData) => {
  return async (dispatch) => {
    const response = await profileAPI.setUserProfile(profileData);

    if (response.data.resultCode === 0) {
      dispatch(setUserInfo(profileData));
    }
  };
};
export const getUserProfileTC = (userId) => {
  return async (dispatch) => {
    const response = await profileAPI.getUserProfile(userId);
    if (response.data.resultCode === 0) {
      dispatch(setUserInfo(response.data));
    }
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
