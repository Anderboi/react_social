import { Chat } from "./ChatList/Chat";
import c from "./Dialogs.module.css";
import { MessegeList } from "./Messeges/MessegeList";

export function Dialogs() {
  return (
    <div className={c.chat}>
      <Chat />
      <MessegeList />
    </div>
  );
}
