import { NavLink } from "react-router-dom";
//@ts-ignore
import css from "./ChatItem.module.css";
//@ts-ignore
import avatar from "../../../../assets/images/avatar.png";
// import { IPhotos, IUser } from "../../../../types/types";

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
      <NavLink to={"/messeges/" + props.id} className={css.chat__item}>
        <div className={css.avatar__block}>
          <img
            src={props.photos || avatar}
            alt="avatar"
            className={css.avatar__block_icon}
          />
          {/* <div className={`${css.status_circle} ${css.green}`}></div> */}
          {/* //TODO Add Active state */}
        </div>
        <div className={css.chat__item_text_wrap}>
          <div className={css.chat__item_name}>{props.name}</div>
          <div className={css.messege_text}>{props.status}</div>
        </div>
        <div className={css.messege_text}>10:04</div>
      </NavLink>
      <hr className={css.divider}></hr>
    </div>
  );
};
