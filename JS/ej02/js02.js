const element = document.getElementById("contenido");

const colorsArray = ["blue", "green", "orange", "brown"];

let index = 0;

function changeColor() {
  element.style.backgroundColor = colorsArray[index];

  index = (index + 1) % colorsArray.length;
}

setInterval(changeColor, 1000);
