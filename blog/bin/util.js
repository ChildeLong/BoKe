function timeFormat(timestamp){
    var now = new Date().getTime();
    var distance = now-timestamp;
    distance/=1000;
    if(distance<60){
        return "刚刚";
    }else if(distance<3600){
        return Math.floor(distance/60)+"分钟之前";
    }else if(distance<3600*24){
        return Math.floor(distance/3600)+"小时之前";
    }else{
        var d = new Date(timestamp);
        var mongth = d.getMonth()+1;
        var date = d.getDate();
        return mongth+"月"+date+"日";
    }
}

module.exports = {timeFormat}