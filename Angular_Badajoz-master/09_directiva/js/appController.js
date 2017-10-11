 class AppController {

    constructor ($log) { 
    // inyectar $log
    // this.$log = $log;
    }

    $onInit () {
    }


 } // Fin de la clase 

angular.module("appModule")
.controller('AppController', AppController)