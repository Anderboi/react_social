import { PostItem } from "./PostItem/PostItem";
import post from "./PostList.module.css";

export function PostList(props) {
  // const state = props.store.getState();

  const posts = props.posts.map((t) => (
    <PostItem text={t.text} id={t.id} key={t.id} />
  ));

  return <div className={post.list}>{posts}</div>;
}
