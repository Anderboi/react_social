import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ChatPage } from "./components/Dailogs/Dialogs";
import { Header } from "./components/Header/Header";
import { MainContent } from "./components/MainContent/MainContent";
import { NavMenu } from "./components/NavMenu/NavMenu";
import { Music } from "./components/Pages//Music/Music";
import { News } from "./components/Pages/News/News";
import { Settings } from "./components/Pages/Settings/Settings";
import { UsersPage } from './components/Users/UsersPage';

function App() {
  return (
    <div className="App">
      <div className="header-line"></div>
      <div className="container grid">
        <Header />
        <NavMenu />
        <div className="app-content">
          <Routes>
            <Route path="/profile" element={<MainContent />} />
            <Route path="/messages" element={<ChatPage />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="Users" element={<UsersPage />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
