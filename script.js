var txtNombre = document.getElementById("txt-nombre");
var txtDomicilio = document.getElementById("txt-domicilio");
var btnAceptar = document.getElementById("btn-aceptar");

btnAceptar.addEventListener("click", validarContenido);

function validarContenido() {

    var nombre = txtNombre.value.trim();
    var domicilio = txtDomicilio.value.trim();
    var modalElement = document.getElementById("modalError");
    var modal = new bootstrap.Modal(modalElement);

    var mensaje = document.getElementById("modalMensaje");
    var titulo = document.getElementById("modalTitulo");

    if (nombre === "") {
        titulo.innerText = "Error de validación";
        mensaje.innerText = "El campo Nombre está vacío";
        modal.show();
        return;
    }

    if (domicilio === "") {
        titulo.innerText = "Error de validación";
        mensaje.innerText = "El campo Domicilio está vacío";
        modal.show();
        return;
    }

    titulo.innerText = "Éxito";
    mensaje.innerText = "Campos correctos";
    modal.show();
}