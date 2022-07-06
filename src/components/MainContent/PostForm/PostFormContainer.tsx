import { connect } from "react-redux";
import { PostForm } from "./PostForm";
import { addPostActionCreator } from "../../../redux/mainPageReducer";

type MapDispatchToProps = {
  sendPost: (data: string) => void;
};

const mapDispatchToProps = (dispatch: any): MapDispatchToProps => {
  return {
    sendPost: (data) => {
      dispatch(addPostActionCreator(data));
    },
  };
};

const PostFormContainer = connect(null, mapDispatchToProps)(PostForm);

export default PostFormContainer;
