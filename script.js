var today = new Date();
var code = today.getHours();
document.addEventListener("DOMContentLoaded", function(){
    console.log("          ████████          \n        ██        ██        \n      ██▒▒          ██      \n    ██▒▒            ▒▒██    \n    ██▒▒            ▒▒██    \n  ██                  ▒▒██  \n  ██                  ▒▒██  \n██                        ██\n██                        ██\n██                      ▒▒██\n██▒▒                    ▒▒██\n  ██                  ▒▒██  \n  ██▒▒                ▒▒██  \n    ██▒▒              ██    \n      ████        ████      \n          ████████          ")
    console.log("To go have the next egg appear click the link below:")
    console.log("https://easteregg.ml/?" + code)
    if(window.location.href.indexOf("?" + code) > -1) {
       alert("here is the next egg");
    }
});

