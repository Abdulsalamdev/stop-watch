//getting element
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".res");
let count = document.querySelector(".count");
// add event listeners
play.addEventListener("click", wait);
pause.addEventListener("click", run);
reset.addEventListener("click", normal);

// use
let sum = 0;
let interval = null;

// timer
function timer() {
  sum++;

  let hrs = Math.floor(sum / 3600);
  let min = Math.floor(sum - (hrs * 3600) / 60);
  let sec = sum % 60;

  if (sec <= 9) sec = "0" + sec;
  if (min <= 9) min = "0" + min;
  if (hrs <= 9) hrs = "0" + hrs;

  count.innerText = `${hrs}:${min}:${sec}`;
}

function run() {
  if (interval) {
    return;
  }
  interval = setInterval(timer, 1000);
}

function wait() {
  clearInterval(interval);
  interval = null;
}

function normal() {
  clearInterval(interval);
  sec = 0;
  min = 0;
  hrs = 0;
}
