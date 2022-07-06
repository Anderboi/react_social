import React from "react";
import { connect } from "react-redux";
import { setUserData, authData, logoutTC } from "../../redux/authReducer";
import { Header } from "./Header";
import { getIsLoading } from "../../utilities/selectors/usersSelector";
import {
  getAuthId,
  getAuthLogin,
  getAuthEmail,
} from "../../utilities/selectors/authSelector";
import { RootState } from "../../redux/reduxStore";

type MapStateToProps = {
  id: number | null;
  login: string | null;
  email: string | null;
  isLoading: boolean;
};
type MapDispatchToProps = {
  setUserData: (props: MapStateToProps) => void;
  authData: () => void;
  logoutTC: () => void;
};

type OwnProps = {};

type Props = OwnProps & MapStateToProps & MapDispatchToProps;

const HeaderContainer: React.FC<Props> = (props): JSX.Element => {
  return (
    <>
      <Header {...props} />
    </>
  );
};

const mapStateToProps = (state: RootState): MapStateToProps => {
  return {
    id: getAuthId(state),
    login: getAuthLogin(state),
    email: getAuthEmail(state),
    isLoading: getIsLoading(state),
  };
};

export default connect<
  MapStateToProps,
  MapDispatchToProps,
  OwnProps,
  RootState
>(mapStateToProps, {
  setUserData,
  authData,
  logoutTC,
})(HeaderContainer);
