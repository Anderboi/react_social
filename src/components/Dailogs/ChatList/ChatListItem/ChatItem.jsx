import { NavLink } from "react-router-dom";
import css from "./ChatItem.module.css";

export const ChatItem = (props) => {
  return (
    <div>
      <NavLink to={"/messeges/" + props.id} className={css.chat_item}>
        <div>
          <img src={props.icon} alt="avatar_icon" className={css.avatar_icon} />
          <div className={css.green_circle}></div>
        </div>
        <div className={css.chat_item_text_wrap}>
          <div className={css.chat_item_name}>{props.name}</div>
          <div className={css.messege_text}>
            Lorem ipsum dolor consectetur ...
          </div>
        </div>
        <div className={css.messege_text}>10:04</div>
      </NavLink>
      <hr className={css.divider}></hr>
    </div>
  );
};
