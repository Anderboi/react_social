import { connect } from "react-redux";
import { PostList } from './PostList';
import { getPosts } from '../../../utilities/selectors/profileSelector';
import { RootState } from "../../../redux/reduxStore";

const mapStateToProps= (state:RootState) => {
  return {
    posts: getPosts(state),
  };
};

export const PostListContainer = connect(mapStateToProps)(PostList);
