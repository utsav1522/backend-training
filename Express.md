# Express Documentation

Express is a Node web framework and is the underlyign library for the number of popular node web frameworks. It provides mechanism to 
<ul>
  <li>
    wirte handlers for request with different HTTP verbs at different URL paths</li>
  <li>
    Set common web application settings like the port to use for connecting, and the location of templates that are used for rendering the response.
</li>
<li>
  Add additional request processing "middleware" at any point within the request handling pipeline.
</li>
</ul>

## Sample Express Js Code

<pre>
const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

</pre>
## Explanation for the above code; 
<p align = "justify">
The first two lines require() (import) the express module and create an Express application. This object, which is traditionally named app, has methods for routing HTTP requests, configuring middleware, rendering HTML views, registering a template engine, and modifying application settings that control how the application behaves (e.g. the environment mode, whether route definitions are case sensitive, etc.)

<p align = "justify">
The middle part of the code (the three lines starting with app.get) shows a route definition. The app.get() method specifies a callback function that will be invoked whenever there is an HTTP GET request with a path ('/') relative to the site root. The callback function takes a request and a response object as arguments, and calls send() on the response to return the string "Hello World!"

<p align = "justify">
The final block starts up the server on a specified port ('3000') and prints a log comment to the console. With the server running, you could go to localhost:3000 in your browser to see the example response returned.




## Express Middleware
<p align = "justify">
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
</p>

Developers can write their own middleware functions. The only difference middleware function and the router handler is that a middleware funtion has a third parameter next which middle ware functions are expected to call if they are not that which complete the request cycle.

Middleware functions can perform the following tasks:
<ul>
<li align = "justify"> Execute any code. </li>
<li align = "justify"> Make changes to the request and the response objects.</li>
<li align = "justify"> End the request-response cycle.</li>
<li align = "justify"> Call the next middleware function in the stack. </li>
<li align = "justify"> If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging. </li>
</ul>


# REST API
## What is an API ?

<p align = "justify">
An API, or application programming interface, is a set of rules or protocols that enables software applications to communicate with each other to exchange data, features and functionality.

<p align = "justify">
APIs allow for the sharing of only the information necessary, keeping other internal system details hidden, which helps with system security. Servers or devices do not have to fully expose data—APIs enable the sharing of small packets of data, relevant to the specific request.

## REST (representational state transfer)
<p align = "justify">
REST is a set of web API architecture principles. REST APIs—also known as RESTful APIs—are APIs that adhere to certain REST architectural constraints. REST APIs use HTTP requests such as GET, PUT, HEAD and DELETE to interact with resources. REST makes data available as resources, with each resource represented by a unique URI. Clients request a resource by providing its URI.



## How an API Works ?

The application submitting the request is the client, and the server provides the response. The API is the bridge establishing the connection between them.

The Process of API works in the following manner: 

<ul>
  <li>
    Whenever the user clicks on a button / initiates an event that would trigger an API request, in that case, a new API request is triggered and is sent to the servers. The API has the URI embedded which tells the browser as to where the request is to be sent.
  </li>
  <li>
    After receiving a valid request, from the client,the API calls to the external program or web server, in this case, the third-party payment system.
  </li>
  <li>
    The server sends a response to the API with the requested information.
  </li>
  <li>
    The API transfers the data to the initial requesting application, in this case, the product website.
  </li>

</ul>



