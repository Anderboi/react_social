import React from "react";
import { MessageItem } from "./MessageItem/MessageItem";
import css from "./MessageList.module.css";
import base from "../../../Common.module.css";
import {
  addMessageActionCreator,
  updateMessageInputActionCreator,
} from "./../../../redux/messagesReducer";

export function MessageList(props) {
  const messageItems = props.data.messages.map((t) => (
    <MessageItem text={t.text} id={t.id} key={t.id} isOwn={t.isOwn} />
  ));

  const messageInput = React.createRef();

  let sendMessage = (e) => {
    e.preventDefault();

    const addMessage = addMessageActionCreator();
    props.dispatch(addMessage);
  };

  const updateMessageInput = () => {
    const updateInput = updateMessageInputActionCreator(
      messageInput.current.value
    );
    props.dispatch(updateInput);
  };

  return (
    <div className={css.message_block}>
      <div className={css.message_list}>{messageItems}</div>
      <form onSubmit={sendMessage} className={css.message_input_block}>
        <input
          ref={messageInput}
          onChange={updateMessageInput}
          value={props.data.newPostMessage}
          className={`${base.input} ${css.message_input_textarea}`}
          type="text"
          name="messageText"
          id="messageText"
        />
        <button onClick={sendMessage} className={base.button} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
