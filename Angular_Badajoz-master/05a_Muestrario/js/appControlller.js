 class AppController {

    $onInit () {
      this.autor = "Alejandro L. Cerezo";
      this.titulo = "Muestrario";
	    this.isHidden = true;
        
    }
    btnColores () {
		this.isHidden = !this.isHidden;
	};	 

 }

angular.module("appModule", [])
.controller('AppController', AppController)