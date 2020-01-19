const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja");

router.get("/ninjas", function(req, res) {
  res.send({ type: "GEt" });
});

router.post("/ninjas", function(req, res) {
  // var data = req.params

  Ninja.create(req.body).then(function(ninja) {
    res.send(ninja);
  });
});

router.put("/ninjas/:id", function(req, res) {
  // var data = req.params
  res.send({ type: "PUT" });
});

router.delete("/ninjas/:id", function(req, res) {
  // var data = req.params
  res.send({ type: "Delete" });
});

module.exports = router;
