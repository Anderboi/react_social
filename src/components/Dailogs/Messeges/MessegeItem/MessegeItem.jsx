import css from "./MessegeItem.module.css";

export function MessegeItem(props) {
  let isOwnMessege = props.isOwn;

  return (
    <div
      className={isOwnMessege ? css.messege_item_own : css.messege_item_friend}
    >
      {props.text}
    </div>
  );
}
