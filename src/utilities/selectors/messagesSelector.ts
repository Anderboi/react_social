import { RootState } from "../../redux/reduxStore";

export const getMessages = (state: RootState) => {
  return state.messagesPage.messages;
};
export const getFollowedUsers = (state: RootState) => {
  return state.messagesPage.followedUsers;
};
export const usersOnPageCountSelector = (state: RootState) => {
  return state.messagesPage.usersOnPageCount;
};


