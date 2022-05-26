import  css  from "./MessegeItem.module.css";

export function MessegeItem(props) {
  return <div className={css.messege_item}>{props.text}</div>;
}
