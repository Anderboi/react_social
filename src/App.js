import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ChatPage } from "./components/Dailogs/Dialogs";
import  HeaderContainer  from "./components/Header/HeaderContainer";
import { NavMenu } from "./components/NavMenu/NavMenu";
import { Music } from "./components/Pages//Music/Music";
import { News } from "./components/Pages/News/News";
import { Settings } from "./components/Pages/Settings/Settings";
import { UsersPage } from "./components/Users/UsersPage";
import ProfileContainerWithRouter from "./components/MainContent/ProfileContainer";

function App() {
  return (
    <div className="App">
      <div className="header-line"></div>
      <div className="container grid">
        <HeaderContainer />
        <NavMenu />
        <div className="app-content">
          <Routes>
            {/* <Route path="/profile">
              <Redirect push to="/profile/2222" />
            </Route> */}
            <Route path="/profile" element={<ProfileContainerWithRouter />} >
              <Route path=":userId" element={<ProfileContainerWithRouter />}/>
              
            </Route>
            <Route path="/messages" element={<ChatPage />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />

            <Route path="/users" element={<UsersPage />} />

            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
