//@ts-ignore
import c from "./Dialogs.module.css";
import ChatContainer from "./ChatList/ChatContainer";
import MessageListContainer from "./Messages/MessageList";

const ChatPage = (): JSX.Element => {
  return (
    <div className={c.chat}>
      <ChatContainer />
      <MessageListContainer />
    </div>
  );
};

export default ChatPage;
