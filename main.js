document.getElementById("p1").innerHTML = time;

function updateTime() {
    let getInfo = new Date();

    let hour = getInfo.getHours();
    let minute = getInfo.getMinutes();
    let second = getInfo.getSeconds();
    //let zone = getInfo.getTimezoneOffset(); time zone?

    let time = hour + ":" + minute + ":" + second;
};

setInterval(updateTime, 1000);
    
    //if (hour < 10) {
    //    hour = "0" + hour;
    //};
    
   //  if (minute < 10) {
   //     minute = "0" + minute;
   // };
    
   //  if (second < 10) {
   //     second = "0" + second;
   // };
    
    //if (hour >= 12) {
    //    hour = hour - 12;
    //    time = time + "PM";
   
    //} else (hour < 12) {
    //    time = time + "AM";
    // };

    
    
document.getElementById("p2").innerHTML = today;
    
    var today = (getInfo.getMonth() + 1) + "/" + getInfo.getDay() + "/" + getInfo.getFullYear();
    

//const alarm = ('10 Jan 2022 13:57:50 GMT-05:00');

//let alarmTimeInSeconds = Date.parse(alarm); 
//let nowTimeInSeconds = Math.floor(Date.now() / 1000);
//let nowTimeInSeconds = Date.now(); tried this as well
//let diff = alarmTimeInSeconds - nowTimeInSeconds; // total diff

//function checkAlarm() {
//        if (diff == 0) {
//            alert('hey');
//    };
//};

//setInterval(checkAlarm, 1000);















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

  





