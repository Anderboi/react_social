import { MessegeItem } from "./MessegeItem/MessegeItem";
import css from './MessegeList.module.css'

export function MessegeList(props) {
  const messegeItems = props.messeges.map((t) => (
    <MessegeItem text={t.text} id={t.id} />
  ));
  return <div className={css.message_list}>{messegeItems}</div>;
}
