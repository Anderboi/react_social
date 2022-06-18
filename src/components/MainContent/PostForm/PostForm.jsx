import form from "./PostForm.module.css";
import base from "../../../Common.module.css";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { maxLengthCreator } from "../../../utilities/validators/validators";

export function PostForm(props) {
  // const postInput = React.createRef();

  // const sendPost = (text) => {
  //   props.sendPost(text);
  // };

  // const updatePostInput = () => {
  //   let text = postInput.current.value;
  //   props.updatePostInput(text);
  // };

  const maxLength100 = maxLengthCreator(100);

  return (
    <div className={form.post_form}>
      <h4>Make new post</h4>
      <Formik
        initialValues={{ post: "" }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          props.sendPost(values.post);
          setSubmitting(false);
          resetForm({ values: "" }); //! Resets input field
        }}
      >
        <Form>
          <Field
            type="text"
            name="post"
            id="post"
            placeholder="Type your text here..."
            className={`${base.input} ${form.input}`}
            validate={maxLength100}
          />
          <ErrorMessage
            className={base.error_message}
            name="post"
            component="span"
          />
          <button type="submit" className={`${base.button} ${form.button}`}>
            Send post
          </button>
        </Form>
      </Formik>
    </div>
  );
}
