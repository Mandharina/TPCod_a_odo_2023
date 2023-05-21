function validarFormulario() {
    
    var nombre = document.getElementById("nombre").value.trim();
    var email = document.getElementById("email").value.trim();
    var descripcion = document.getElementById("descripcion").value.trim();
  
    
  
    if (nombre === "" || email === "" || descripcion === "") {
      alert("Por favor, complete todos los campos del formulario.");
      return false;
    }
  
    for (var i = 0; i < nombre.length; i++) {
      var charCode = nombre.charCodeAt(i);
      if (
        !(
          (charCode >= 65 && charCode <= 90) ||
          (charCode >= 97 && charCode <= 122) ||
          charCode === 32
        )
      ) {
        alert("El campo 'nombre' solo puede contener letras y espacios.");
        return false;
      }
    }
  
    var emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (!email.match(emailRegEx)) {
      alert("La dirección de email es incorrecta");
      return false;
    }
  
    if (descripcion.length > 500) {
      alert("El campo 'descripción' no debe superar los 500 caracteres.");
      return false;
    } 
    
  
    alert("Formulario enviado correctamente.");
    return true;
  }
  
  