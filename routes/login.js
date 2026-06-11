const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(
    '<form onsubmit="localStorage.setItem(\'username\', document.getElementById(\'username\').value)" action="/message" method="POST">\n\n<input id="username" type="text" name="username" placeholder="Username">\n<button type="submit">add</button>\n\n</form>',
  );
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  res.redirect("/message");
});
module.exports = router;
