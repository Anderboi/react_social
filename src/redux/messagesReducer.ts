import { ThunkAction } from "redux-thunk";
import { Message, User } from "../types/types";
import { RootState } from "./reduxStore";
import { usersAPI } from "../api/api";

const ADD_MESSAGE = "messagePage/ADD-MESSAGE";
const GET_FOLLOWED_USER = "messagePage/GET_FOLLOWED_USER";

type State = {
  followedUsers: Array<User> | null;
  messages: Array<Message>;
  usersOnPageCount: number;
};

const initState: State = {
  followedUsers: null,
  usersOnPageCount: 10,
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

const messageReducer = (state = initState, action: ActionType): State => {
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

type ActionType = AddMessageAction | GetFollowedUserAction;

type AddMessageAction = {
  type: typeof ADD_MESSAGE;
  data: string;
};
export const addMessage = (data: string): AddMessageAction => {
  return { type: ADD_MESSAGE, data };
};

type GetFollowedUserAction = {
  type: typeof GET_FOLLOWED_USER;
  data: Array<User>;
};
export const getFollowedUsers = (data: Array<User>): GetFollowedUserAction => {
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

export const getFollowedUserTC =
  (usersOnPage: number): MessageThunkActionType =>
  async (dispatch) => {
    const response = await usersAPI.getUsers(1, usersOnPage, true);

    dispatch(getFollowedUsers(response.items));
  };
