import form from "./PostForm.module.css";
import base from "../../../Common.module.css";
import React from "react";

export function PostForm(props) {
  const postInput = React.createRef();
  const sendPost = () => {
    props.addPost(postInput.current.value);

    postInput.current.value = "";
  };

  return (
    <div className={form.post_form}>
      <h4>Make new post</h4>
      <textarea
        ref={postInput}
        name="post"
        id="post"
        cols="30"
        rows="2"
        placeholder="Type your text here..."
        className={`${base.input} ${form.input}`}
      ></textarea>
      <button onClick={sendPost} type="submit" className={base.button}>
        Send post 
      </button>
    </div>
  );
}
