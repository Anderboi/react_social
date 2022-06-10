import { connect } from "react-redux";
import { PostList } from './PostList';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

export const PostListContainer = connect(mapStateToProps)(PostList);
