import React from "react";
import ReactDOM from "react-dom";

const fName = "Angela";
const lName = "Yu";
const num = 7;
//In order to write javascript expression(not statement) inside html we have to write it in {} bracket to indentify it as a javascript
ReactDOM.render(
  <div>
  //{} tells it is javascript and treat fname as a variable not a string.
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);
