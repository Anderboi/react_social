import { MessageList } from "./MessageList";
import { addMessageActionCreator } from "../../../redux/messagesReducer";
import { connect } from "react-redux";
import { getMessages } from "./../../../utilities/selectors/messagesSelector";

const mapStateToProps = (state) => {
  return {
    messages: getMessages(state),
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (data) => {
      dispatch(addMessageActionCreator(data));
    },
  };
};

const MessageListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);

export default MessageListContainer;
