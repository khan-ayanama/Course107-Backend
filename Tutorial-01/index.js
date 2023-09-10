// 1. Common JS Metho
// const lib = require("./lib");

// console.log(lib.sum(2, 4));
// console.log(lib.diff(6, 5));

// 2. ES6 Method
// import { sum, diff } from "./lib.js";

// console.log(sum(2, 4));
// console.log(diff(2, 4));

// 3. File System in Node.js
// const fs = require("fs");

// 1. It will print data synchronous
// const txt = fs.readFileSync("demo.txt", "utf-8");
// console.log(txt);

// 2. Printing data asynchronous
// fs.readFile("demo.txt", "utf-8", (err, txt) => {
//   console.log(txt);
// });

// Command Line Arguements

var arguments = process.argv;

console.log(arguments);
