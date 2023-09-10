# Node Day - 2

## What does NodeJS Do?

Node.js is a runtime environment that allows you to execute JavaScript code outside of a web browser. It's built on the V8 JavaScript engine, which is the same engine that Google Chrome uses. Node.js enables you to create server-side applications using JavaScript, making it possible to use a single programming language for both front-end and back-end development.

* Here are some key things Node.js can do:

  * Server-Side Programming: Node.js is commonly used to build server-side applications such as web servers, APIs, and real-time applications. It's designed to handle asynchronous I/O operations efficiently, making it suitable for handling a large number of concurrent connections.

  * Web Development: With the help of frameworks like Express.js, you can build web applications and APIs using Node.js. Express.js provides a robust set of features for routing, middleware, and handling HTTP requests and responses.

  * Real-Time Applications: Node.js is well-suited for building real-time applications like chat applications, online gaming, and collaborative tools. Its event-driven architecture and non-blocking I/O make it easy to handle multiple clients simultaneously.

  * Package Management: Node.js comes with the npm (Node Package Manager) tool, which is a powerful package manager that allows you to easily install, manage, and share reusable code packages.

  * Command-Line Tools: Node.js can be used to build command-line tools and scripts. You can create utilities for tasks like file manipulation, data processing, automation, and more.

  * Microservices: Node.js is often used in microservices architecture due to its lightweight and scalable nature. It's easy to develop and deploy small, independent services that communicate with each other.

  * IoT (Internet of Things): Node.js can be used to develop applications for IoT devices because of its efficiency and ability to handle a variety of hardware components.

  * Streaming: Node.js is great for handling streaming data, such as audio and video, due to its event-driven nature and ability to process data in chunks.

  * Desktop Applications: While less common, you can also use Node.js to build desktop applications using frameworks like Electron, which allows you to create cross-platform desktop apps using web technologies.

## ASynchronous

The asynchronous nature of Node.js is one of its key features that sets it apart from traditional server-side programming environments. This asynchronous architecture allows Node.js to handle multiple tasks and operations without blocking the execution of other code. Here's how it works:

* Non-Blocking I/O: In traditional server environments, when a server handles a task that involves I/O operations (like reading/writing to files or databases), it usually blocks the entire application until that task is completed. This can lead to inefficient resource utilization. Node.js, on the other hand, employs non-blocking I/O operations. When an I/O operation is initiated, Node.js doesn't wait for it to complete. Instead, it continues executing other tasks and registers a callback function to be executed once the I/O operation is finished. This enables Node.js to efficiently handle multiple tasks simultaneously.

* Event Loop: Node.js operates within an event-driven architecture. It has an event loop that continuously checks for events like incoming HTTP requests or completion of I/O operations. When an event is detected, Node.js triggers the associated callback function, allowing the program to respond to events in an asynchronous manner.

* Callback Functions: Callbacks are a fundamental part of writing asynchronous code in Node.js. They are functions passed as arguments to other functions. These callback functions are executed when an asynchronous operation is completed. For example, when reading a file asynchronously, you provide a callback function that is executed once the file is read.

* Promises and Async/Await: While callbacks are powerful, they can sometimes lead to complex and nested code structures (a situation known as "callback hell"). To address this, Node.js introduced Promises and later the async/await syntax. Promises provide a more structured way to handle asynchronous operations, and async/await allows you to write asynchronous code in a more synchronous style, making it easier to read and maintain.

The asynchronous nature of Node.js is particularly advantageous when dealing with tasks that involve I/O operations, network requests, and real-time interactions, as it enables efficient handling of multiple requests and events concurrently without blocking the main execution thread. This makes Node.js a suitable choice for building scalable and responsive applications, especially in scenarios where high concurrency is required.

## Is Javascript Asynchronous

Javascript's asynchronous property comes not from javascript as it is single threaded language also not from node but from the libuv which is built by C language which is multithreaded language.

* It's asysnchronous propery comes frome libuv

## Multithreading, process, Threads

### Process

A process is an independent and self-contained unit of execution in an operating system. It consists of its own memory space, code, data, and system resources. Each process runs in its own isolated environment, which prevents one process from directly accessing the memory or resources of another process. Processes are managed by the operating system and can include one or multiple threads.

### Thread

A thread is a smaller unit of execution within a process. Unlike processes, threads within the same process share the same memory space, code, and data. This makes communication and data sharing between threads within a process more efficient compared to inter-process communication. Threads are executed concurrently and can perform different tasks within the same process. Threads share resources like memory and file handles, allowing them to work together effectively.

### Multithreading

Multithreading refers to the ability of an application or process to execute multiple threads concurrently within a single process. Multithreading can provide several benefits, such as improved responsiveness, efficient resource utilization, and the ability to perform multiple tasks simultaneously. Threads within the same process can communicate and share data directly without the need for complex communication mechanisms.

