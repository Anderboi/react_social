import React, {useEffect} from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { RootState } from "../../../redux/reduxStore";
import { User } from "../../../types/types";
// import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { getMessagesUsers } from "../../../utilities/selectors/messagesSelector";
import { ChatItem } from "./ChatListItem/ChatItem";
import c from "./Chat.module.css";
import { followUser } from './../../../redux/usersReducer';
import { getFollowedUsers } from "../../../utilities/selectors/usersSelector";

type MapStateToProps = {
  users: Array<User>;
  followedUsers: Array<number>
};
type MapDispatchToProps = {};

type OwnProps = {};

type Props = OwnProps & MapStateToProps & MapDispatchToProps;




const ChatContainer: React.FC<Props> = (props) => {

  useEffect(()=>{

  })

  return <Chat {...props} />;
};

export const Chat: React.FC<Props> = (props): JSX.Element => {
  const usersList = props.users.map((t: User) => (
    <ChatItem name={t.name} id={t.id} key={t.id} photos={t.photos.small!} />
  ));

  return <div className={c.chat_list}>{usersList}</div>;
};

const mapStateToProps = (state: RootState):MapStateToProps => {
  return {
    users: getMessagesUsers(state),
    followedUsers: getFollowedUsers(state)
  };
};
export default compose(
  connect<MapStateToProps, MapDispatchToProps, OwnProps, RootState>(
    mapStateToProps
  )
  // withAuthRedirect //TODO add TS to 'withAuthRedirect'
)(ChatContainer);
