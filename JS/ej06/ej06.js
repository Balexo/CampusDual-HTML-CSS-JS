const images = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Male_and_female_chicken_sitting_together.jpg/250px-Male_and_female_chicken_sitting_together.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Rooster_portrait2.jpg/220px-Rooster_portrait2.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Coq_orpington_fauve.JPG/220px-Coq_orpington_fauve.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Cascais_Costa_do_Esteril_52_%2836583204550%29.jpg/200px-Cascais_Costa_do_Esteril_52_%2836583204550%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/20110211_K%C3%BCken_002.jpg/220px-K%C3%BCken_002.jpg",
];

const descriptionImages = [
  "Gallo y gallina encima de una barra",
  "Imagen de un gallo",
  "Imagen de una gallina en el campo",
  "Gallina con sus pollos",
  "2 pollitos amarillos y 2 pollitos negros",
];

const body = document.body;
let counter = 0;

const addImage = document.getElementById("add_image");

const imageContainer = document.createElement(`div`);
imageContainer.id = `imageContainer`;
body.appendChild(imageContainer);

addImage.addEventListener("click", () => {
  if (counter >= 5) {
    alert("No se pueden añadir más de 5 imágenes");
    return;
  }

  const imageWrapper = document.createElement("div");
  imageWrapper.id = `imageWrapper${counter + 1}`;

  const newImage = document.createElement("img");
  newImage.id = `image${counter + 1}`;
  newImage.src = images[counter];
  newImage.alt = descriptionImages[counter];

  const optionWrapperImage = document.createElement("div");
  optionWrapperImage.id = `option_wrapper`;

  const deleteImage = document.createElement("button");
  deleteImage.id = `deleteImage${counter + 1}`;
  deleteImage.textContent = "Eliminar imagen";

  const inputField = document.createElement("input");
  inputField.id = `input${counter + 1}`;
  inputField.type = "number";
  inputField.placeholder = "Añade posición a la imagen correlativamente";
  inputField.min = "1";

  imageContainer.appendChild(imageWrapper);
  imageWrapper.appendChild(newImage);
  imageWrapper.appendChild(optionWrapperImage);
  imageWrapper.appendChild(deleteImage);
  imageWrapper.appendChild(inputField);

  optionWrapperImage.appendChild(deleteImage);
  optionWrapperImage.appendChild(inputField);
  counter++;

  deleteImage.addEventListener("click", (event) => {
    const imageDeleted = event.target.parentElement.parentElement;
    if (imageDeleted) {
      imageContainer.removeChild(imageDeleted);
      counter--;
    }
    updateInputRanges();

    const remainImages = imageContainer.querySelectorAll(
      "div[id!='imageWrapper']",
    );
    remainImages.forEach((wrapper, index) => {
      const img = wrapper.querySelector("img");
      const input = wrapper.querySelector("input");
      const button = wrapper.querySelector("button");
      wrapper.id = `imageWrapper${index + 1}`;
      img.id = `image${index + 1}`;
      input.id = `input${index + 1}`;
      button.id = `deleteImage${index + 1}`;
    });
  });

  inputField.addEventListener("input", () => {
    const position = parseInt(inputField.value, 10);
    if (isNaN(position) || position < 1 || position > counter) {
      alert(`Por favor, introduce un número entre 1 y ${counter}`);
      inputField.value = "";
    }
  });

  function updateInputRanges() {
    const allInputs = imageContainer.querySelectorAll("input");
    allInputs.forEach((input) => {
      input.max(counter);
    });
  }
});
