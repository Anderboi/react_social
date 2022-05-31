import React from "react";
import { MessageItem } from "./MessageItem/MessageItem";
import css from "./MessageList.module.css";
import base from "../../../Common.module.css";

export function MessageList(props) {
  
  const messageItems = props.messages.map((t) => (
    <MessageItem text={t.text} id={t.id} key={t.id} isOwn={t.isOwn} />
  ));

  const messageInput = React.createRef();

  let onSubmit = (e) => {
  
    e.preventDefault();
    props.sendMessage();
  };

  let updateInput = () => props.updateMessageInput(messageInput.current.value);

  return (
    <div className={css.message_block}>
      <div className={css.message_list}>{messageItems}</div>
      <form onSubmit={onSubmit} className={css.message_input_block}>
        <input
          ref={messageInput}
          onChange={updateInput}
          value={props.newPostMessage}
          className={`${base.input} ${css.message_input_textarea}`}
          type="text"
          name="messageText"
          id="messageText"
        />
        <button onClick={onSubmit} className={base.button} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
