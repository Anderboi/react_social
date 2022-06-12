import css from "./MessageItem.module.css";

export const MessageItem = (props) => {
  let isOwnMessage = props.isOwn;

  return (
    <div
      className={isOwnMessage ? css.message_item_own : css.message_item_friend}
    >
      {props.text}
    </div>
  );
};
