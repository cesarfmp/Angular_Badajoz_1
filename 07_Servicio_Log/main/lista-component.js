class ListaController {
    
    constructor ($log) {
        // Inyectamos el servicios de log
        'ngInject';
        this.$log = $log;
    }
    
    $onInit () {
        this.isSubmit = false;
    }

    enviarFormulario() {
        this.$log.log("entra por log");
        this.isSubmit = true;
    }
}
    
angular.module("appModule")
.component('appLista', {
    templateUrl: './main/lista-partial.html',
    controller: ListaController
});