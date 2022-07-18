import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { IMessage } from "../../../types/types";
import {
  getCurrentChatUser,
  getMessages
} from "../../../utilities/selectors/messagesSelector";
import css from "./MessageList.module.css";
import base from "../../../Common.module.css";
import { sendMessage } from "../../../redux/messagesReducer";
import { MessageItem } from "./MessageItem/MessageItem";
import { RootState } from "../../../redux/reduxStore";
import { getAuthId } from "../../../utilities/selectors/authSelector";

type MapStateToProps = {
  messages: Array<IMessage>;
  currentChatUser: number | null;
  authId: number | null;
};
type MapDispatchToProps = {
  sendMessage: (userId: number, post: string) => void;
};

type OwnProps = {};

type Props = OwnProps & MapStateToProps & MapDispatchToProps;

export const MessageList: React.FC<Props> = (props): JSX.Element => {

  console.log(props.messages);

  const messageItems =
    props.messages &&
    props.messages.map((t) => (
      <MessageItem
        body={t.body}
        id={t.id}
        key={t.id}
        addedAt={t.addedAt}
        recipientId={t.recipientId}
        senderId={t.senderId}
        senderName={t.senderName}
        viewed={t.viewed}
        authId={props.authId!}
      />
    ));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IMessage>({ defaultValues: { body: "" } });

  const onSubmit = (data: IMessage): void => {
    props.sendMessage(props.currentChatUser!, data.body);

    reset();
  };

  return (
    <div className={css.message_block}>
      <div className={css.message_list}>{messageItems}</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.message_input_block}>
          <input
            {...register("body", {
              maxLength: {
                value: 100,
                message: "Max length must be 100 symbols"
              }
            })}
            className={`${base.input} ${css.message_input_textarea}`}
            type="text"
            name="body"
            id="body"
            placeholder="Enter your message here ..."
          />
          <button className={base.button} type="submit">
            Send
          </button>
        </div>
      </form>
      {errors.body && <div>Error</div>}
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    messages: getMessages(state),
    currentChatUser: getCurrentChatUser(state),
    authId: getAuthId(state)
  };
};
const MessageListContainer = connect<
  MapStateToProps,
  MapDispatchToProps,
  OwnProps,
  RootState
>(mapStateToProps, { sendMessage })(MessageList);

export default MessageListContainer;
