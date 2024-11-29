const nowElements = document.getElementsByClassName("now");

function timeFunction() {
  const currentTime = new Date().toLocaleTimeString("es-ES", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  Array.from(nowElements).forEach((element) => {
    element.textContent = currentTime;
  });
}

setInterval(timeFunction, 1000);
