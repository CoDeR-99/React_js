//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

var greeting = "Morning";
var colour = { color: "red" };
let hours = new Date().getHours();

if (hours >= 12 && hours < 18) {
  greeting = "Afternoon";
  colour.color = "green";
}

if (hours >= 18 && hours < 24) {
  greeting = "Night";
  colour.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={colour}>
    Good {greeting}!!
  </h1>,
  document.getElementById("root")
);
