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
        this.sName='Pepe';
        this.sCurso='AngularJS';

        console.log(this);
        console.log(this.$scope);
    }


    // Nos definimos la funcion que borra el name
    btnBorrar() {
        this.sName= '';
    }
}

angular.module("appModule", [])
.controller("AppController", AppController);