### Differences

* Memory Sharing: In a process, each instance has its own separate memory space, while threads within the same process share the same memory space.

* Isolation: Processes are isolated from each other, preventing one process from affecting the execution or data of another. Threads within the same process, however, can directly access and modify each other's memory.

* Creation Overhead: Creating a new process is generally more resource-intensive than creating a new thread due to the overhead of duplicating resources for the new process. Threads share most of their resources with the parent process.

* Communication: Inter-process communication (IPC) between different processes can be more complex and slower compared to inter-thread communication within the same process.

* Resource Management: Processes are heavier in terms of resource usage because they have their own memory space and resources. Threads are lighter in terms of resource usage since they share resources with the process.

* Concurrency: Processes are inherently separate and isolated, so they can run on different CPU cores or even on different machines. Threads, being part of the same process, run on the same core or cores available to the process.

In summary, processes and threads are essential concepts in operating systems and concurrency. Processes provide isolation and independent execution units, while threads provide lightweight units of execution that share resources within a process. Multithreading allows applications to make efficient use of available resources and improve overall performance by handling multiple tasks concurrently.

## Event Loop

The event loop is a crucial concept in asynchronous programming and is the backbone of how JavaScript handles asynchronous operations. It's responsible for managing the execution of code in a non-blocking manner, allowing for efficient handling of I/O operations, timers, and events.

Here's an overview of how the event loop works:

* Call Stack: When you execute JavaScript code, it's processed in the call stack, which is a data structure that keeps track of the currently executing function or code block. Each function call is added to the stack, and when a function completes, it's removed from the stack.

* Web APIs: When you encounter asynchronous operations like setTimeout, fetch, or XMLHttpRequest, these operations are offloaded to Web APIs provided by the browser or the environment. These APIs include functions for handling timers, making network requests, and interacting with the DOM.

* Callback Queue: Asynchronous operations complete in the background, and their corresponding callback functions are placed in the callback queue. Each callback function waits for its turn to be executed.

* Event Loop: The event loop continuously checks the callback queue while the call stack is empty. If the call stack is empty, the event loop takes the first callback from the queue and pushes it onto the call stack, executing the corresponding code.

* Execution: Once the callback function is on the call stack, it's executed. This process continues as long as there are callbacks in the queue and the call stack is empty.

* Microtasks: JavaScript also has a concept of microtasks, which are executed at the end of each task in the event loop. Promises and other asynchronous operations that are part of the ECMAScript specification are handled as microtasks. Microtasks have a higher priority than regular tasks, ensuring that they are executed before the next tick of the event loop.

* By following this cycle of checking the callback queue, moving callbacks to the call stack, and executing them, the event loop allows JavaScript to handle asynchronous tasks efficiently without blocking the main thread. This is essential for building responsive and interactive web applications.

It's important to note that the event loop is not unique to browsers; it's a fundamental concept in JavaScript and is also present in other environments like Node.js. Understanding the event loop helps developers write code that effectively leverages asynchronous programming and optimizes performance.

## Phases of Event Loop

The event loop in JavaScript consists of different phases that help manage the execution of asynchronous operations and ensure that code is processed in a non-blocking manner. The event loop has several key phases:

### Synchronous Tasks

* The event loop starts by processing any synchronous tasks that are currently in the call stack.  
  * These are the regular function calls that are executed sequentially one after another.
Microtask Queue:

* After processing synchronous tasks, the event loop checks the microtask queue.
  * Microtasks are tasks that have a higher priority than regular tasks and are executed before the next tick of the event loop.
  * Microtasks include things like Promise callbacks and mutation observer callbacks.

### Timer Tasks

* The event loop then checks the timer tasks to determine if any timer events have elapsed.
  * Timer tasks are created using functions like setTimeout() and setInterval().
  * If a timer has elapsed, its associated callback is added to the callback queue.

### I/O Tasks

* The event loop processes I/O tasks, which include network requests, file system operations, and other asynchronous tasks.
  * When I/O operations complete, their callbacks are placed in the callback queue.

### Callback Queue

* Once the callback queue is populated with various callbacks from microtasks, timer tasks, and I/O tasks, the event loop starts processing them one by one.
  * Callbacks are taken from the queue and executed in the order they were added.
  * This phase ensures that asynchronous operations are completed and their corresponding code is executed.

### Render

* In browser environments, there's often a rendering phase after processing callbacks.
* The browser updates the UI based on any changes that occurred during the callback execution.
* The event loop continuously cycles through these phases, checking and processing tasks in a non-blocking manner. It ensures that JavaScript can handle asynchronous operations while maintaining a responsive and efficient execution environment.