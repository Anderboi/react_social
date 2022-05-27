import { Chat } from "./ChatList/Chat";
import c from "./Dialogs.module.css";
import { MessegeList } from "./Messeges/MessegeList";

export function ChatPage(props) {
  return (
    <div className={c.chat}>
      <Chat users={props.store.data.chatPage.users} />
      <MessegeList store={props.store} />
    </div>
  );
}
