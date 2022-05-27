import { Chat } from "./ChatList/Chat";
import c from "./Dialogs.module.css";
import { MessegeList } from "./Messeges/MessegeList";

export function ChatPage(props) {
  return (
    <div className={c.chat}>
      <Chat users={props.data.chatPage.users} />
      <MessegeList
        messeges={props.data.chatPage.messeges}
        updateInput={props.updateInput}
        messageInput={props.data.newPostMessage}
        addMessage={props.addMessage}
      />
    </div>
  );
}
