import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { NavMenu } from "./components/NavMenu/NavMenu";
import { MainContent } from "./components/MainContent/MainContent";
import { ChatPage } from "./components/Dailogs/Dialogs";
import { Routes, Route } from "react-router-dom";
import { News } from "./components/Pages/News/News";
import { Music } from "./components/Pages//Music/Music";
import { Settings } from "./components/Pages/Settings/Settings";

function App(props) {
  return (
    <div className="App">
      <div className="header-line"></div>
      <div className="container grid">
        <Header />
        <NavMenu />
        <div className="app-content">
          <Routes>
            <Route
              path="/profile"
              element={
                <MainContent
                store={props.store}
                dispatch={props.dispatch}
                />
              }
            />
            <Route
              path="/messages"
              element={
                <ChatPage
                store={props.store}
                dispatch={props.dispatch}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
