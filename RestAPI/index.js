const exp = require("express");
const app = exp();
const body = require("body-parser");
const mongo = require("mongoose");
mongo.connect("mongodb://localhost/ninjago", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
app.use(body.json());
app.use("/api", require("./routes/api"));

app.listen(3000, function(err) {
  if (err) throw err;
  else console.log("Request running at port 3000");
});
