import React from "react";
import ReactDOM from "react-dom";

const name = "Dhirendra";
const d = new Date();
let year = d.getFullYear();

ReactDOM.render(
  <div>
    <p>Created By: {name}</p>
    <p>Copyright {year}</p>
    <p>Copyright {d.getFullYear()}</p>
    <p>Copyright {new Date().getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
