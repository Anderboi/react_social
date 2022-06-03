import React from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { MainContent } from "./MainContent";
import { setUserInfo } from "./../../redux/mainPageReducer";
import { getAuthUser } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.router.params.userId
      ? this.props.router.params.userId
      : this.props.authId;

    getAuthUser(userId).then((data) => {
      this.props.setUserInfo(data);
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
    isAuth: state.auth.isAuthorised,
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
