import { Chat } from "./ChatList/Chat";
import c from "./Dialogs.module.css";
import { MessageList } from "./Messages/MessageList";

export function ChatPage(props) {
  
  return (
    <div className={c.chat}>
      <Chat data={props.store} />
      <MessageList data={props.store} dispatch={props.dispatch} />
    </div>
  );
}
