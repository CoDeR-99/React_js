import React from "react";
import ReactDOM from "react-dom";

//css inline styling
// ReactDOM.render(
//   <h1 style={{color: "red"}, {textAlign: "center"}}>Hello World!</h1>,
//   document.getElementById("root")
// );

//inline styling with better implementation

const customStyle = {
  color: "red",
  fontSize: "30px"
};
customStyle.color = "blue";
ReactDOM.render(
  <h1 style={customStyle}>Hello There!!</h1>,
  document.getElementById("root")
);
