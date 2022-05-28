const ADD_POST = "ADD-POST";
const UPDATE_INPUT = "UPDATE-INPUT";

const mainPageReducer = (data, action) => {
  switch (action.type) {
    case ADD_POST:
      const post = {
        text: data.newPostMessage,
        id: Math.random() * 10,
      };
      if (data.newPostMessage.length > 0) {
        data.posts.unshift(post);
        data.newPostMessage = "";
      }
      return data;
    case UPDATE_INPUT:
      data.newPostMessage = action.data;

      return data;

    default:
      return data;
  }
};

export default mainPageReducer;

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};
export const updatePostInputActionCreator = (data) => {
  return { type: UPDATE_INPUT, data: data };
};
