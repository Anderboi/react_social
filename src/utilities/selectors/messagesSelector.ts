import { RootState } from "../../redux/reduxStore";

export const getMessages = (state: RootState) => {
  return state.messagesPage.messages;
};
export const getMessagesUsers = (state: RootState) => {
  return state.messagesPage.users;
};
