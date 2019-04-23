var today = new Date();
var minsCode = today.getMinutes();
var hoursCode = today.getHours();
var daysCode = today.getDay();
document.addEventListener("DOMContentLoaded", function(){
    console.log("          ████████          \n        ██        ██        \n      ██▒▒          ██      \n    ██▒▒            ▒▒██    \n    ██▒▒            ▒▒██    \n  ██                  ▒▒██  \n  ██                  ▒▒██  \n██                        ██\n██                        ██\n██                      ▒▒██\n██▒▒                    ▒▒██\n  ██                  ▒▒██  \n  ██▒▒                ▒▒██  \n    ██▒▒              ██    \n      ████        ████      \n          ████████          ")
    console.log("To go have the next egg appear click the link below:")
    console.log("https://easteregg.ml/?code=" + daysCode + hoursCode + minsCode)
    if(window.location.href.indexOf("?code=" + daysCode + hoursCode + minsCode) > -1) {
       alert("Here is the next egg. (This message will always appear; if you ever don't see it, you will have to go through the whole system again, starting form the beginning.");
       documnet.getElementById("pre").style.color = "White"
       document.getElementById("pre").innerHTML = "          ████████          \n        ██        ██        \n      ██▒▒          ██      \n    ██▒▒            ▒▒██    \n    ██▒▒            ▒▒██    \n  ██                  ▒▒██  \n  ██                  ▒▒██  \n██                        ██\n██                        ██\n██                      ▒▒██\n██▒▒                    ▒▒██\n  ██                  ▒▒██  \n  ██▒▒                ▒▒██  \n    ██▒▒              ██    \n      ████        ████      \n          ████████          ";
    }
});

