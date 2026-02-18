let timer;
let minutes = 25;
let seconds = 0;
let isStarted = false;

const timerAction = document.querySelector('#pomodoro-time');
const toStart = document.querySelector('#start');
const reset = document.querySelector('#reset');

toStart.addEventListener('click', startTimer);
function startTimer() {
    if(isStarted) {
    toStart.textContent = "stop";
    } else {
    isStarted = true;
    toStart.textContent = "start";
    }
    timer = setInterval(updateTimer, 10);
    
}

function updateTimer() {
    timerAction.textContent = formatTime(minutes, seconds);
    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);  
   } else 
   if (!isStarted) {
    if (seconds > 0) {
            seconds--;
        } else {
            seconds = 59;
            minutes--;
        }
    }  
}
reset.addEventListener('click', resetTime);
function resetTime() {
    clearInterval(timer);
    toStart.textContent = "start";
    timerAction.textContent = "25:00";    
}

function formatTime(minutes, seconds) {
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}


startTimer();
