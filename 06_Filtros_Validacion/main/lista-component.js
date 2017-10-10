class ListaController {
    
    $onInit () {
        this.isSubmit = false;
    }

    enviarFormulario() {
       console.debug("entra");
        this.isSubmit = true;
    }
}
    
angular.module("appModule")
.component('appLista', {
    templateUrl: './main/lista-partial.html',
    controller: ListaController
});