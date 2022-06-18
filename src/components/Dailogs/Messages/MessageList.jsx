import React from "react";
import { MessageItem } from "./MessageItem/MessageItem";
import css from "./MessageList.module.css";
import base from "../../../Common.module.css";
import { getMessages } from "./../../../utilities/selectors/messagesSelector";
import { sendMessage } from "./../../../redux/messagesReducer";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

export const MessageList = (props) => {
  const messageItems = props.messages.map((t) => (
    <MessageItem text={t.text} id={t.id} key={t.id} isOwn={t.isOwn} />
  ));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { message: "" } });

  const onSubmit = (data) => {
    console.log(data.message);
    props.sendMessage(data.message);
    reset();
  };

  return (
    <div className={css.message_block}>
      <div className={css.message_list}>{messageItems}</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.message_input_block}>
          <input
            {...register("message", {
              maxLength: {
                value: 100,
                message: "Max length must be 100 symbols",
              },
            })}
            className={`${base.input} ${css.message_input_textarea}`}
            type="text"
            name="message"
            id="message"
            placeholder="Enter your message here ..."
          />
          <button className={base.button} type="submit">
            Send
          </button>
        </div>
      </form>
      {errors.callback && <div>Error</div>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    messages: getMessages(state),
  };
};
const MessageListContainer = connect(mapStateToProps, { sendMessage })(
  MessageList
);
export default MessageListContainer;
