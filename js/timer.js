// Stopwatch / Timer

// Variables for HTML Elements
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

// Event Listeners
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

let [minute, second, millisecond] = [0, 0, 0];
let timerRef = document.getElementById("mainTime");
let int;

function start() {
    int = setInterval(mainTime, 10);
}

function stop() {
    clearInterval(int);
}

function reset() {
    [minute, second, millisecond] = [0, 0, 0];
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
        }
    }

    let m = minute;
    let s = second;
    let ms = millisecond;
    timerRef.innerHTML = ` ${m} : ${s} : ${ms}`;
}



