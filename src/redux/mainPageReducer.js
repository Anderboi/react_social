const ADD_POST = "ADD-POST";
const UPDATE_INPUT = "UPDATE-INPUT";

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
  newPostMessage: "",
};

const mainPageReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newState = JSON.parse(JSON.stringify(state));

      const post = {
        text: newState.newPostMessage,
        id: Math.random() * 10,
      };
      if (newState.newPostMessage.length > 0) {
        newState.posts.unshift(post);
        newState.newPostMessage = "";
      }
      return newState;
    }
    case UPDATE_INPUT: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.newPostMessage = action.data;

      return newState;
    }

    default:
      return state;
  }
};

export default mainPageReducer;

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};
export const updatePostInputActionCreator = (data) => {
  return { type: UPDATE_INPUT, data: data };
};
