
function loadNavbar() {
    fetch("/web-municipalidad-rio-claro/pages/Menu/menu.html") // Carga el archivo menu.html
    .then(response => response.text()) // Convierte la respuesta en texto
    .then(data => {
        document.getElementById("navbar-container").outerHTML = data; // Inserta el navbar en el div
    })
    .catch(error => console.error("Error al cargar el navbar:", error));
}

// Llamar la función cuando la página cargue
document.addEventListener("DOMContentLoaded", loadNavbar);


console.log("hola mundillo vengo desde el menu")

