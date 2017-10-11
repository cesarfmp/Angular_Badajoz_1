 class AppController {

    constructor ($log) { 
    // inyectar $log
    // this.$log = $log;
    }

    $onInit () {
      this.print = false;	//true si se selecciona imprimei	
      this.isClaro = ("oscuro"); //true si se selecciona claro       
      this.aProvincias=[
        {idProvincia:2,
          nombre:"Castellón"},
        {idProvincia:3,
          nombre:"Alicante"},
        {idProvincia:1,
          nombre:"Valencia"},
        {idProvincia:7,
          nombre:"Teruel"},  
        {idProvincia:5,
          nombre:"Tarragona"}
      ];        
      this.oProvinciaSeleccionada=null; 
    }
    
    avisarPrint () {
        console.log("Modificada la opción de imprimir con valor :");
        console.log(this);		
    }

 } // Fin de la clase 

angular.module("appModule", [])
.controller('AppController', AppController)