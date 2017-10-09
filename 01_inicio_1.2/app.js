// En angular siempre tiene que haber un modulo principal con el nombre que pongamos en el ng-app
// El segundo parametro le indicamos que es un modulo nuevo que tiene que instanciar
// Le indicamos el controller y la funcion anonima
// Nos hace falta el scope, le metemos el scope por parametros
angular.module("appModule", [])
.controller("AppController", AppController);

// Es para inyectar el scope, aviso que lo voy a inyectar, es para que conserve la mimificacion
AppController.$inject = ['$scope'];

// Funcion constructora, y aqui lo inyecto
function AppController($scope) {
    
    
    // this.vm --> es la forma de acceder al scope
    this.sName='Pepe';
    this.sCurso='AngularJS';

    console.log(this);
    console.log($scope);
    

    // Nos definimos la funcion que borra el name
    this.btnBorrar = function() {
        this.sName= '';
    }
}
