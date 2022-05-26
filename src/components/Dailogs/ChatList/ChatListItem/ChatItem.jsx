import { NavLink } from "react-router-dom";
import css from "./ChatItem.module.css";

export function ChatItem(props) {
  return (
    <div className={css.chat_item}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
        alt="avatar_icon"
        className={css.avatar_icon}
      />
      <NavLink to={"/messeges/" + props.id} className={css.chat_item_name}>
        {props.name}
      </NavLink>
    </div>
  );
}
