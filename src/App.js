import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ChatPage } from "./components/Dailogs/ChatPage";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Music } from "./components/Pages//Music/Music";
import { News } from "./components/Pages/News/News";
import { Settings } from "./components/Pages/Settings/Settings";
import { UsersPage } from "./components/Users/UsersPage";
import ProfileContainerWithRouter from "./components/MainContent/ProfileContainer";
import Login from "./components/Login/Login";
import NavMenuContainer from "./components/NavMenu/NavMenuContainer";
import { connect } from "react-redux";
import { authData } from "./redux/authReducer";

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

            <Route path="/messages" element={<ChatPage />} />

            <Route path="/news" element={<News />} />

            <Route path="/music" element={<Music />} />

            <Route path="/users" element={<UsersPage />} />

            <Route path="/settings" element={<Settings />} />

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

export default connect(null, { authData })(App);
