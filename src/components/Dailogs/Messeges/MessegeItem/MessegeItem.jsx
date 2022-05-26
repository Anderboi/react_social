import { css } from "./MessegeItem.module.css";

export function MessegeItem(props) {
  return <div className="messege-item">{props.text}</div>;
}
