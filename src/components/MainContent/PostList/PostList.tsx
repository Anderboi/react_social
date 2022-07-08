import { IPost } from "../../../types/types";
import { PostItem } from "./PostItem/PostItem";
import post from "./PostList.module.css";

type Props = {
  posts: Array<IPost>;
};

export const PostList: React.FC<Props> = (props): JSX.Element => {

  const posts = props.posts.map((t) => (
    <PostItem text={t.text} id={t.id} key={t.id} />
  ));

  return <div className={post.list}>{posts}</div>;
};
