const navList =  document.querySelector("#navList")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")
const img = document.querySelector("#img")

abrir.addEventListener("click", () => {
    navList.classList.add("visible")
    cerrar.classList.add("visible")
    abrir.classList.add("invisible")
})
cerrar.addEventListener("click", () => {
    navList.classList.remove("visible")
    cerrar.classList.remove("visible")
    abrir.classList.remove("invisible")
})