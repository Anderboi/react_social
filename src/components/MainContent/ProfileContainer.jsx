import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import { MainContent } from "./MainContent";
import { setUserInfo } from "./../../redux/mainPageReducer";

class ProfileContainer extends React.Component {
  // constructor(props){
  //     super(props),
  //     uri:window.location.href;
  // }

  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${
          window.location.search.split("=")[1]
        }`
      )
      .then((response) => {
        // console.log(response.data);

        this.props.setUserInfo(response.data);
      });
  }

  render() {
    if (this.props.userInfo === null) {
    }
    return <MainContent {...this.props} userInfo={this.props.userInfo} />;
  }
}
// export ProfileContainer;

const mapStateToProps = (state) => {
  return {
    userInfo: state.profilePage.userInfo,
    
  };
};

export default connect(mapStateToProps, { setUserInfo })(ProfileContainer);
