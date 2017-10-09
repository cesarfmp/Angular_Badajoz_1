// Nos definimos una nueva clase
class AppController {
    
    // Constructor normal
    constructor ($scope) {
       // Es para la inyeccion de dependencia
       this.$scope = $scope;
       
    }

    // Es el constructor que se ejecuta un poquito despues
    // Es posterior al renderizado
    // Enlaces => se ejecuta lo que le diga en el inicio
    $onInit() {
      
        this.sCurso='AngularJS';

    }
   
}

// Nos creamos el saludo controller
class SaludoController {

    $onInit() {
       
        this.sName='Pepe';
        console.log(this);
    }

     // Nos definimos la funcion que borra el name
     btnBorrar() {
        this.sName= '';
    }
}

angular.module("appModule", [])
.controller("AppController", AppController)
.component('appSaludo', {
    templateUrl:'partial.html',
    controller: SaludoController,
    controllerAs: 'vm'
});

    
