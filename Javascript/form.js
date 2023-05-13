const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const regNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

    if (!regNombre.test(nombre.value)) {
        return console.log("Solo letras");
    }

    if (!regEmail.test(email.value)) {
        return console.log("Formato email no válido");
    }

    console.log("Formulario enviado con éxito");
});