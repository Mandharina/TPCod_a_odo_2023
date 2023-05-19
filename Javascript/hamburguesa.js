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

const restoClick =  document.querySelector("#restoClick")
const restoMenu = document.querySelector("#restoMenu")


restoClick.addEventListener("click",()=>{
    restoMenu.classList.toggle("visible")
})
const confiClick =  document.querySelector("#confiClick")
const confiMenu = document.querySelector("#confiMenu")


confiClick.addEventListener("click",()=>{
    confiMenu.classList.toggle("visible")
})
const helaClick =  document.querySelector("#helaClick")
const helaMenu = document.querySelector("#helaMenu")


helaClick.addEventListener("click",()=>{
    helaMenu.classList.toggle("visible")
})