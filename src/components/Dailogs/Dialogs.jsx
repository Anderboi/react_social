
import c from "./Dialogs.module.css";

import { ChatContainer } from "./ChatList/ChatContainer";
import { MessageListContainer } from "./Messages/MessageListContainer";

export function ChatPage(props) {
  console.log(props);
  return (
    <div className={c.chat}>
      <ChatContainer store={props.store} />
      <MessageListContainer store={props.store} />
    </div>
  );
}
