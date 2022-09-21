//A callback is a function that you pass to another function as an argument.
//We can use asynchronous callbacks to deal with asynchronous code.

//HOW IT WORKS
// Example function that will get passed as a callback
function exampleFunction() {
  console.log("Example function called");
}

function examplefunctionTwo() {
  console.log("hello I am example nr 2");
}

// Our main function that will run the callback function
// being passed to it
function doSomethingWithCallback(callbackFunction) {
  // Calling the function that is being passed
  callbackFunction();
}

// Pass "exampleFunction" function into our main
// "doSomethingWithCallback" function
doSomethingWithCallback(exampleFunction);
doSomethingWithCallback(examplefunctionTwo);

//Example from class
function whoIsEatingIceCream(callbackFunction) {
  callbackFunction();
}

function showName() {
  console.log(`hello I am I am eating Ice Cream`);
}

whoIsEatingIceCream(showName);

//Example 2 In this example we will use the Array filter method and pass in a callback function instead of using an inline callback function:
const values = [5, 10, 15, 20];

function isBiggerThan10(value) {
  if (value > 10) {
    return true;
  }
}

const newValues = values.filter(isBiggerThan10);
console.log(newValues);
