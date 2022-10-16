const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        console.log(`Interval with id ${timerId} changed body color for ${getRandomHexColor()}!`);
        body.style.backgroundColor = getRandomHexColor()}, 1000);
        startBtn.disabled = true;
        stopBtn.disabled = false;
        startBtn.style.cursor = "default";
        stopBtn.style.cursor = "pointer";
  });
  
  
  stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    console.log(`Interval with id ${timerId} has stopped!`);
    startBtn.disabled = false;
    stopBtn.disabled = true;
    startBtn.style.cursor = "pointer";
    stopBtn.style.cursor = "default";
  });