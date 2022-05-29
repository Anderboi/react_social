import React from "react";
import {
  addPostActionCreator,
  updatePostInputActionCreator,
} from "../../../redux/mainPageReducer";
import { PostForm } from "./PostForm";
import store from "../../../redux/reduxStore";

export function PostFormContainer(props) {
  const sendPost = () => {
    store.dispatch(addPostActionCreator());
  };

  const updatePostInput = (text) => {
    store.dispatch(updatePostInputActionCreator(text));
  };

  return (
    <PostForm
      sendPost={sendPost}
      updatePostInput={updatePostInput}
      newPostMessage={props.state.profilePage.newPostMessage}
    />
  );
}
