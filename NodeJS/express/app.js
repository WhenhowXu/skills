const express = require("express");
const app = express();
const port = 3009;
app
  .get("/", function (req, res) {
    res.status(502).send({ message: "Hello World" });
  })
  .listen(port);
