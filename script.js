// Si deseas agregar interactividad adicional en el futuro
console.log("¡Página cargada!");

// Función para cambiar la imagen dependiendo del horario
function cambiarImagenSegunHora() {
  var hora = new Date().getHours(); // Obtiene la hora actual (0 a 23)
  var imagen = document.getElementById('header-image'); // Obtiene la imagen por su ID
  
  if (hora >= 6 && hora < 18) { // De 6:00 AM a 6:00 PM
      imagen.src = "/images/SA.png"; // Cambia la imagen diurna
  } else { // De 6:00 PM a 6:00 AM
      imagen.src = "/images/SA2.png"; // Cambia la imagen nocturna
  }
}

// Llama a la función para cambiar la imagen cuando la página carga
window.onload = cambiarImagenSegunHora;


document.querySelector('a[href="#destino"]').addEventListener('click', function (e) {
  e.preventDefault(); // Evita el comportamiento predeterminado
  document.querySelector('#destino').scrollIntoView({
    behavior: 'smooth' // Desplazamiento suave
  });
});