const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_INPUT = "UPDATE-MESSAGE-INPUT";

const messageReducer = (data, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const message = {
        text: data.newPostMessage,
        id: Math.random() * 10,
        isOwn: true,
      };
      if (data.newPostMessage.length > 0) {
        data.newPostMessage = "";
        data.messages.push(message);
      }
      return data;
    case UPDATE_MESSAGE_INPUT:
      data.newPostMessage = action.data;
      return data;

    default:
      return data;
  }
};

export default messageReducer;

export const addMessageActionCreator = () => {
  return { type: ADD_MESSAGE };
};
export const updateMessageInputActionCreator = (data) => {
  return { type: UPDATE_MESSAGE_INPUT, data: data };
};
