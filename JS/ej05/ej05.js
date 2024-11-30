const timeSeconds = document.getElementById("segundos");
const startCountdown = document.getElementById("start");
const postponeCountdown = document.getElementById("postpone");
const stopCountdown = document.getElementById("stop");
const ringing = document.getElementById("ring");

let isRunning = false;
let interval = null;
let remainingTime = 0;

const alarmSound = new Audio("song.mp3");
alarmSound.loop = true;
ringing.style.display = "none";
postponeCountdown.disabled = true;

function startAlarm() {
  clearInterval(interval);

  if (!isRunning) {
    remainingTime = parseInt(timeSeconds.value, 0);
  }

  remainingTime = parseInt(timeSeconds.value, 10);

  if (isNaN(remainingTime) || remainingTime <= 0) {
    alert("Introduce un valor mayor a 0");
    return;
  }

  isRunning = true;
  postponeCountdown.disabled = false;

  interval = setInterval(() => {
    if (remainingTime > 0) {
      remainingTime--;
      timeSeconds.value = remainingTime;
    } else {
      clearInterval(interval);
      ringing.style.display = "block";
      alarmSound.play();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
  ringing.style.display = "none";
  isRunning = false;
  alarmSound.pause();
}

function postponeAlarm() {
  remainingTime += 5;
  timeSeconds.value = remainingTime;
  if (remainingTime > 0) {
    ringing.style.display = "none";
    alarmSound.pause();
    startAlarm();
  }
}

startCountdown.addEventListener("click", startAlarm);

postponeCountdown.addEventListener("click", postponeAlarm);

stopCountdown.addEventListener("click", stopTimer);
