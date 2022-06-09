import React from "react";
import { MessageItem } from "./MessageItem/MessageItem";
import css from "./MessageList.module.css";
import base from "../../../Common.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { maxLengthCreator } from "../../../utilities/validators/validators";

export const MessageList = (props) => {
  const messageItems = props.messages.map((t) => (
    <MessageItem text={t.text} id={t.id} key={t.id} isOwn={t.isOwn} />
  ));

  const maxLength50 = maxLengthCreator(50);

  return (
    <div className={css.message_block}>
      <div className={css.message_list}>{messageItems}</div>
      <div>
        <Formik
          initialValues={{ message: "" }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            props.sendMessage(values.message);
            
            setSubmitting(false);
            resetForm({ values: "" });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <ErrorMessage
                className={base.error_message}
                name="message"
                component="span"
              />
              <div className={css.message_input_block}>
                <Field
                  // onChange={updateInput}
                  // value={props.newPostMessage}
                  className={`${base.input} ${css.message_input_textarea}`}
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Enter your message here ..."
                  validate={maxLength50}
                />
                <button
                  className={base.button}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Send
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
