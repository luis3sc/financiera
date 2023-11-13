function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function () {
    var resultContainer = document.getElementById('qr-reader-results');
    var lastResult, countResults = 0;
    function onScanSuccess(decodedText, decodedResult) {        
        if (decodedText !== lastResult) {
            ++countResults;
            lastResult = decodedText;
            // Handle on success condition with the decoded message.
            //console.log(`Scan result ${decodedText}`, decodedResult);
            let request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            let ajaxUrl = base_url + '/Cliente/getCliente/'+decodedText;
            request.open("GET",ajaxUrl,true);
            request.send();
            request.onreadystatechange = function(){
                if(request.readyState == 4 && request.status == 200){ 
                    var objData = JSON.parse(request.responseText);
                    if(objData.status){
                        objCliente = objData.data.cliente;
                        objContador = objData.data.contador;
                        document.querySelector("#idcliente").value = objCliente.idcliente;
                        document.querySelector("#datacliente").innerHTML = objCliente.nombres;                        
                        //makeCode(objData.data.keycliente);
                        document.querySelector("#showvisitas").innerHTML = objContador;
                        $('.modal').fadeIn();
                    }else{

                    }
                }
            }
        }        
    }
    var html5QrcodeScanner = new Html5QrcodeScanner(
        "qr-reader", { fps: 10, qrbox: 150 });
    html5QrcodeScanner.render(onScanSuccess);
});

document.addEventListener('DOMContentLoaded', function(){
   if(document.querySelector("#formRegistrar")){
        let formRegistrar = document.querySelector("#formRegistrar");
        formRegistrar.onsubmit=function(e){
            e.preventDefault();
            let request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            let ajaxUrl = base_url+'/Cliente/registrarVisita';
            let formData = new FormData(formRegistrar);
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
                            history.go(-1);
                        });                        
                    }else{
                        swal("Sistema",objData.msg,"error");
                    }

                }
            }
        }        
   }



});

window.addEventListener('load', function() {
    setTimeout(function(){
        if(document.querySelector("#html5-qrcode-button-camera-permission")){
            document.querySelector("#html5-qrcode-button-camera-permission").click();
            setTimeout(function(){
                if(document.querySelector("#html5-qrcode-button-camera-start")){                        
                    document.querySelector("#html5-qrcode-button-camera-start").click();
                }
            },100);
        }
    },500); 
}, false);

function cerrar(){
    $('.modal').fadeOut();
    history.go(-1);
}

/*var qrcode = new QRCode(document.querySelector("#qrcode"), {
    width : 200,
    height : 200
});

function makeCode(codigo) {    
    qrcode.makeCode(codigo);
}*/

/*function startscanr(){
    docReady(function () {
        var resultContainer = document.getElementById('qr-reader-results');
        var lastResult, countResults = 0;
        function onScanSuccess(decodedText, decodedResult) {        
            if (decodedText !== lastResult) {
                ++countResults;
                lastResult = decodedText;
                // Handle on success condition with the decoded message.
                //console.log(`Scan result ${decodedText}`, decodedResult);

                let request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
                let ajaxUrl = 'app/ajax.php';
                let formData = new FormData();
                formData.append('evento',"consulta");
                formData.append('codigo',decodedText);
                request.open("POST",ajaxUrl,true);
                request.send(formData);
                request.onreadystatechange = function(){
                    if(request.readyState == 4 && request.status == 200){
                        var objData = JSON.parse(request.responseText);
                        if(objData.status){
                            objCliente = objData.data.cliente;
                            objContador = objData.data.contador;
                            document.querySelector("#idcliente").value = objCliente.keycliente;
                            document.querySelector("#datacliente").innerHTML = objCliente.nombres+' '+objCliente.apellidos;                        
                            //makeCode(objData.data.keycliente);
                            document.querySelector("#showvisitas").innerHTML = objContador;
                            $('.modal').fadeIn();
                        }else{
                        }
                    }
                }
            }        
        }
        var html5QrcodeScanner = new Html5QrcodeScanner(
            "qr-reader", { fps: 10, qrbox: 150 });
        html5QrcodeScanner.render(onScanSuccess);
    });
    setTimeout(function(){
        if(document.querySelector("#html5-qrcode-button-camera-permission")){
            document.querySelector("#html5-qrcode-button-camera-permission").click();
            setTimeout(function(){
                if(document.querySelector("#html5-qrcode-button-camera-start")){                        
                    document.querySelector("#html5-qrcode-button-camera-start").click();
                }
            },500);
        }
    },500); 
}*/