import { Chat } from "./Chat";
import { connect } from "react-redux";
import { withAuthRedirect } from "./../../../hoc/withAuthRedirect";
import { compose } from "redux";

const ChatContainer = (props) => {
  return <Chat {...props} />;
};

const mapStateToProps = (state) => {
  return {
    users: state.messagesPage.users,
  };
};

export default compose(
  connect(mapStateToProps),
  withAuthRedirect
)(ChatContainer);
