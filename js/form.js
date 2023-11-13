const nombre = document.getElementById("name");
const correo = document.getElementById("email");
const celular = document.getElementById("mobile");
const message = document.getElementById("message");
const terminosYcondiciones = document.getElementById("termsAndConditions");
const formulario = document.getElementById("google-sheet");
const listInputs = document.querySelectorAll(".form-input");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    gotowhatsapp();    // funcion whastapp //
  }
});

function validacionForm() {
  formulario.lastElementChild.innerHTML = "";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  if (nombre.value.length < 1 || nombre.value.trim() == "") {
    mostrarMensajeError("name", "Nombre no valido*");
    condicion = false;
  }
 
  if (correo.value.length < 1 || correo.value.trim() == "") {
    mostrarMensajeError("email", "Correo no valido*");
    condicion = false;
  }
  if (
    celular.value.length != 9 ||
    celular.value.trim() == "" ||
    isNaN(celular.value)
  ) {
    mostrarMensajeError("mobile", "Celular no valido*");
    condicion = false;
  }
  
  if (!terminosYcondiciones.checked) {
    mostrarMensajeError("termsAndConditions", "Acepte*");
    condicion = false;
  } else {
    mostrarMensajeError("termsAndConditions", "");
  }
  return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}
// mandar whastapp  ///
  function gotowhatsapp() {

    var name = document.getElementById("name").value;
    var phone = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var fecha = document.getElementById("txtDate").value;
    var servicio = document.getElementById("message").value;

    var url = "https://api.whatsapp.com/send?phone=51972417095&text=Hola+,+acabo+de+hacer+una+reservación+"
        + "Mi nombre es: " + name + "%0a"
        + "y Requiero el servicio de " + servicio + "%0a"
        + "para la Fecha del " + fecha;

    window.open(url, '_blank');
}


  
