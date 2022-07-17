import { ThunkAction } from "redux-thunk";
import { IMessage, IUser } from "../types/types";
import { RootState } from "./reduxStore";
import { dialogsAPI, usersAPI } from "../api/api";

const ADD_MESSAGE = "messagePage/ADD-MESSAGE";
const GET_FOLLOWED_USER = "messagePage/GET_FOLLOWED_USER";
const GET_USER_MESSAGES = 'messagePage/GET_USER_MESSAGES';
const GET_USER_ID = 'messagePage/GET_USER_ID';

interface IState {
  followedUsers: Array<IUser> | null;
  messages: Array<IMessage>;
  usersOnPageCount: number;
  currentUserId: number |null;
};

const initState: IState = {
  followedUsers: null,
  usersOnPageCount: 10,
  currentUserId: null,
  messages: [
    {
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, modi, ipsam nemo doloribus earum voluptatem blanditiis",
      id: 1,
      isOwn: true,
    },
    {
      text: "Ipsam nemo doloribus earum voluptatem blanditiis",
      id: 2,
      isOwn: false,
    },
    {
      text: "Repudiandae dolore corrupti doloremque voluptate eaque incidunt nostrum quibusdam amet quae aperiam sint sed.",
      id: 3,
      isOwn: true,
    },
  ],
};


const messageReducer = (state = initState, action: ActionType): IState => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            text: action.data,
            id: Math.random() * 100,
            isOwn: true,
          },
        ],
      };
    }

    case GET_USER_ID: {
      return {
        ...state,
        currentUserId: action.userId
      }
    }

    case GET_FOLLOWED_USER: {
      return {
        ...state,
        followedUsers: [...action.data],
      };
    }

    default:
      return state;
  }
};

export default messageReducer;

//! Actions

type ActionType = AddMessageAction | GetFollowedUserAction | GetUserMessagesAction | GetChatUserIdAction;

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
  debugger
  return { type: GET_USER_ID, userId };
};
type GetUserMessagesAction = {
  type: typeof GET_USER_MESSAGES;
  data: Array<string>;
};
export const getUserMessages = (data: Array<string>): GetUserMessagesAction => {
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

export const sendMessage =
  (text: string): MessageThunkActionType =>
  (dispatch) => {
    text && dispatch(addMessage(text));
  };

  export const getUserMessagesTC = (userId:number):MessageThunkActionType =>async(dispatch)=>{
    const response = await dialogsAPI.getAllMessages(userId);
    debugger;
    dispatch(getUserMessages(response));
  }

export const getFollowedUserTC =
  (usersOnPage: number): MessageThunkActionType =>
  async (dispatch) => {
    const response = await usersAPI.getUsers(1, usersOnPage, true);

    dispatch(getFollowedUsers(response.items));
  };
