//Fetch
//The Fetch API (fetch()) provides a global fetch method. It is used to send network requests to a server.
// Examples of this can be to get data, send data, update data and delete data.
// fetch is modern and more versatile and you should use it over XMLHttpRequests. There are some unique use cases for XMLHttpRequests, such as monitoring transfer progress, but tbe vast majority of the time you’ll be using fetch when doing API calls and dealing with network requests.

//Syntax:
//fetch(url, options);

// url: This is that you will be fetching data from.
// options: This is an optional options parameter where you can modify the request you are making. You can change the type of HTTP request method, change headers, add data etc.

//Basic
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
// Logs:
// {
// 	"userId": 1,
// 	"id": 1,
// 	"title": "delectus aut autem",
// 	"completed": false
// }

//HOW IT WORKS
//1.vi fecher en url
//2. Passerer automatisk gjennom et respons object. Dette objecte inneholder en hel presentasjon av HTTP responsen. konvertere det til JSON
//3. Vi får tilgang på våre parameter JSON format

//Options
//fetch(url, options);
// This options object let’s us modify our network request as well as include data if we are sending data instead of fetching it.
// Example of the options we can include are:
// method: This is the type of request, such as GET, POST, PUT, DELETE etc. We will be covering these in more detail later. By default a GET request is used.
// headers: This is a nested object that allows you to change the type of headers. Usually we will make use of 'Content-Type': 'application/json', indicating that the data we are sending is JSON.
// body: This is where we pass in data that we want to send to a server. The data type we send here must match the Content-Type we set in the header. We will typically convert our data to JSON before adding it to the body e.g. body: JSON.stringify(data).
//EXAMPLE
//her viser exemplet at vi lager en ny blogpost for serveren.
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//Example making your own options in an object
// An object that contains our options
const fetchOptions = {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

// Using the `fetchOptions` object we created aboves
fetch("https://jsonplaceholder.typicode.com/posts", fetchOptions)
  .then((response) => response.json())
  .then((json) => console.log(json));
