document.addEventListener('DOMContentLoaded', function(){   
   	if(document.querySelector("#formLogin")){
	   	let formLogin = document.querySelector("#formLogin");
	   	formLogin.onsubmit = function(e){
	   		e.preventDefault();
	   		let request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	        let ajaxUrl = base_url+'/Login/loginUser';
	        let formData = new FormData(formLogin);	       
	        request.open("POST",ajaxUrl,true);
	        request.send(formData);
	        request.onreadystatechange = function(){
	            if(request.readyState == 4 && request.status == 200){
	            	var objData = JSON.parse(request.responseText);
	                if(objData.status){
	                	swal({
						  title: "Sistema",
						  text: objData.msg,
						  icon: "success",
						  dangerMode: true,
						})
						.then((value) => {
						  location.reload(false);
						});	                    
	                }else{
	                	swal("Sistema",objData.msg,"error");
	                }
	            }
	        }
	   	}
   	}
   	if(document.querySelector("#qrcode")){
   		var qrcode = new QRCode(document.querySelector("#qrcode"), {
		    width : 250,
		    height : 250
		});
		qrcode.makeCode(keycliente);
   	}

   	if(document.querySelector("#formRegistroCliente")){
   		let formRegistroCliente = document.querySelector("#formRegistroCliente");
   		formRegistroCliente.onsubmit = function(e){
   			e.preventDefault();

   			let strnumdoc = document.querySelector("#numdoc").value;
   			let strnombre = document.querySelector("#nombre").value;
   			let strdireccion = document.querySelector("#direc").value;
   			let stremail = document.querySelector("#email").value;
   			let strmobile = document.querySelector("#mobile").value;
   			let strclave = document.querySelector("#contrasena").value;
   			let strclaveconfir = document.querySelector("#confircontrasena").value;

   			if(strnumdoc == "" || strnombre == "" || strdireccion == "" || stremail == "" || strmobile == "" || strclave == "" || strclaveconfir == ""){
   				swal("Sistema","Ingrese todo los campos","error");
   				return false;
   			}else{
   				if(strclave != strclaveconfir){
   					swal("Sistema","Las contraseñas no son iguales.","error");
   					return false;
   				}
   				let request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
		        let ajaxUrl =  base_url+'/Login/registroCliente';
		        let formData = new FormData(formRegistroCliente);
		        request.open("POST",ajaxUrl,true);
		        request.send(formData);
		        request.onreadystatechange = function(){
		            if(request.readyState == 4 && request.status == 200){
		               	var objData = JSON.parse(request.responseText);
		                if(objData.status){
		                	swal({
							  title: "Sistema",
							  text: objData.msg,
							  icon: "success",
							  dangerMode: true,
							})
							.then((value) => {
							  location.reload(false);
							});
		                }else{
	                		swal("Sistema",objData.msg,"error");
		                }
		            }
		        }
   			}   			
   		}
   	}

   	if(document.querySelector("#google-sheet")){
   		let formReservaCliente = document.querySelector("#google-sheet");
   		formReservaCliente.onsubmit = function(e){
   			e.preventDefault();
   			let request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	        let ajaxUrl =  base_url+'/Cliente/reservarCita';
	        let formData = new FormData(formReservaCliente);
	        request.open("POST",ajaxUrl,true);
	        request.send(formData);
	        request.onreadystatechange = function(){
	            if(request.readyState == 4 && request.status == 200){
	            	console.log(request.responseText);
	               	var objData = JSON.parse(request.responseText);
	                if(objData.status){
	                    
	                    swal({
    					  title: "Sistema",
    					  text: objData.msg,
    					  icon: "success",
    					  dangerMode: true,
    					})
    					.then((value) => {
    					  
    					  cerrarmodal();
	                	    gotowhatsapp();
    					  
    					});
	                    
	                    
	                	//swal("Sistema",objData.msg,"success");
	                	
	                }else{
                		swal("Sistema",objData.msg,"error");
	                }
	            }
	        }


   		}
   	}
});

window.addEventListener('load', function() {
    
}, false);

function mostrarModal(modal){
	//Oferta
	if(modal === 1){
		$("#modalPromocion").fadeIn();
	}
	//Compartir
	if(modal === 2){
		$("#modalCompartir").fadeIn();
	}
	//Ubicacion
	if(modal === 3){
		$("#modalUbicacion").fadeIn();
	}
	//Contactar
	if(modal === 4){
		$("#modalContacto").fadeIn();
	}
	//Pagos
	if(modal === 5){
		$("#modalPagos").fadeIn();
	}
	//Redes Sociales
	if(modal === 6){
		$("#modalRedes").fadeIn();
	}
	//Formulario Reserva
	if(modal === 7){
		$("#modalReserva").fadeIn();
	}
	//Registrar Cuenta
	if(modal === 8){
		$("#modalRegistrarCuenta").fadeIn();
	}
	//Registrar Login
	if(modal === 9){
		$("#modalLogin").fadeIn();
	}
	//Registrar QR
	if(modal === 10){
		$("#modalMiqr").fadeIn();
	}
	//Registrar Cuenta
	if(modal === 11){
		$("#modalWhastapp").fadeIn();
	}
	//Servicios
	if(modal === 12){
		$("#modalServicios").fadeIn();
	}
	//Nosotros
	if(modal === 13){
		$("#modalNosotros").fadeIn();
	}
	//Tienda
	if(modal === 14){
		$("#modalTienda").fadeIn();
	}
	//Cartilla de Sellos
	if(modal === 15){
		$("#modalSellos").fadeIn();
	}
	//Mis Reservas
	if(modal === 16){
		$("#modalReservas").fadeIn();
	}
	//Carta
	if(modal === 17){
		$("#modalCarta").fadeIn();
	}
	//Torneo
	if(modal === 18){
		$("#modalTorneo").fadeIn();
	}
	//MiPuntos
	if(modal === 19){
		$("#modalPuntos").fadeIn();
	}
	//MisMisiones
	if(modal === 20){
		$("#modalMisiones").fadeIn();
	}
	//MisReferral
	if(modal === 21){
		$("#modalReferral").fadeIn();
	}
	//TiendaVIP
	if(modal === 22){
		$("#modalTiendavip").fadeIn();
	}
	//Carta
	if(modal === 23){
		$("#modalOtorgar").fadeIn();
	}

}

function salir(){
	location.href = 'logout';
}

function cerrarmodal(){
    $('.modal').fadeOut();
}

function scanear(){
	location.href = 'scanear';
}

function irdashboard(){
	location.href = 'dashboard';
}


// copiar y pegar //
$(document).ready(function() {
	$('#copiar, #copia').click(function(){
		var btntxt = $(this).text();
		var copy = $(this).parent().find('.copy').text();
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val(copy).select();
		document.execCommand("copy");
		$temp.remove();
		$('.confirmation').hide().html( 'el numero' + '</b> Ha sido copiado al portapapeles').fadeIn(100).delay(800).fadeOut(200);
		$( '.main' ).trigger( "click" );
	});
	$('.main div').click(function(){
		var range = document.createRange();
		var selection = window.getSelection();
		range.selectNodeContents(this);
		selection.removeAllRanges();
		selection.addRange(range);
	});
});