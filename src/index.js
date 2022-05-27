import "./index.css";
import reportWebVitals from "./reportWebVitals";
import data from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { addPost, updateInput, addMessage, subscribe } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const renderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App data={data} addPost={addPost} updateInput={updateInput} addMessage={addMessage}/>
      </BrowserRouter>
    </React.StrictMode>
  );
};


renderEntireTree(data);

subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
