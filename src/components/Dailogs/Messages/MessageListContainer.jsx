import React from "react";
import { MessageList } from "./MessageList";
import {
  addMessageActionCreator,
  updateMessageInputActionCreator,
} from "../../../redux/messagesReducer";
import store from "./../../../redux/reduxStore";

export function MessageListContainer(props) {
  let sendMessage = (e) => {
    const addMessage = addMessageActionCreator();
    store.dispatch(addMessage);
  };

  const updateMessageInput = (text) => {
    const updateInput = updateMessageInputActionCreator(text);
    store.dispatch(updateInput);
  };

  return (
    <MessageList
      messages={props.store.messages}
      sendMessage={sendMessage}
      updateMessageInput={updateMessageInput}
      newPostMessage={props.store.newPostMessage}
    />
  );
}
