import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { Message } from "../../../types/types";
import { getMessages } from "../../../utilities/selectors/messagesSelector";
import css from "./MessageList.module.css";
import base from "../../../Common.module.css";
import { sendMessage } from "../../../redux/messagesReducer";
import { MessageItem } from "./MessageItem/MessageItem";
import { RootState } from "../../../redux/reduxStore";

type MapStateToProps = {
  messages: Array<Message>;
};
type MapDispatchToProps = {
  sendMessage: (data: string) => void;
};

type OwnProps = {};

type Props = OwnProps & MapStateToProps & MapDispatchToProps;

export const MessageList: React.FC<Props> = (props): JSX.Element => {
  const messageItems = props.messages.map((t) => (
    <MessageItem text={t.text} id={t.id} key={t.id} isOwn={t.isOwn} />
  ));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { message: "" } });

  const onSubmit = (data: any) => {
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
      {errors.message && <div>Error</div>}
      {/* //TODO Add Error Message display logic (was errors.callback) */}
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    messages: getMessages(state),
  };
};
const MessageListContainer = connect<
  MapStateToProps,
  MapDispatchToProps,
  OwnProps,
  RootState
>(mapStateToProps, { sendMessage })(MessageList);

export default MessageListContainer;
