import { Chat } from "./ChatList/Chat";
import c from "./Dialogs.module.css";
import { MessegeList } from "./Messeges/MessegeList";

export function ChatPage(props) {
  return (
    <div className={c.chat}>
      <Chat users={props.data.users} />
      <MessegeList messeges={props.data.messeges} />
    </div>
  );
}
