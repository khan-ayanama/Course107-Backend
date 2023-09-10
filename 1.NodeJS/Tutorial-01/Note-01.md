# Node Intro

* Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more.
* Node.js was built on top of Google's V8 JavaScript engine since it was open-sourced under the BSD license.  
* Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.  
* The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Feathers.js, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others
* Node.js is supported across a number of cloud-hosting platforms like Jelastic, Google Cloud Platform, AWS Elastic Beanstalk, Joyent and others.
* When a new odd version is released, the previous even version undergoes transition to Long Term Support (LTS), which gives that version 18 months of active support from the date it is designated LTS. After these 18 months expire, an LTS release receives an additional 12 months of maintenance support

## Javascript Runtime

## Libuv

* Node.js uses libuv under the hood to handle asynchronous events. Libuv is an abstraction layer for network and file system functionality on both Windows and POSIX-based systems such as Linux, macOS, OSS on NonStop, and Unix. Node.js relies on nghttp2 for HTTP support. As of version 20, Node.js uses the ada library which provides up-to-date WHATWG URL compliance. As of version 19.5, Node.js uses the simdutf library for fast Unicode validation and transcoding.

## Package Management

* npm is the pre-installed package manager for the Node.js server platform. It installs Node.js programs from the npm registry, organizing the installation and management of third-party Node.js programs. Packages in the npm registry can range from simple helper libraries such as Lodash to task runners such as Grunt.

## Is web Browser Javascript runtime

Web browser run with V8 engine and also provides some extra functions.

* Node comes with own API which provides it's own exclusive properties.
* NodeJS have global object like windows object present in browser but both of them are very different.

## REPL

REPL stands for Read Evaluate Print Loop, and it is a programming language environment (basically a console window) that takes single expression as user input and returns the result back to the console after execution. The REPL session provides a convenient way to quickly test simple JavaScript code.

## Process object of node

* The process.argv property returns an array containing the command-line arguments passed when the Node.js process was launched.
* The first element will be process.execPath. See process.argv0 if access to the original value of argv[0] is needed.
* The second element will be the path to the JavaScript file being executed.
* The remaining elements will be any additional command-line arguments.

```js
// user input in node
const mission = process.argv[2];
```

## Node vs Javascript

NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. Javascript is a Scripting language.
