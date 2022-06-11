import { Chat } from "./Chat";
import { connect } from "react-redux";
import { withAuthRedirect } from "./../../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getMessagesUsers } from "../../../utilities/selectors/messagesSelector";

const ChatContainer = (props) => {
  return <Chat {...props} />;
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
