const navItems = {
  counter: document.getElementById("counter-nav-item"),
  stopWatch: document.getElementById("stop-watch-nav-item"),
  digitalClock: document.getElementById("digital-clock-nav-item"),
};

const containers = {
  counter: document.getElementById("counter-container"),
  stopWatch: document.getElementById("stop-watch-container"),
  digitalClock: document.getElementById("digital-clock-container"),
};

navItems.counter.addEventListener("click", () => showProject("counter"));
navItems.stopWatch.addEventListener("click", () => showProject("stopWatch"));
navItems.digitalClock.addEventListener("click", () =>
  showProject("digitalClock"),
);

showProject("counter"); // show counter project by default

function showProject(projectName) {
  Object.values(containers).forEach((container) => {
    container.style.display = "none";
  });
  containers[projectName].style.display = "flex";

  Object.values(navItems).forEach((navItem) => {
    navItem.classList.remove("active");
  });
  navItems[projectName].classList.add("active");
}
