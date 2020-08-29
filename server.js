const express = require("express");
const app = express();

app.use("/static", express.static("static"));

app.listen(8080);
