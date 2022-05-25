import { PostItem } from "./PostItem/PostItem";
import post from "./PostList.module.css";

export function PostList() {
  return (
    <div className={post.list}>
      <PostItem text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ipsam eum ut delectus rem ipsum reiciendis, accusantium maiores sequi explicabo, similique nisi ullam voluptatum excepturi, sapiente iste blanditiis placeat facilis." />
      <PostItem text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores repudiandae, autem quis minima laudantium tenetur velit quaerat, nemo saepe nihil, consectetur suscipit repellendus. Cupiditate optio totam eaque laudantium, ratione aliquid." />
      <PostItem text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptate obcaecati maiores deleniti repellat necessitatibus explicabo velit, incidunt dolorem delectus, iure quis culpa deserunt repudiandae saepe tempore dolore quae reprehenderit!" />
    </div>
  );
}
