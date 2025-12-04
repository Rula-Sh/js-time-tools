// Elements Variables
const startStopBtn = document.getElementById("start-stop-btn");
const resetBtn = document.getElementById("reset-btn");

// Time Variables
let seconds = 0;
let minutes = 0;
let hours = 0;

// Stop Watch Variables
let stopWatch = null;
let stopWatchStatus = "paused";

// Stop Watch Function
function stopWatchFunction() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
  }
  if (minutes / 60 === 1) {
    minutes = 0;
    hours++;
  }

  let secondsPrefix = "0";
  let minutesPrefix = "0";
  let hoursPrefix = "0";

  if (seconds < 10) {
    secondsPrefix = "0" + seconds;
  } else {
    secondsPrefix = seconds;
  }

  if (minutes < 10) {
    minutesPrefix = "0" + minutes;
  } else {
    minutesPrefix = minutes;
  }

  if (hours < 10) {
    hoursPrefix = "0" + hours;
  } else {
    hoursPrefix = hours;
  }

  document.querySelector(
    ".timer"
  ).innerText = `${hoursPrefix}:${minutesPrefix}:${secondsPrefix}`;
}

// Buttons Event Listeners
startStopBtn.addEventListener("click", function () {
  if (stopWatchStatus == "paused") {
    stopWatch = window.setInterval(stopWatchFunction, 1000);
    document.getElementById(
      "start-stop-btn"
    ).innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    stopWatchStatus = "running";
  } else {
    window.clearInterval(stopWatch);
    document.getElementById(
      "start-stop-btn"
    ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    stopWatchStatus = "paused";
  }
});

resetBtn.addEventListener("click", function () {
  window.clearInterval(stopWatch);
  document.getElementById(
    "start-stop-btn"
  ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
  stopWatchStatus = "paused";

  seconds = 0;
  minutes = 0;
  hours = 0;

  document.querySelector(".timer").innerText = "00:00:00";
});
