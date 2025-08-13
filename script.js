let timer;
let minutes = 25;
let seconds = 0;
let isStarted = false;

const timerAction = document.querySelector('#pomodoro-time');
const toStart = document.querySelector('#start');

toStart.addEventListener('click', startTimer);
function startTimer() {
    if(isStarted==true) {
    isStarted = false;
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

function formatTime(minutes, seconds) {
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}


startTimer();