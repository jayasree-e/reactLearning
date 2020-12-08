import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { BrowserRouter } from "react-router-dom";
import "./styles/stylesheets.css";
import { createStore } from "redux";
import rootReducer from "./redux/reducer";
import { Provider } from "react-redux";

const store = createStore(rootReducer);
// Elements
// const lists = ["hello", "hi"];
// const element = React.createElement(
//   "ol",
//   null,
//   lists.map((list, index) => React.createElement("li", { key: index }, list))
// );

// JSX elements
//const topics = ["ReactJS", "Typescript"];
// const elements = (
//   <div>
//     <h1> Topics </h1>
//     <ol>
//       {topics.map((topic, index) => (
//         <li key={index}> {topic} </li>
//       ))}
//     </ol>
//   </div>
// );

//Components

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
