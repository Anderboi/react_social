import form from "./PostForm.module.css";
import base from "../../../Common.module.css";
import React from "react";
import {
  addPostActionCreator,
  updatePostInputActionCreator,
} from "./../../../redux/mainPageReducer";

export function PostForm(props) {
  const postInput = React.createRef();

  const sendPost = () => {
    const addPost = addPostActionCreator();
    props.dispatch(addPost);
  };

  const updatePostInput = () => {
    const updateInput = updatePostInputActionCreator(postInput.current.value);
    props.dispatch(updateInput);
  };

  return (
    <div className={form.post_form}>
      <h4>Make new post</h4>
      <textarea
        ref={postInput}
        onChange={updatePostInput}
        value={props.store._data.mainPage.newPostMessage}
        name="post"
        id="post"
        cols="30"
        rows="2"
        placeholder="Type your text here..."
        className={`${base.input} ${form.input}`}
      />
      <button onClick={sendPost} type="submit" className={base.button}>
        Send post
      </button>
    </div>
  );
}
