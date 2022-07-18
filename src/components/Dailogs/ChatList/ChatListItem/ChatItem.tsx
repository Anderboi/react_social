import { NavLink } from "react-router-dom";
import css from "./ChatItem.module.css";
import cn from "classnames";
//@ts-ignore
import avatar from "../../../../assets/images/avatar.png";

type Props = {
  id: number;
  currentActiveUserId: number | null;
  photos: string;
  name: string;
  status: string | null;
  getUserMessages: (userId: number) => any; //TODO remove any
};

export const ChatItem: React.FC<Props> = (props): JSX.Element => {
  const isActive = props.currentActiveUserId === props.id;

  const onClick = () => {
    return props.getUserMessages(props.id);
  };

  return (
    <>
      <div
        className={cn(isActive && css.chat__item_active, css.chat__item)}
        onClick={onClick}
      >
        {/* <NavLink to={"/messeges/" + props.id} className={css.chat__item}> */}
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
        {/* </NavLink> */}
      </div>
      <hr className={css.divider}></hr>
    </>
  );
};
