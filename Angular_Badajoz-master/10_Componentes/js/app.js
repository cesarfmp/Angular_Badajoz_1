class MainController {

    $onInit () {
        this.texto = "Texto desde papa";
        this.btn1 = "Send"; //"Enviar"
        this.btn2 = "Delete"; //"Borrar"

    }

   botonEnviar() {
        alert ("Información enviada");
    }

   botonBorrar() {
       alert ("Informacioón borrada");
    }

}

angular.module('appPrueba',[])
.controller("MainController", MainController)

