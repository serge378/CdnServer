const express = require("express");

exports.router = (function () {
  const router = express.Router();

  router
    .route("/available")
    .post((req, res) => res.status(200).send("serveur disponible"));

  return router;
})();
