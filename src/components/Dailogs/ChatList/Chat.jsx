import { ChatItem } from "./ChatListItem/ChatItem";
import c from "./Chat.module.css";

export function Chat() {
  return (
    <div className={c.chat_list}>
      <ChatItem name="Ivan" id="01" />
      <ChatItem name="Andrei" id="02" />
      <ChatItem name="Pavel" id="03" />
      <ChatItem name="Petr" id="04" />
    </div>
  );
}
