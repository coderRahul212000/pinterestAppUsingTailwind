const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
mongoose.connect("mongodb+srv://rahulrajput212000:KF0BOj0MOmFDjUVG@cluster0.uxjioej.mongodb.net/pin?retryWrites=true&w=majority")
.then(()=> console.log("database connected"))

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profileImage: String,
  contact: Number,
  boards: {
    type: Array,
    default: []
  },
  posts:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post"
    }
  ]
})

userSchema.plugin(plm);
module.exports = mongoose.model("user", userSchema)
