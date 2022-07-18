import { ThunkAction } from "redux-thunk";
import { IMessage, IUser } from "../types/types";
import { RootState } from "./reduxStore";
import { dialogsAPI, usersAPI } from "../api/api";

const ADD_MESSAGE = "messagePage/ADD-MESSAGE";
const GET_FOLLOWED_USER = "messagePage/GET_FOLLOWED_USER";
const GET_USER_MESSAGES = "messagePage/GET_USER_MESSAGES";
const GET_USER_ID = "messagePage/GET_USER_ID";

interface IState {
  followedUsers: Array<IUser> | null;
  messages: Array<IMessage>;
  usersOnPageCount: number;
  currentUserId: number | null;
}

const initState: IState = {
  followedUsers: null,
  usersOnPageCount: 10,
  currentUserId: null,
  messages: [
    {
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, modi, ipsam nemo doloribus earum voluptatem blanditiis",
      id: 1,
      addedAt: Date.now.toString(),
      recipientId: 2,
      senderId: 1,
      senderName: "Anderboi",
      translatedBody: null,
      viewed: false
    }
  ]
};

const messageReducer = (state = initState, action: ActionType): IState => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            body: action.data,
            id: Math.random() * 100
          }
        ]
      };
    }

    case GET_USER_MESSAGES: {
      return {
        ...state,
        messages: action.data
      };
    }

    case GET_USER_ID: {
      return {
        ...state,
        currentUserId: action.userId
      };
    }

    case GET_FOLLOWED_USER: {
      return {
        ...state,
        followedUsers: [...action.data]
      };
    }

    default:
      return state;
  }
};

export default messageReducer;

//! Actions

type ActionType =
  | AddMessageAction
  | GetFollowedUserAction
  | GetUserMessagesAction
  | GetChatUserIdAction;

type AddMessageAction = {
  type: typeof ADD_MESSAGE;
  data: string;
};
export const addMessage = (data: string): AddMessageAction => {
  return { type: ADD_MESSAGE, data };
};

type GetChatUserIdAction = {
  type: typeof GET_USER_ID;
  userId: number;
};
export const getChatUserId = (userId: number): GetChatUserIdAction => {
  return { type: GET_USER_ID, userId };
};

//* Get all messages from User by Id
type GetUserMessagesAction = {
  type: typeof GET_USER_MESSAGES;
  data: Array<IMessage>;
};
export const getUserMessages = (
  data: Array<IMessage>
): GetUserMessagesAction => {
  return { type: GET_USER_MESSAGES, data };
};

type GetFollowedUserAction = {
  type: typeof GET_FOLLOWED_USER;
  data: Array<IUser>;
};
export const getFollowedUsers = (data: Array<IUser>): GetFollowedUserAction => {
  return { type: GET_FOLLOWED_USER, data };
};

//! Thunks

type MessageThunkActionType = ThunkAction<
  void, //? Is here a Promise?
  RootState,
  unknown,
  ActionType
>;

//! Send Post Thunk with API
export const sendMessage =
  (userId: number, post: string): MessageThunkActionType =>
  async (dispatch) => {
    await dialogsAPI.sendMessage(userId, post);

    // dispatch(addMessage(response.data.data.message.body));
    dispatch(getUserMessagesTC(userId));
  };

export const getUserMessagesTC =
  (userId: number): MessageThunkActionType =>
  async (dispatch) => {
    const response = await dialogsAPI.getAllMessages(userId);
    dispatch(getChatUserId(userId));
    dispatch(getUserMessages(response));
  };

export const getFollowedUserTC =
  (usersOnPage: number): MessageThunkActionType =>
  async (dispatch) => {
    const response = await usersAPI.getUsers(1, usersOnPage, true);

    dispatch(getFollowedUsers(response.items));
  };
