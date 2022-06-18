import mainPageReducer, {
  addPostActionCreator,
  deletePost,
  editPost,
} from "./mainPageReducer";

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
};

it("post added", () => {
  let addPost = addPostActionCreator("data");

  let newState = mainPageReducer(initState, addPost);

  expect(newState.posts.length).toBe(4);
  expect(addPost).toBeDefined();
});

it("post deleted", () => {
  const postId = "01";

  let deletePostAction = deletePost(postId);

  let newState = mainPageReducer(initState, deletePostAction);

  expect(newState.posts.length).toBe(2);
});

it("post was editted", () => {
  const newPostText = "New Post Text";
  const postId = "01";

  let editPostAction = editPost(postId, newPostText);

  let newState = mainPageReducer(initState, editPostAction);

  expect(newState.posts.some((t) => t.text === "New Post Text")).toBeDefined();
});
