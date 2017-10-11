 class AppController {

    $onInit () {
      this.autor = "Alejandro L. Cerezo";
      this.fecha = new Date();
      this.titulo = "Muestrario";
      this.isHidden = true;
    };

    verColores (verOK) {
		this.isHidden = !verOK;
  	};	 

 }

angular.module("appModule", [])
.controller('AppController', AppController)
