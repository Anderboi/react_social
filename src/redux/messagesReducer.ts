import { Message, User } from "../types/types";

const ADD_MESSAGE = "messagePage/ADD-MESSAGE";

type State = {
  users: Array<User>;
  messages: Array<Message>;
};

const initState: State = {
  users: [
    {
      name: "Ivan",
      id: 1,
      photos: {
        small:
          "https://i.pinimg.com/564x/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.jpg",
        large:
          "https://i.pinimg.com/564x/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.jpg",
      },
      followed: false,
      status: null,
      uniqueUrlName: null,
    },
  ],
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

const messageReducer = (state = initState, action: any): State => {
  
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

    default:
      return state;
  }
};

export default messageReducer;

type AddMessageAction = {
  type: typeof ADD_MESSAGE;
  data: string;
};

export const addMessage = (data: string): AddMessageAction => {
  return { type: ADD_MESSAGE, data };
};

export const sendMessage = (text: string) => (dispatch: any) => {
  text && dispatch(addMessage(text));
};
