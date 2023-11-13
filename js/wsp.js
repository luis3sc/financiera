  const scriptURL = 'https://script.google.com/macros/s/AKfycbyS8gY9aD8baap5QHra0QFYmRjzmelYCnA66pV_0volthw0HybAfpVufS6cyGE5dk39Pw/exec'
        const form = document.forms['google-sheet']
      
          form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
              .then(response => alert("Gracias por Registrar tu Solicitud.. Vamos a contactarte por Whastapp"))
                .catch(error => console.error('Error!', error.message));
                  gowsp(); 
                form.reset();
            });
// mandar whastapp  ///
function gowsp() {

var name = document.getElementById("NombreCliente").value;
var DniCliente = document.getElementById("DniCliente").value;
var CelularCliente = document.getElementById("CelularCliente").value;
var FechaReserva = document.getElementById("FechaReserva").value;
var HoraReserva = document.getElementById("HoraReserva").value;
var PlacaAuto = document.getElementById("PlacaAuto").value;
var MarcaAuto = document.getElementById("MarcaAuto").value;
var ModeloAuto = document.getElementById("ModeloAuto").value;

var url = "https://api.whatsapp.com/send?phone=51968976064&text=Hola+,+acabo+de+completar+el+formulario+%0a"
    +"%0a"
    + "✅" + "Mi nombre es: *" + name + "* %0a"
    + "✅" + "DNI: *" + DniCliente + "* %0a"
    + "✅" + "Celular: *" + CelularCliente + "* %0a"
    + "---------------------------------" + "%0a"
    +"%0a"
    + "*Datos de Reserva*" + "%0a"
    +"%0a"
    + "✅" + "Fecha: *" + FechaReserva + "* %0a"
    + "✅" + "Hora: *" + HoraReserva + "* %0a"
    + "---------------------------------" + "%0a"
    +"%0a"
    + "*Datos del Vehículo*" + "%0a"
    +"%0a"
    + "✅" + "Placa del Auto: *" + PlacaAuto + "*%0a"
    + "✅" + "Marca del Auto: *" + MarcaAuto + "*%0a"
    + "✅" + "Modelo del Auto: *" + ModeloAuto + "*%0a"
    + "---------------------------------" + "%0a"
    +"%0a"
    +"Bienvenido a Muñeco Auto Spa" + "%0a"
    +"*Recuerda que Agendar un Servicio tiene un costo adicional de S/4.00*" + "%0a"
    + "Digitaliza tu Negocio en: *www.mitarjetadigitalperu.com*"; 

window.open(url, '_blank');
}