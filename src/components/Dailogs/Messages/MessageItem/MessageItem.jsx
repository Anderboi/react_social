import css from "./MessageItem.module.css";

export function MessageItem(props) {
  let isOwnMessage = props.isOwn;

  return (
    <div
      className={isOwnMessage ? css.message_item_own : css.message_item_friend}
    >
      {props.text}
    </div>
  );
}
