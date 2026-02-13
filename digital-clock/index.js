const clockDisplay = document.getElementById("clock-display");

updateTime(); // to show time once the page is loaded

setInterval(updateTime, 1000);

function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  clockDisplay.textContent = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
}

function addZero(num) {
  return num >= 10 ? num : `0${num}`;
}
