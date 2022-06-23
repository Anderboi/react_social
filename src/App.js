import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import { Provider, connect } from "react-redux";
import Login from "./components/Login/Login";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainerWithRouter from "./components/MainContent/ProfileContainer";
import { UsersPage } from "./components/Users/UsersPage";
import NavMenuContainer from "./components/NavMenu/NavMenuContainer";
import { authData } from "./redux/authReducer";
import store from "./redux/reduxStore";
import { Preloader } from "./components/common/Preloader";

const LazySettings = React.lazy(() =>
  import("./components/Pages/Settings/Settings")
);

const LazyMusic = React.lazy(() => import("./components/Pages//Music/Music"));

const LazyNews = React.lazy(() => import("./components/Pages/News/News"));

const LazyChatPage = React.lazy(() => import("./components/Dailogs/ChatPage"));

const App = (props) => {
  useEffect(() => {
    props.authData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.authData]);

  return (
    <div className="App">
      <div className="header-line"></div>
      <div className="container grid">
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

const AppContainer = connect(null, { authData })(App);

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
