// setInterval(function(){
//     x = 1;
//     console.log(x++);
// }, 1);

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let intervalID;

document.getElementById("hours").innerHTML = `0${hours}`;
document.getElementById("minutes").innerHTML = `0${minutes}`;
document.getElementById("seconds").innerHTML = `0${seconds}`;


function timer(){
    milliSeconds++;

    if (milliSeconds === 1000){
        milliSeconds = 0;
        seconds++;
        if (seconds < 10){
            seconds = `0${seconds}`;
        }
        document.getElementById("seconds").innerHTML = seconds;
        if(seconds === 60){
            seconds = 0;
            minutes++;
            if (minutes < 10){
                minutes = `0${minutes}`;
            }
            document.getElementById("minutes").innerHTML = minutes;
            if (minutes === 60){
                minutes = 0;
                hours++;
                if (hours < 10){
                    hours = `0${hours}`;
                }
                document.getElementById("hours").innerHTML = hours;
            }
        }
    }
    document.getElementById("ms").innerHTML = String(milliSeconds).substring(0,2);
}

function start(){
    document.getElementById("msColon1").classList.add("colon");
    document.getElementById("msColon2").classList.add("colon");
    intervalID = setInterval(timer, 1);

}

document.getElementById("start").addEventListener("click", function(){
    start();
});

document.getElementById("stop").addEventListener("click", function(){
    clearInterval(intervalID);
});

document.getElementById("reset").addEventListener("click", function(){
    location.reload();
});


