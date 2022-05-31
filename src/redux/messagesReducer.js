const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_INPUT = "UPDATE-MESSAGE-INPUT";

let initState = {
  users: [
    {
      name: "Ivan",
      id: "01",
      icon: "https://i.pinimg.com/564x/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.jpg",
    },
    {
      name: "Andrei",
      id: "02",
      icon: "https://i.pinimg.com/564x/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.jpg",
    },
    {
      name: "Petr",
      id: "03",
      icon: "https://cdn-icons-png.flaticon.com/512/4139/4139970.png",
    },
    {
      name: "Pavel",
      id: "04",
      icon: "https://i.pinimg.com/564x/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.jpg",
    },
  ],
  messages: [
    {
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, modi, ipsam nemo doloribus earum voluptatem blanditiis",
      id: "01",
      isOwn: true,
    },
    {
      text: "Ipsam nemo doloribus earum voluptatem blanditiis",
      id: "02",
      isOwn: false,
    },
    {
      text: "Repudiandae dolore corrupti doloremque voluptate eaque incidunt nostrum quibusdam amet quae aperiam sint sed.",
      id: "03",
      isOwn: true,
    },
  ],
  newPostMessage: "",
};

const messageReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newState = JSON.parse(JSON.stringify(state));
      const message = {
        text: newState.newPostMessage,
        id: Math.random() * 10,
        isOwn: true,
      };
      if (newState.newPostMessage.length > 0) {
        newState.newPostMessage = "";
        newState.messages.push(message);
      }
      return newState;
    }
    case UPDATE_MESSAGE_INPUT: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.newPostMessage = action.data;
      return newState;
    }

    default:
      return state;
  }
};

export default messageReducer;

export const addMessageActionCreator = () => {
  return { type: ADD_MESSAGE };
};
export const updateMessageInputActionCreator = (data) => {
  return { type: UPDATE_MESSAGE_INPUT, data: data };
};
