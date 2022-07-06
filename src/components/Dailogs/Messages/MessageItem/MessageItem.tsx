import css from "./MessageItem.module.css";

type Props = {
  id?:number
  isOwn: boolean
  text:string
}

export const MessageItem: React.FC<Props> = (props) => {
  let isOwnMessage = props.isOwn;

  return (
    <div
      className={isOwnMessage ? css.message_item_own : css.message_item_friend}
    >
      {props.text}
    </div>
  );
};
