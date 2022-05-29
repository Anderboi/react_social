import React from "react";
import { MessageItem } from "./MessageItem/MessageItem";
import css from "./MessageList.module.css";
import base from "../../../Common.module.css";

export function MessageList(props) {
  const messageItems = props.messages.map((t) => (
    <MessageItem text={t.text} id={t.id} key={t.id} isOwn={t.isOwn} />
  ));

  const messageInput = React.createRef();

  let sendMessage = () => props.sendMessage();

  let updateMessageInput = () =>
    props.updateMessageInput(messageInput.current.value);

  return (
    <div className={css.message_block}>
      <div className={css.message_list}>{messageItems}</div>
      <form onSubmit={sendMessage} className={css.message_input_block}>
        <input
          ref={messageInput}
          onChange={updateMessageInput}
          value={props.newPostMessage}
          className={`${base.input} ${css.message_input_textarea}`}
          type="text"
          name="messageText"
          id="messageText"
        />
        <button onClick={sendMessage} className={base.button} type="button">
          Send
        </button>
      </form>
    </div>
  );
}
