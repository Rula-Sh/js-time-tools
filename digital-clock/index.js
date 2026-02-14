const clockDisplay = document.getElementById("clock-display");
const hourFormatSwitch = document.getElementById("hour-format-switch");
let is12HourFormat = false;

updateTime(); // to show time once the page is loaded

setInterval(updateTime, 1000);

hourFormatSwitch.addEventListener("change", () => {
  is12HourFormat = hourFormatSwitch.checked;
  updateTime(); // <-- instantly refresh display
});

function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  let period = "";

  if (is12HourFormat) {
    period = hours < 12 ? "AM" : "PM";
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;
  }

  clockDisplay.textContent = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} ${period}`;
}

function addZero(num) {
  return num >= 10 ? num : `0${num}`;
}
