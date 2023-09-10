# Web server using NodeJS

## HTTP requests

Request object comprises of many properties, but important ones are :

* Type of Request : GET, POST, PUT, DELETE etc.
* Headers : Meta data sent by your browser like browser name, cookies, authentication information etc.
* Query Parameters (url?name=john) : This is used in GET requests to send data to server
* Route Params (url/john)
* Body data : This is used in POST and other requests to send data to server

## HTTP responses

Response object comprises of many properties, but important ones are :

* Headers : Meta data sent by your server back to client like server name, content size, last updated time etc.
* Response status code (200, 404, 403, 502)
* Response body : Actual data to be sent to client : HTML, JS, JSON, CSS, Image etc.

### More info

* HTTP requests and responses can be tracked from Dev Tools > Network Tab

* In Node, we can use core http module to create a Server which listens to requests, modify data in-between and provides responses. Server needs a PORT to be bound to - use only port number > 1024.

* Server can simply be said as a function which receives a request and returns a response. [ This is just for understanding]

* There are many Headers which exists on request and responses - shared a link below with list of existing headers.

* We can use Server to do 3 things:

  * Static file Hosting : Sending normal files without formatting or modifying.
  * Server Side Rendering : Mixing data with templates and rendering dynamic views (dynamic web pages)
  * Web APIs : Sending data via some APIs/ endpoints.
* Every Request has one and only one response. If there is more than 1 response which you want to send - you will encounter a error - "Headers already sent"

* POSTMAN is a software for doing complex API requests.

## [[ Assignments ]]

* Assignment 1 : Capture the request which goes when you like a post on facebook (using Chrome network). What are the headers ? What is the payload ?
* Assignment 2 : In the chapter we developed a server with only URL switch, but you have to make that more efficient by making it check both METHOD (GET,POST) + URL path
So output of a request with GET /demo will be different from POST /demo [ Use POSTMAN for requests]
* Assignment 3 [Challenge] : Try and run 2 different server using the same code you have index.js. You will need to use 2 different ports. But can you do it using the same file and changing PORTS dynamically somehow ?
* Assignment 4 [Challenge] : You can also send some data to server using /demo?product=123. where product=123 is called query parameters. Can you capture that data and make the product page work according to the ID (123) . [ This we will do in next chapters using express, but you can give it a try ]
