import React from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as axios from "axios";
import { MainContent } from "./MainContent";
import { setUserInfo } from "./../../redux/mainPageReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.router.params.userId
      ? this.props.router.params.userId
      : this.props.authId;

    console.log(userId);

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setUserInfo(response.data);
      });
  }

  render() {
    if (this.props.userInfo === null) {
    }
    return <MainContent {...this.props} userInfo={this.props.userInfo} />;
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.profilePage.userInfo,
    authId: state.auth.id,
  };
};

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default connect(mapStateToProps, { setUserInfo })(
  withRouter(ProfileContainer)
);
