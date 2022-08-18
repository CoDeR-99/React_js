const pi = 3.1415962;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

//default export can export only one either a function or a variable(constant)
//default export can be import with different name
export default pi;
//export can export multiple functions or variables but this is import in the same order with the same name
export { doublePi, triplePi };
