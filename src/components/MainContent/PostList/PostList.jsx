import { PostItem } from "./PostItem/PostItem";
import post from "./PostList.module.css";

export function PostList(props) {
  console.log(props);
  const posts = props.posts.map((t) => <PostItem text={t.text} id={t.id} />);

  return <div className={post.list}>{posts}</div>;
}
