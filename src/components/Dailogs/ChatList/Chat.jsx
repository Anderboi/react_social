import { ChatItem } from "./ChatListItem/ChatItem";
import c from "./Chat.module.css";
import { Navigate } from "react-router-dom";

export function Chat(props) {
  if (!props.isAuth) {
    return <Navigate to={"/login"} />;
  }

  const usersList = props.users.map((t) => (
    <ChatItem name={t.name} id={t.id} key={t.id} icon={t.icon} />
  ));

  return <div className={c.chat_list}>{usersList}</div>;
}
