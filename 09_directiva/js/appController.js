 class AppController {

    constructor ($log) { 
    // inyectar $log
    // this.$log = $log;
    }

    $onInit () {
        this.sTitulo = "Blog en Angular 1.6"
    }


 } // Fin de la clase 

angular.module("appModule")
.controller('AppController', AppController)