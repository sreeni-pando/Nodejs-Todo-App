const exp = require("express");
const app = exp();
const body = require("body-parser");
const mongo = require("mongoose");
// console.log(app);
mongo.connect("mongodb://localhost/ninjago", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
app.use(body.json());
app.use("/api", require("./routes/api"));
app.use(function(err,req,res,next){
  // console.log(err);
  res.status(422).send({error:err.message});
});
app.listen(3000, function(err) {
  if (err) throw err;
  else console.log("Request running at port 3000");
});
