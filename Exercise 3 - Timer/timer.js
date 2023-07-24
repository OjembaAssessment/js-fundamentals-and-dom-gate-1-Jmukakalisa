
/*
Timer must have the "+" and "-" buttons to allow the user to set their own starting time
Timer has to run when start button is cliked
Timer has to stop when stop button is clicked
The user need to be able to update or reset their timer
 */

// Get the necessary DOM elements from html document
const timerDisplay = document.getElementById('timer');
const addButton = document.getElementById('addButton');
const subtractButton = document.getElementById('subtractButton');
const resetButton = document.getElementById('resetButton');
const startStopButton = document.getElementById('startStopButton');

// Initializing the variables in accordance to the required timer set up

let timer;
let timeInSeconds = 0;
let isTimerRunning = false;

// Updating the timer display
function updateTimerDisplay() {
  const formattedTime = `${timeInSeconds}s`; // Setting time format (in seconds)
  timerDisplay.textContent = formattedTime;
}

// Starting the timer
function startTimer() {
  isTimerRunning = true; // updating the isTimerRunning variable
  startStopButton.textContent = 'Stop';  // using DOM node to modify our button
  timer = setInterval(() => {
    if (timeInSeconds > 0) {
      timeInSeconds--;
      updateTimerDisplay();
    } else {
      stopTimer();
    }
  }, 1000);
}

// Stoping the timer
function stopTimer() {
  isTimerRunning = false;
  startStopButton.textContent = 'Start';
  clearInterval(timer);
}

// Add one second to the timer
function addSecond() {
  if (!isTimerRunning) {
    timeInSeconds++;
    updateTimerDisplay();
  }
}

// Subtract one second from the timer
function subtractSecond() {
  if (!isTimerRunning && timeInSeconds > 0) {
    timeInSeconds--;
    updateTimerDisplay();
  }
}

// Reseting the timer
function resetTimer() {
  if (!isTimerRunning) {
    timeInSeconds = 0;
    updateTimerDisplay();
  }
}

// Toggling the timer (start/stop)
function toggleTimer() {
  if (isTimerRunning) {
    stopTimer();
  } else {
    startTimer();
  }
}
