import React from "react";
import { MessegeItem } from "./MessegeItem/MessegeItem";
import css from "./MessegeList.module.css";
import base from "../../../Common.module.css";

export function MessegeList(props) {
  // const data = props.store.getData();
  const messegeItems = props.data.chatPage.messeges.map((t) => (
    <MessegeItem text={t.text} id={t.id} key={t.id} isOwn={t.isOwn} />
  ));

  const messegeInput = React.createRef();

  let sendMessege = () => {
    props.dispatch("ADD-MESSAGE");
  };

  const updateMessegeInput = () => {
    props.dispatch("UPDATE-INPUT", messegeInput.current.value);
  };

  return (
    <div className={css.messege_block}>
      <div className={css.message_list}>{messegeItems}</div>
      <div className={css.messege_input_block}>
        <input
          ref={messegeInput}
          onChange={updateMessegeInput}
          value={props.data.newPostMessage}
          className={`${base.input} ${css.messege_input_textarea}`}
          type="text"
          name="messegeText"
          id="messegeText"
        />
        <button onClick={sendMessege} className={base.button} type="submit">
          Send
        </button>
      </div>
    </div>
  );
}
