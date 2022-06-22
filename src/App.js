import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainerWithRouter from "./components/MainContent/ProfileContainer";
import { UsersPage } from "./components/Users/UsersPage";
import NavMenuContainer from "./components/NavMenu/NavMenuContainer";
import { connect } from "react-redux";
import { authData } from "./redux/authReducer";
import { HashRouter } from "react-router-dom";
import store from "./redux/reduxStore";
import { Provider } from "react-redux";
import withPreloader from "./hoc/withPreloader";

const Settings = React.lazy(() =>
  import("./components/Pages/Settings/Settings")
);
const SettingsWithPreloader = withPreloader(Settings);

const Music = React.lazy(() => import("./components/Pages//Music/Music"));
const MusicWithPreloader = withPreloader(Music);

const News = React.lazy(() => import("./components/Pages/News/News"));
const NewsWithPreloader = withPreloader(News);

const ChatPage = React.lazy(() => import("./components/Dailogs/ChatPage"));
const ChatPageWithPreloader = withPreloader(ChatPage);

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
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/profile" element={<ProfileContainerWithRouter />}>
              <Route path=":userId" element={<ProfileContainerWithRouter />} />
            </Route>

            <Route path="/messages" element={<ChatPageWithPreloader />} />

            <Route path="/news" element={<NewsWithPreloader />} />

            <Route path="/music" element={<MusicWithPreloader />} />

            <Route path="/users" element={<UsersPage />} />

            <Route path="/settings" element={<SettingsWithPreloader />} />

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
