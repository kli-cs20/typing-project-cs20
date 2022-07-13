// Stopwatch / Timer

// Variables for HTML Elements
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

// Event Listeners
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

let [millisecond, second, minute] = [0, 0, 0];
let timerRef = document.querySelector(".mainTime");
let int = null;

function start() {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(mainTime, 10);
}

function stop() {
    clearInterval(int);
}

function reset() {
    [millisecond, second, minute] = [0, 0, 0];
    timerRef.innerHTML = "00 : 00 : 00";
}

function mainTime() {
    millisecond += 10;
    if (millisecond === 1000) {
        millisecond = 0;
        second++;
        if (second === 60) {
            second = 0;
            minute++;
            if (minute === 60) {
                minute = 0;
            }
        }
    }
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;
    let ms = millisecond < 10 ? "00" + millisecond : millisecond < 100 ? "0" + millisecond : millisecond;
    timerRef.innerHTML = ` ${m} : ${s} : ${ms}`;
}



