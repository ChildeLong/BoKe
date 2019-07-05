var mongoose = require("./connection.js");

var blogSchema = new mongoose.Schema({
    title:String,
    tag:String,
    content:String,
    reply:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"reply"
    }],
    readCount:Number,
    time:Number,
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
});

var Blog = mongoose.model("blog",blogSchema);

module.exports = Blog;