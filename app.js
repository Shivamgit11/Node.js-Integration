//http, https,fs,path,os
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const AdminRoutes = require("./routes/admin");
const ShopRoutes = require("./routes/shop");
const LoginRoutes = require("./routes/login");
const MessageRoutes = require("./routes/message");

app.use(bodyParser.urlencoded({ urlencoded: false }));
app.use("/admin", AdminRoutes);
app.use("/shop", ShopRoutes);
app.use("/login", LoginRoutes);
app.use("/message", MessageRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000);
