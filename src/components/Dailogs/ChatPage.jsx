import c from "./Dialogs.module.css";
import { ChatContainer } from "./ChatList/ChatContainer";
import MessageListContainer from "./Messages/MessageListContainer";

export function ChatPage() {
  return (
    <div className={c.chat}>
      <ChatContainer />
      <MessageListContainer />
    </div>
  );
}
