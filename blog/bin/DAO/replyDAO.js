var mongoose = require("./connection.js");

var replySchema = new mongoose.Schema({
    nickname:String,
    content:String,
    time:Number,
    blogID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"blog"
    }
});

var Reply = mongoose.model("reply",replySchema);

module.exports = Reply;


