import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { NavMenu } from "./components/NavMenu/NavMenu";
import { MainContent } from "./components/MainContent/MainContent";
import { Dialogs } from "./components/Dailogs/Dialogs";
import { Routes, Route } from "react-router-dom";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";

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
              element={<MainContent posts={props.data.posts} />}
            />
            <Route path="/messeges" element={<Dialogs data={props.data} />} />
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
