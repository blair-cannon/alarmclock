
function updateTime() {
    let getInfo = new Date();
    let hour = getInfo.getHours();
    let minute = getInfo.getMinutes();
    let second = getInfo.getSeconds();
    //let zone = getInfo.getTimezoneOffset();      time zone?

    let time = hour + ":" + minute + ":" + second;
    
    document.getElementById("p1").innerHTML = time;
    //document.getElementById("p1").innerHTML = getInfo.toLocaleTimeString();
 }
setInterval(updateTime, 1000);

function formatTime(time) {
    if (hour < 10) {
        return "0" + hour;
    }
    
    if (minute < 10) {
       return "0" + minute;
   }
    
    if (second < 10) {
       return "0" + second;
   }
    
    if (hour > 12) {
       hour = hour - 12;
       time = time + "PM";
   
    } else if(hour < 12) {
       time = time + " AM";

    } else if(hour = 12) {
            time = time + " PM";
    };
    return time;
}
    
function updateDay() {
    let getInfo = new Date();
    let month = getInfo.getMonth() + 1;
    let day = getInfo.getDay() + 6;
    let year = getInfo.getFullYear();

    let today = month + "/" + day + "/" + year;
        
       if (month < 10) {
           month = "0" + month;
       }
       if (day < 10) {
           day = "0" + day;
       }
    
    document.getElementById("p2").innerHTML = today; 
}
setInterval(updateDay, 1000);


let alarmTime = null;
let alarmTimeout = null;

function setAlarmTime(value) {
    alarmTime = value;
};

function setAlarm() {
    if(alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => alert("WAKE UP!"), timeout);

        }

    }
}

function clearAlarm() {
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);

    }
}

function alarmCheckBox() {
    var alarmCheck = document.getElementById("alarmCheck");
    var text = document.getElementById("text");
    var alarmAppearence = document.getElementById("alarmAppearence");
    var othertext = document.getElementById("othertext");

    if (alarmCheck.checked == true) {
        text.style.display = "block";
        othertext.style.display = "none";
        alarmAppearence.style.opacity = 1;
    } else {
        text.style.display = "none";
        othertext.style.display = "block";
        alarmAppearence.style.opacity = 0;
    }
};


// function checkAlarm() {
//     let alarm = ('11 Feb 2022 12:07:40 GMT-05:00');

//     let alarmTimeInSeconds = Math.floor(Date.parse(alarm) / 1000); 
//     let nowTimeInSeconds = Math.floor(Date.now() / 1000);
//     //let nowTimeInSeconds = Date.now(); tried this as well
//     let diff = alarmTimeInSeconds - nowTimeInSeconds; // total diff
//     document.getElementById("Countdown").innerHTML = diff;
//        if (diff == 0) {
//            alert('WAKE UP!');      
//    };
    
// };
// setInterval(checkAlarm, 1000);
