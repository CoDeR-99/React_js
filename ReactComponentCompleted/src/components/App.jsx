import React from "react";
//the thing export in heading file will be import here in Com variable.
import Com from "./Heading";
import List from "./List";

function A() {
  return (
    <div>
      <Com />
      <List />
      <List />
    </div>
  );
}
//only one function can be export.
export default A;

