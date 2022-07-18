import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { RootState } from "../../../redux/reduxStore";
import { IUser } from "../../../types/types";
import c from "./Chat.module.css";
// import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import {
  getCurrentChatUser,
  getFollowedUsers,
  usersOnPageCountSelector
} from "../../../utilities/selectors/messagesSelector";
import { ChatItem } from "./ChatListItem/ChatItem";
import {
  getFollowedUserTC,
  getUserMessagesTC
} from "../../../redux/messagesReducer";

type MapStateToProps = {
  users: Array<IUser> | null;
  usersOnPageCount: number;
  currentChatUserId: number | null;
};
type MapDispatchToProps = {
  getFollowedUserTC: (usersOnPage: number) => void;
  getUserMessagesTC: (userId: number) => void;
};

type OwnProps = {};

type Props = OwnProps & MapStateToProps & MapDispatchToProps;

const ChatContainer: React.FC<Props> = (props) => {
  useEffect(() => {
    props.getFollowedUserTC(props.usersOnPageCount);
  }, [props.users]);

  return <Chat {...props} />;
};

export const Chat: React.FC<Props> = (props): JSX.Element => {
  const usersList =
    props.users &&
    props.users.map((t: IUser) => (
      <ChatItem
        name={t.name}
        id={t.id}
        currentActiveUserId={props.currentChatUserId}
        key={t.id}
        status={t.status}
        photos={t.photos.small!}
        getUserMessages={props.getUserMessagesTC}
      />
    ));

  return <div className={c.chat_list}>{usersList}</div>;
};

const mapStateToProps = (state: RootState): MapStateToProps => {
  return {
    users: getFollowedUsers(state),
    usersOnPageCount: usersOnPageCountSelector(state),
    currentChatUserId: getCurrentChatUser(state)
  };
};
export default compose(
  connect<MapStateToProps, MapDispatchToProps, OwnProps, RootState>(
    mapStateToProps,
    { getFollowedUserTC, getUserMessagesTC }
  )
  // withAuthRedirect //TODO add TS to 'withAuthRedirect'
)(ChatContainer);
