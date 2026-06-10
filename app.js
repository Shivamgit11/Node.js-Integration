//http, https,fs,path,os
const http = require("http");
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("In the middleware");
    next();
});
app.use((req, res, next) => {
    console.log("In the middleware");
    res.send("<h1>Hello from Express Server</h1>");
});

const server = http.createServer(app);

server.listen(4000);
