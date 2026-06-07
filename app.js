//http, https,fs,path,os
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  //process.exit()
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  if (req.url === "/home") {
    res.write("<body><h1>Welcome to Home</h1></body>");
  } else if (req.url === "/about") {
    res.write("<body><h1>Welcome to About page</h1></body>");
  } else if (req.url === "/about")  {
    res.write("<body><h1>Welcome to my Node Js project</h1></body>");
  } else {
    res.write("<body><h1>Welcome to my Node Js project</h1></body>");
  }
  res.write("</html>");
  res.end();
});

server.listen(4000);
