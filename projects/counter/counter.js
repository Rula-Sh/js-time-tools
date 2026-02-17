let counter = document.getElementById("counter");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");
let count = 0;

decrease.addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

reset.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});

increase.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
