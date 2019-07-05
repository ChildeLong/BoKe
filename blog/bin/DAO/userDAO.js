var mongoose = require("./connection.js");

var userSchema = new mongoose.Schema({
    username:String,
    psw:String,
    email:String
});

var User = mongoose.model("user",userSchema);

module.exports = User;


