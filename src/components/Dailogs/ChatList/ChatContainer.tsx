import React, { useEffect, useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { RootState } from "../../../redux/reduxStore";
import { IUser } from "../../../types/types";
import c from "./Chat.module.css";
// import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import {
  getFollowedUsers,
  usersOnPageCountSelector,
} from "../../../utilities/selectors/messagesSelector";
import { ChatItem } from "./ChatListItem/ChatItem";
import {
  getChatUserId,
  getFollowedUserTC,
  getUserMessagesTC,
} from "../../../redux/messagesReducer";

type MapStateToProps = {
  users: Array<IUser> | null;
  usersOnPageCount: number;
};
type MapDispatchToProps = {
  getFollowedUserTC: (usersOnPage: number) => void;
  getChatUserId: (userId: number) => void;
  getUserMessagesTC: (userId: number) => void;
};

type OwnProps = {};

type Props = OwnProps & MapStateToProps & MapDispatchToProps;

const ChatContainer: React.FC<Props> = (props) => {
  const [users, getUsers] = useState(props.users);

  useEffect(() => {
    props.getFollowedUserTC(props.usersOnPageCount);
  }, [users]);

  return <Chat {...props} />;
};

export const Chat: React.FC<Props> = (props): JSX.Element => {
  const usersList =
    props.users &&
    props.users.map((t: IUser) => (
      <ChatItem
        name={t.name}
        id={t.id}
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
  };
};
export default compose(
  connect<MapStateToProps, MapDispatchToProps, OwnProps, RootState>(
    mapStateToProps,
    { getFollowedUserTC, getChatUserId, getUserMessagesTC }
  )
  // withAuthRedirect //TODO add TS to 'withAuthRedirect'
)(ChatContainer);
