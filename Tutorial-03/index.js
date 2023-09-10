const express = require("express");
const { resourceLimits } = require("worker_threads");
const server = express();

// Application level middleware
server.use((req, res, next) => {
  console.log(req.method, req.ip, new Date());
  next();
});

// Router level middleware
const auth = (req, res, next) => {
  if (req.query.password == "123") {
    next();
  } else {
    res.sendStatus(404);
  }
};

// API - Endpoint - Route
server.get("/", auth, (req, res) => res.json({ type: "GET" }));
server.post("/", (req, res) => res.json({ type: "POST" }));
server.put("/", (req, res) => res.json({ type: "PUT" }));
server.delete("/", (req, res) => res.json({ type: "DELETE" }));

server.get("/demo", (req, res) => {
  res.send("hello");
  // res.sendFile()
  // res.json({})
});

server.listen(8080, () => console.log("server started"));
