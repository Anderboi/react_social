import css from "./MessageItem.module.css";
import cn from "classnames";
//* Font Awesome Icon Kit, could be replaced by AntDesign
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { IMessage } from "../../../../types/types";

type OwnProps = {
  authId: number;
};

type Props = OwnProps & IMessage;

export const MessageItem: React.FC<Props> = (props) => {
  const isOwnMessage = props.senderId === props.authId;

  return (
    <div
      className={cn(
        css.message__item,
        isOwnMessage ? css.message__item_own : css.message__item_friend
      )}
    >
      {props.body}
      <br></br>
      <span className={css.item__date}>{props.addedAt}</span>
      <FontAwesomeIcon
        icon={!props.viewed ? faCheck : faCheckDouble}
        className={
          !props.viewed ? css.message__checker : css.message__checker_viewed
        }
      />
    </div>
  );
};
