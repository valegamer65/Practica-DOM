function Boton() {
    document.getElementById('Boton').textContent = 'Hola Mundo';
}
var boton = document.getElementById("miBoton");
var div = document.getElementById("miDiv");

boton.addEventListener("click", function() {
  div.style.backgroundColor = "violet";
});

function mostrarAlerta() {
  alert("¡Haz hecho clic!");
}
function toggleDiv() {
  const miDiv = document.getElementById("mi-div");
  if (miDiv.style.display === "none") {
    miDiv.style.display = "block";
  } else {
    miDiv.style.display = "none";
  }
}
