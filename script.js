var today = new Date();
var minsCode = today.getMinutes();
var hoursCode = today.getHours();
var daysCode = today.getDay();
document.addEventListener("DOMContentLoaded", function(){
    console.log("          ████████          \n        ██        ██        \n      ██▒▒          ██      \n    ██▒▒            ▒▒██    \n    ██▒▒            ▒▒██    \n  ██                  ▒▒██  \n  ██                  ▒▒██  \n██                        ██\n██                        ██\n██                      ▒▒██\n██▒▒                    ▒▒██\n  ██                  ▒▒██  \n  ██▒▒                ▒▒██  \n    ██▒▒              ██    \n      ████        ████      \n          ████████          ")
    console.log("To go have the next egg appear click the link below:")
    console.log("https://easteregg.ml/?" + daysCode + hoursCode + minsCode)
    if(window.location.href.indexOf("?" + daysCode + hoursCode + minsCode) > -1) {
       alert("here is the next egg");
    }
});

