import React from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { MainContent } from "./MainContent";
import { setUserInfoTC } from "./../../redux/mainPageReducer";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.router.params.userId
      ? this.props.router.params.userId
      : this.props.authId;

    this.props.setUserInfoTC(userId);
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

export default compose(
  connect(mapStateToProps, { setUserInfoTC }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
