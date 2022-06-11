import {
  addPostActionCreator,
} from "../../../redux/mainPageReducer";
import { PostForm } from "./PostForm";
import { connect } from "react-redux";


let mapDispatchToProps = (dispatch) => {
  return {
    sendPost: (data) => {
      dispatch(addPostActionCreator(data));
    },
   
  };
};

const PostFormContainer = connect(
  null,
  mapDispatchToProps
)(PostForm);

export default PostFormContainer;
