import { UserInfo } from "./UserInfo/UserInfo";
import content from "./MainContent.module.css";
import PostFormContainer from "./PostForm/PostFormContainer";
import { PostListContainer } from "./PostList/PostListContainer";

export function MainContent() {
  return (
    <div>
      <img
        src="https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=620&quality=85&auto=format&fit=max&s=56d5de4c5609ca98def0c3382bd569b4"
        alt="hero"
        className={content.main_img}
      ></img>
      {/* Hero image */}
      <UserInfo name="Ivan" surname="Ivanov" />
      {/* Info User Block  */}
      <PostFormContainer />
      {/* New Post */}
      <PostListContainer />
      {/* Posts */}
    </div>
  );
}
