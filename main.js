function updateTime() {
    var getInfo = new Date();

    var time = getInfo.getHours() + ":" + getInfo.getMinutes() + ":" + getInfo.getSeconds();
    
    document.getElementById("p1").innerHTML = time;
    
    var today = getInfo.getMonth() + "/" + getInfo.getDay() + "/" + getInfo.getFullYear();
    
    document.getElementById("p2").innerHTML = today;
}

setInterval(updateTime, 1000);


