
function loadFooter() {
    fetch("/web-municipalidad-rio-claro/pages/Footer/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer-container").outerHTML = data;
        document.dispatchEvent(new Event("footerLoaded")); // avisamos que ya está listo
    })
    .catch(error => console.error("Error al cargar el footer:", error));
}

document.addEventListener("DOMContentLoaded", loadFooter);

console.log("hola mundillo vengo desde el footer")