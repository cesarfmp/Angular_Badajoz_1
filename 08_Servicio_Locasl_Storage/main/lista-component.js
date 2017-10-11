class ListaController {
    
    constructor ($log,$locale) {
        // Inyectamos el servicios de log
        'ngInject';
        this.$log = $log;
        this.$locale = $locale;
    }
    
    $onInit () {
        this.isSubmit = false;
    }

    enviarFormulario() {
        this.$log.log("entra por log ");
        this.$log.log(this.$locale.id);

        this.$log.info(this);
        this.isSubmit = true;
    }
}
    
angular.module("appModule")
.component('appLista', {
    templateUrl: './main/lista-partial.html',
    controller: ListaController
});