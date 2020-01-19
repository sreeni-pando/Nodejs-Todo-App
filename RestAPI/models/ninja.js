const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ninjaSchema = new schema({
  name: {
    type: String,
    required: [true, "Name Field is required"]
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  }
});
const Ninga = mongoose.model("ninja", ninjaSchema);
module.exports = Ninga;
