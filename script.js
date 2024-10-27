let startTime = 0;
let updatedTime = 0;
let difference = 0;
let isRunning = false;
let interval;
let lapCounter = 1;

function startStop() {
  if (!isRunning) {
    startTime = new Date().getTime() - difference;
    interval = setInterval(updateTime, 1000);
    isRunning = true;
  }
}

function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;
  
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
  document.getElementById("timeDisplay").innerHTML = 
    (hours < 10 ? "0" + hours : hours) + ":" + 
    (minutes < 10 ? "0" + minutes : minutes) + ":" + 
    (seconds < 10 ? "0" + seconds : seconds);
}

function pause() {
  clearInterval(interval);
  isRunning = false;
}

function reset() {
  clearInterval(interval);
  isRunning = false;
  startTime = 0;
  updatedTime = 0;
  difference = 0;
  lapCounter = 1;
  document.getElementById("timeDisplay").innerHTML = "00:00:00";
  document.getElementById("laps").innerHTML = "";
}

function recordLap() {
  if (isRunning) {
    const lapTime = document.getElementById("timeDisplay").innerHTML;
    const lapEntry = document.createElement("div");
    lapEntry.innerHTML = "Lap " + lapCounter + ": " + lapTime;
    document.getElementById("laps").appendChild(lapEntry);
    lapCounter++;
  }
}
