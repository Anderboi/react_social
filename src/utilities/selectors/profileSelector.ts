import { RootState } from "../../redux/reduxStore";

export const getUserInfo = (state: RootState) => {
    return state.profilePage.userInfo;
  };
export const getProfileStatus = (state: RootState) => {
    return state.profilePage.profileStatus;
  };
export const getPosts = (state: RootState) => {
    return state.profilePage.posts;
  };
  
  