const form = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const descripcion = document.getElementById("descripcion");

form.addEventListener("submit", e => {
  e.preventDefault();

   validarInputs();
});

const setError = (element,message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success")
}

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText ="";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
}

const emailValido = email =>{
    const re = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
    return re.test(String(email)).toLowerCase();
}


const validarInputs = () =>{
    const nombre = nombre.value.trim();
    const email = email.value.trim();
    const descripcion = descripcion.value.trim();

    if(nombreValue === "") {
        setError(nombre,"Debes ingresar tu nombre");
    } else{
        setSuccess(nombre);
    }
    
    if (emailValue === "") {
        setError(email,"Debes ingresar tu email");
    } else if (!emailValido(emailValue)) {
        setError(email,"Ingresa un email válido");
    } else {
        setSuccess(email);

    }

    if(descripcionValue === "") {
        setError(descripcion,"Escribe tu mensaje");
    } else{
        setSuccess(descripcion);
    }
    
}
