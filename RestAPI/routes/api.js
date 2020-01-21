const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja");

router.get("/ninjas", function(req, res) {
  res.send({ type: "GET" });
});

router.post("/ninjas", function(req, res, next) {
  // var data = req.params

  Ninja.create(req.body).then(function(ninja) {
    res.send(ninja);
  }).catch(next);
});

router.put("/ninjas/:id", function(req, res) {
  Ninja.findByIdAndUpdate({_id:req.params.id},req.body, {new: true, useFindAndModify: false}).then(function(ninja){
    res.send(ninja);
  });
});

router.delete("/ninjas/:id", function(req, res) {
  Ninja.findOneAndUpdate({_id:req.params.id}).then(function(ninja){
    res.status(300).send(ninja);
  });
});

module.exports = router;
