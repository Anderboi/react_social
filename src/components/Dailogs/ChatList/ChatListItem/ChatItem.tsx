import { NavLink } from "react-router-dom";
// import { User } from "../../../../types/types";
//@ts-ignore
import css from "./ChatItem.module.css";
//@ts-ignore
import avatar from "../../../../assets/images/avatar.png";
// import { Photos, User } from "../../../../types/types";

type Props = {
  id: number;
  photos: string;
  name: string;
  status: string | null;
  // followedUsers: Array<User>
};

export const ChatItem: React.FC<Props> = (props): JSX.Element => {
  return (
    <div>
      <NavLink to={"/messeges/" + props.id} className={css.chat_item}>
        <div>
          <img
            src={props.photos || avatar}
            alt="avatar"
            className={css.avatar_icon}
          />
          <div className={css.green_circle}></div>
        </div>
        <div className={css.chat_item_text_wrap}>
          <div className={css.chat_item_name}>{props.name}</div>
          <div className={css.messege_text}>{props.status}</div>
        </div>
        <div className={css.messege_text}>10:04</div>
      </NavLink>
      <hr className={css.divider}></hr>
    </div>
  );
};
