import {
  addPostActionCreator,
  
} from "../../../redux/mainPageReducer";
import { PostForm } from "./PostForm";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { newPostMessage: state.profilePage.newPostMessage };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendPost: (data) => {
      dispatch(addPostActionCreator(data));
    },
   
  };
};

const PostFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);

export default PostFormContainer;
