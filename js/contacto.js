document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Verifica que no esté vacío
        if (!nombre || !correo || !mensaje) {
            alert("Por favor completa todos los campos.");
            return;
        }
        
        const numero = "573012154640"; // Reemplaza con tu número de WhatsApp
        const texto = `Hola, soy ${encodeURIComponent(nombre)}.%0AMi correo es: ${encodeURIComponent(correo)}.%0AQuiero decir: ${encodeURIComponent(mensaje)}`;

        const url = `https://wa.me/${numero}?text=${texto}`;

        window.open(url, "_blank");
    });
});
