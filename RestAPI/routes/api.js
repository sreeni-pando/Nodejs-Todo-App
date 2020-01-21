const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja");

router.get("/ninjas", function(req, res) {
  // console.log("In get ");
  res.send({ type: "GET" });
});

router.post("/ninjas", function(req, res, next) {
  // var data = req.params

  Ninja.create(req.body).then(function(ninja) {
    res.send(ninja);
  }).catch(next);
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
