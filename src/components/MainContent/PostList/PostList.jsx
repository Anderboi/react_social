import { PostItem } from "./PostItem/PostItem";
import post from "./PostList.module.css";

export function PostList() {
  const postArray = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dignissimos minus vitae maxime omnis magnam, fugit iste ducimus veniam vero eius et alias deserunt est illo sequi aut enim ratione!",
      id: "01",
    },
    {
      text: "us et alias deserunt est illo sequi aut enim ratione!",
      id: "02",
    },
    {
      text: "mnis magnam, fugit iste ducimus veniam vero eius et alias deserunt est illo sequi aut enim ratione!",
      id: "03",
    },
  ];

  const posts = postArray.map((t) => <PostItem text={t.text} id={t.id} />);

  return <div className={post.list}>{posts}</div>;
}
