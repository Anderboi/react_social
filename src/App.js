import React, { useEffect } from "react";
import { Provider, connect } from "react-redux";
import { Route, Routes, HashRouter } from "react-router-dom";
import "./App.css";
import store from "./redux/reduxStore";
import { authData, showErrorMessage } from "./redux/authReducer";
import { getErrorMessage } from "./utilities/selectors/authSelector";
import Login from "./components/Login/Login";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavMenuContainer from "./components/NavMenu/NavMenuContainer";
import ProfileContainerWithRouter from "./components/MainContent/ProfileContainer";
import { UsersPage } from "./components/Users/UsersPage";
import { Preloader } from "./components/common/Preloader";

const LazySettings = React.lazy(() =>
  import("./components/Pages/Settings/Settings")
);

const LazyMusic = React.lazy(() => import("./components/Pages//Music/Music"));

const LazyNews = React.lazy(() => import("./components/Pages/News/News"));

const LazyChatPage = React.lazy(() =>
  import("./components/Dailogs/ChatPage")
);

const App = (props) => {
  const catchErrors = (reason, promise) => {
    props.showErrorMessage(reason);
  };

  useEffect(() => {
    props.authData();
    window.addEventListener("unhandledrejection", catchErrors); //! Global error catcher
    return window.removeEventListener("unhandledrejection", catchErrors); //* Unsubscribe from global error catcher
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.authData]);

  return (
    <div className="App">
      <div className="header-line"></div>
      <div className="container grid">
        <div>{props.errorMessage}</div>
        <HeaderContainer />
        <NavMenuContainer />
        <div className="app-content">
          <React.Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/profile" element={<ProfileContainerWithRouter />}>
                <Route
                  path=":userId"
                  element={<ProfileContainerWithRouter />}
                />
              </Route>

              <Route path="/messages" element={<LazyChatPage />} />

              <Route path="/news" element={<LazyNews />} />

              <Route path="/music" element={<LazyMusic />} />

              <Route path="/users" element={<UsersPage />} />

              <Route path="/settings" element={<LazySettings />} />

              <Route path="/login" element={<Login />} />

              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Routes>
          </React.Suspense>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    errorMessage: getErrorMessage(state),
  };
};

const AppContainer = connect(mapStateToProps, { authData, showErrorMessage })(
  App
);

const SocialApp = () => {
  return (
    <React.StrictMode>
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
      <HashRouter>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </HashRouter>
    </React.StrictMode>
  );
};

export default SocialApp;
