import { connect } from "react-redux";
import { PostList } from './PostList';
import { getPosts } from './../../../utilities/selectors/profileSelector';

const mapStateToProps = (state) => {
  return {
    posts: getPosts(state),
  };
};

export const PostListContainer = connect(mapStateToProps)(PostList);
