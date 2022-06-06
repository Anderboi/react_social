import { Chat } from "./Chat";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    users: state.messagesPage.users,
    isAuth: state.auth.isAuthorised,
  };
};

export const ChatContainer = connect(mapStateToProps)(Chat);
