import { MessageList } from "./MessageList";
import {
  addMessageActionCreator,
  updateMessageInputActionCreator,
} from "../../../redux/messagesReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    messages: state.messagesPage.messages,
    newPostMessage: state.messagesPage.newPostMessage,
    
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateMessageInput: (text) => {
      dispatch(updateMessageInputActionCreator(text));
    },
  };
};

const MessageListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);

export default MessageListContainer;
