import { UserInfo } from "./UserInfo/UserInfo";
import content from "./MainContent.module.css";
import backgroundImage from "../../assets/images/redAccent.jpg";
import PostFormContainer from "./PostForm/PostFormContainer";
import { PostListContainer } from "./PostList/PostListContainer";
import { Preloader } from "./../common/Preloader";

export const MainContent = (props) => {
  if (!props.userInfo) {
    return <Preloader />;
  }

  return (
    <div data-testid="profile-page">
      <img
        src={
          props.userInfo.photos.large || backgroundImage
        }
        alt="hero"
        className={content.main_img}
      ></img>
      {/* Hero image */}
      <UserInfo
        userInfo={props.userInfo}
        authId={props.authId}
        setUserStatusTC={props.setUserStatusTC}
        setUserProfileTC={props.setUserProfileTC}
        profileStatus={props.profileStatus}
        uploadPhoto={props.uploadPhoto}
      />
      {/* Info User Block  */}
      <PostFormContainer />
      {/* New Post */}
      <PostListContainer />
      {/* Posts */}
    </div>
  );
};
