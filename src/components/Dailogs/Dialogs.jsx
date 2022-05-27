import { Chat } from "./ChatList/Chat";
import c from "./Dialogs.module.css";
import { MessegeList } from "./Messeges/MessegeList";

export function ChatPage(props) {
  return (
    <div className={c.chat}>
      <Chat data={props.store.getData()} />
      <MessegeList data={props.store.getData()} dispatch={props.dispatch} />
    </div>
  );
}
