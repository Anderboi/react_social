import { Chat } from "./Chat";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    users: state.messagesPage.users,
  };
};

export const ChatContainer = connect(mapStateToProps)(Chat);
