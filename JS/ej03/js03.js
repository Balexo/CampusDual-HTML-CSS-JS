const timeElement = document.getElementById("contenido");
const secondElement = document.getElementById("segundo");

function currentTime() {
  timeElement.textContent = new Date().toISOString();
}

function currentSecond() {
  secondElement.textContent = new Date().getSeconds();
}
setInterval(currentTime, 1000);
setInterval(currentSecond, 1000);
