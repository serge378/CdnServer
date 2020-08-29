const express = require("express");
const app = express();

app.use("/static", express.static("static"));

app.set("views", __dirname + "/views");

// 404 page
app.use((req, res) => {
  res.status(404).render("404.ejs");
});

app.listen(8080);
