let timer;
let minutes = 25;
let seconds = 0;

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const timerElement =
        document.querySelector('#pomodoro-time');
    timerElement.textContent = 
        formatTime(minutes, seconds);

    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
   } else {
        if (seconds > 0) {
            seconds--;
        } else {
            seconds = 59;
            minutes--;
        }
    }
}

function formatTime(minutes, seconds) {
    `${minutes}:${seconds}`;
    return
}


function togglePauseResume() {
    const pauseResumeButton =
        document.querySelector('#break');
    
        clearInterval(timer);
        pauseResumeButton.textContent = 'reset';

        startTimer();
        pauseResumeButton.textContent = 'start';
}
startTimer();