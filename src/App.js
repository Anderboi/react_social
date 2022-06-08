import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ChatPage } from "./components/Dailogs/ChatPage";
import HeaderContainer from "./components/Header/HeaderContainer";

import { Music } from "./components/Pages//Music/Music";
import { News } from "./components/Pages/News/News";
import { Settings } from "./components/Pages/Settings/Settings";
import { UsersPage } from "./components/Users/UsersPage";
import ProfileContainerWithRouter from "./components/MainContent/ProfileContainer";
import { Login } from './components/Login/Login';
import NavMenuContainer from './components/NavMenu/NavMenuContainer';

function App() {
  return (
    <div className="App">
      <div className="header-line"></div>
      <div className="container grid">
        <HeaderContainer />
        <NavMenuContainer />
        <div className="app-content">
          <Routes>
            {/* <Route path="/profile">
              <Redirect push to="/profile/2222" />
            </Route> */}
            {/* <Route path="/" element={<ProfileContainerWithRouter />} /> */}
            <Route path="/profile" element={<ProfileContainerWithRouter />}>
              <Route path=":userId" element={<ProfileContainerWithRouter />} />
            </Route>
            <Route path="/messages" element={<ChatPage />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />

            <Route path="/users" element={<UsersPage />} />

            <Route path="/settings" element={<Settings />} />

            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
