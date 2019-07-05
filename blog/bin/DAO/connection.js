var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/my-blog",{
    useNewUrlParser:true
},function(err){
    if(!err){
        console.log("数据库已连接");
    }else{
        console.log("数据库连接失败");
    }
});


module.exports = mongoose;