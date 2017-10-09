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

// Antes lo he instaciado ya no le tengo que pasar el corchete corchete []
angular.module("appModule")
.controller("AppController", AppController);