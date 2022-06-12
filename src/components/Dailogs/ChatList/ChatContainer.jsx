import { connect } from "react-redux";
import { withAuthRedirect } from "./../../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getMessagesUsers } from "../../../utilities/selectors/messagesSelector";
import { ChatItem } from "./ChatListItem/ChatItem";
import c from "./Chat.module.css";

const ChatContainer = (props) => {
  return <Chat {...props} />;
};

export const Chat = (props) => {
  const usersList = props.users.map((t) => (
    <ChatItem name={t.name} id={t.id} key={t.id} icon={t.icon} />
  ));

  return <div className={c.chat_list}>{usersList}</div>;
};

const mapStateToProps = (state) => {
  return {
    users: getMessagesUsers(state),
  };
};
export default compose(
  connect(mapStateToProps),
  withAuthRedirect
)(ChatContainer);
