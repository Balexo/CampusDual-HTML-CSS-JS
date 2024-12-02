const form = document.getElementById("register");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const users = JSON.parse(localStorage.getItem("users")) || [];
  console.log(users.length);
  const newId = users.length > 0 ? users.length + 1 : 1;

  const newUser = {
    id: newId,
    nombre: document.getElementById("nombre").value,
    apellidos: document.getElementById("apellidos").value,
    direccion: {
      tipoVia: document.getElementById("tipo_via").value,
      nombreVia: document.getElementById("nombre_via").value,
      codigoPostal: document.getElementById("codigo_postal").value,
      ciudad: document.getElementById("ciudad").value,
      provincia: document.getElementById("provincia").value,
      pais: document.getElementById("pais").value,
    },
  };

  console.log("Nombre", newUser.nombre);
  console.log("Apellidos:", newUser.apellidos);
  console.log("Dirección:", newUser.direccion);
  console.log(newUser);

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  console.log("Nuevo usuario agregado", newUser);
  console.log("Colección de usuarios", users);
});
