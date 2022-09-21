//Synchronous code
//kode som skjer en etter en.
//Synchronous code is code that runs in sequence (line after line) and is very predictable as you know exactly what will happen next.
//Example Syncronous:
console.log("I");
console.log("love");
console.log("ice Cream");

//Example2
const a = 50;
const b = 10;

const resultOne = a + b;
const resultTwo = a - b;

console.log("resultOne", resultOne);
console.log("resultTwo", resultTwo);

//Asynchronous Code
//kode som funker typ samtidig. den skjer ikke en etter en men eks loader samtidig
//Asynchronous code is code that can run independently of our program flow.
//Asynchronous code is code that will run without blocking or blocking the main thread.
//Example
console.log("I");
// Creating a timer
setTimeout(() => {
  console.log("Eat");
}, 3000);
console.log("ICE CREAM");

//Example Asynchronous code
console.log("Console.log BEFORE timer");
// Creating a timer
setTimeout(() => {
  console.log("Code inside of timer");
}, 3000);
console.log("Console.log AFTER timer");

//Take note how the timer code inside of the timer runs after the other console.logs.
//If the code was synchronous then our last console.log would only have been executed after the timer had finished
