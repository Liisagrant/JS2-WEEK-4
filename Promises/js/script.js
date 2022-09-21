//A Promise object is designed for asynchronous code. It will handle different states for you when dealing with asynchronous code, such as a success or failed state.

//How They Work
//A promise will be in one of these states when you are working with them:

//pending: Initial state. When it is not in fulfilled or rejected it will be in this state.
//fulfilled: The operation was successful.
//rejected: The operation failed.

//Basic Example
const myPromise = new Promise((resolve, reject) => {
  // We are hardcoding a value for this example
  const shouldResolve = true;
  if (shouldResolve) {
    // If the code inside of the promise was able to do what
    // it needed to do, then it will call this 'resolve' callback
    resolve("Promise resolved successfully.");
  } else {
    // If the code inside of the promise failed to do what
    // it needed to do then it will call this 'reject' callback
    reject("Promise has failed");
  }
});

myPromise.then((result) => {
  // Logs either the 'resolve' or 'reject' returns based on
  // whether the promise succeeded or failed
  console.log(result);
});

//.then() and chaining
//In Promises we use a .then() method. The code in this then() block will run only after the previous code had finished running.
//getData.then().then().then();

//Example
// We fetch the data from the URL
fetch("https://jsonplaceholder.typicode.com/todos/1")
  // We have to asynchronously parse the data into JSON
  //   so we can make use of it
  .then((response) => response.json())
  // Data is now available as
  .then((json) => console.log(json))
  .catch((error) => {
    console.log("An error has been thrown");
    console.log(error); //If something is wrong this will kick in. eksa breake the link
  });

//.catch()
//What if something goes wrong during our asynchronous call?We have a .catch method to handle this.
//Example

//.finally()
//This is the last method of Promises we will be looking at it.
//It gets added to the end of the Promise chain. It will always run regardless of whether there was an error or not. We make use of it to handle any kind of “tear down” i.e. things that should happen after our asynchronous code is done.
//A common use case of this is dealing with a Loading Spinner. We first show a Loading Spinner when our asynchronous code starts, and then at the end we hide the Loading Spinner. This Loading Spinner needs to be hidden at the end regardless of whether or not we have an error. The .finally() method makes this trivial to deal with
//Example

const statusMessageWrapper = document.getElementById("status-message");
console.log(statusMessageWrapper);

fetch("https://jsonplaceholder.typicode.com/tods/1")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    statusMessageWrapper.innerHTML = "yay all good";
  })
  .catch((error) => {
    console.log(error);
    statusMessageWrapper.innerHTML = "Sorry we have an error";
  })
  .finally((statusMessageWrapper.innerHTML = "Loading..."));
