import { MessageList } from "./MessageList";
import {
  addMessageActionCreator,
  
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
