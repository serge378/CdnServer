const express = require("express");
const app = express();
const router = require("./router").router;

app.use("/static", express.static("static"));

app.set("views", __dirname + "/views");

// Test server available
app.use("/cdn", router);

// 404 page
app.use((req, res) => {
  res.status(404).render("404.ejs");
});

app.listen(8080);
