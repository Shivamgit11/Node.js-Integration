const express = require("express");
const router = express.Router();
const fs = require("fs");
// const data = require("./data");

router.get("/", (req, res, next) => {
  fs.readFile("username.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      data = "No messages yet!";
    }
    res.send(`
    ${data}
    <form action="/message"  method="POST" onSubmit="document.getElementById('username').value=localStorage.getItem('username')">
      <input id="message" type="text" name="message" placeholder="Message" require />
      <input  type="hidden" id="username" name="username" placeholder="username" />
      <button type="submit">submit</button>
    </form>
  `);
  });
});

router.post("/", (req, res, next) => {
  console.log(req.body.username);
  console.log(req.body.message);

  fs.writeFile(
    "username.txt",
    `${req.body.username}: ${req.body.message}`,
    { flag: "a" },
    (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Something went wrong");
      }

      res.redirect("/message");
    },
  );
});
module.exports = router;
