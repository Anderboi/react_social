import { Chat } from "./Chat";

export function ChatContainer(props) {
  return <Chat users={props.store.users} />;
}
