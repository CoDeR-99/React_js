import React from "react";
import ReactDOM from "react-dom";
//here we can import default export with different name
//but we cann't import normal export with different name it must be same as specified in the file.
import pie, { doublePi, triplePi } from "./math.js";

//import * as pi from "./math.js";
//console.log(pi.default);
//console.log(pi.doublePi());

ReactDOM.render(
  <ul>
    <li>{pie}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
