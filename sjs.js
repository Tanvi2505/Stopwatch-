let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function formatTime(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const formattedSeconds = String(seconds % 60).padStart(2, '0');
    const formattedMinutes = String(minutes % 60).padStart(2, '0');
    const formattedHours = String(hours).padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function updateDisplay() {
    display.textContent = formatTime(elapsedTime);
}

function startStopwatch() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 1000);
        isRunning = true;
    }
}

function stopStopwatch() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    updateDisplay();
}

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);
