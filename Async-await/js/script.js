//Async Await
//Async/Await addresses by allowing us to write our code in a sequential way while still handling asynchronous code.

//How it works
//Async/Await gives us two new key words:
//async: This keyword must be added to the start of a function declaration so that it becomes an “async” function. Note: We have to include this to make use of the await keyword.
//await: This keyword must be added at the start of any function call that needs to be dealt with asynchronously.

//EXAMPLE basic
// The "async" keyword is added at the front of the function
// turning it into an asynchronous function.

async function myAsyncFunction() {
  // The "await" keyword is added before the function call of "getFetch()"
  const result = await doFetch();
}

//Example 1
// Fetches data from the URL passed in
async function doFetch(url) {
  const data = await fetch(url);
  const json = await data.json();
  return json;
}

// Our main function that will call the data
// using await. If we don't use await then we will
// instead get a promise
async function main() {
  const articles = await doFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  console.log(articles);
  // Returns:
  // {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
}

// Execute our code
main();

//Try/catch
//Needed to deal with errors

// Try/catch/finally syntax
// The try/catch/finally blocks break down into the following:

// try: This is our main code that we attempt to run, such as fetching data from an API.

// catch: This block of code will only execute if there was a problem with the code in the try block, such as an error being thrown.

// finally: This is an optional block of code which will run regardless of whether the try block was successful or if an error was thrown and the catch block was executed.

//EXAMPLE
async function doFetch(url) {
  try {
    const data = await fetch(url);
    const json = await data.json();
    return json;
  } catch (error) {
    console.log(error);
  } finally {
    console.log("API call is done");
  }
}

//Multiple parallel requests
// We can use the Promise.all() helper function to get data from multiple API end points.

// It takes multiple promises and then returns a single array containing all of the results as different items in the array.

// If we were to use async await then we would have to wait for each request to finish sequentially which may not be efficient.

// The syntax looks as follows:

//Example
const promise1 = Promise.resolve("Promise 1 result");
const promise2 = Promise.resolve("Promise 2 result");
const promise3 = Promise.resolve("Promise 3 result");

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

//Practical example of Promise.all()
async function doFetch(url) {
  try {
    const data = await fetch(url);
    const json = await data.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  const data = await Promise.all([
    doFetch("https://jsonplaceholder.typicode.com/todos/1"),
    doFetch("https://jsonplaceholder.typicode.com/todos/2"),
    doFetch("https://jsonplaceholder.typicode.com/todos/3"),
  ]);
}

main();
