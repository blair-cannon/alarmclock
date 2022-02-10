function updateTime() {
    var getInfo = new Date();

    var hour = getInfo.getHours();
    var minute = getInfo.getMinutes();
    var second = getInfo.getSeconds();

    var time = hour + ":" + minute + ":" + second;
    
    document.getElementById("p1").innerHTML = time;
    
    var today = getInfo.getMonth() + "/" + getInfo.getDay() + "/" + getInfo.getFullYear();
    
    document.getElementById("p2").innerHTML = today;
}
//had to make it a function to apply the interval, couldn't use jsut the variables

setInterval(updateTime, 1000);

var alarmTime = 'Thu Feb 10 2022 12:25:00';

if (alarmTime - getInfo = 0) {
    alert("hey");
}


//var timeMili = getTime();
//var alarmTime = '1/4/2022 12.20.00';
//setTimeout(alert('hey'), x);
//var x = (alarmTime.getTime - timeMili);


//var alarmTime = 11 + ":" + 31 + ":" + 10;

//if (alarmTime == time) {
 //   alert("hey");
  //  };

//var alarmTime = {
//    hours: 09, 
//    minutes: 47, 
//    seconds: 25,
//};

//function setOffAlarm() {
//    if (time - alarmTime === 0) {
//       alert("WAKE UP!")
//    }
//}

//var diff = alarmTime - getInfo;

//function myAlarm() {
//    if (diff === 0) {
//        alarm("WAKE UP!");
//    }
//}

//function setAlarmTime() {
//    alarmTime = {
//         11:23:00
//      };
//  }
  
//if (alarmTime - time = 0) {
//    alert("hey");
//}

  





