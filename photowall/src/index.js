import React, { Component } from "react";
import ReactDOM from "react-dom";
import Main from "./Components/Main";

import "./styles/stylesheets.css";
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

ReactDOM.render(<Main />, document.getElementById("root"));
