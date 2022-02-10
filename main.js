function updateTime() {
    var getInfo = new Date();

    var hour = getInfo.getHours();
    var minute = getInfo.getMinutes();
    var second = getInfo.getSeconds();
    //var zone = getInfo.getTimezoneOffset(); time zone?

    var time = hour + ":" + minute + ":" + second;
    
    document.getElementById("p1").innerHTML = time;
    
    var today = getInfo.getMonth() + "/" + getInfo.getDay() + "/" + getInfo.getFullYear();
    
    document.getElementById("p2").innerHTML = today;
}
//had to make it a function to apply the interval, couldn't use jsut the variables

setInterval(updateTime, 1000);

const alarm = ('10 Jan 2022 13:57:50 GMT-05:00');

let alarmTimeInSeconds = Date.parse(alarm); 
let nowTimeInSeconds = Math.floor(Date.now() / 1000);
//let nowTimeInSeconds = Date.now(); tried this as well
let diff = alarmTimeInSeconds - nowTimeInSeconds; // total diff

function checkAlarm() {
        if (diff == 0) {
            alert('hey');
    };
};

setInterval(checkAlarm, 1000);





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

  





