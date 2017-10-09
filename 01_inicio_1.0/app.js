// En angular siempre tiene que haber un modulo principal con el nombre que pongamos en el ng-app
// El segundo parametro le indicamos que es un modulo nuevo que tiene que instanciar
// Le indicamos el controller y la funcion anonima
// Nos hace falta el scope, le metemos el scope por parametros
angular.module("appModule", [])
.controller("AppController", ['$scope', function($scope) {
    // Asi nos estamos creando los objetos dentro del scope
    $scope.sName='Pepe';
    $scope.sCurso='AngularJS';

    // Nos definimos la funcion que borra el name
    $scope.btnBorrar = function() {
        $scope.sName= '';
    }
}]);

//ng-init="sName='Pepe'; sCurso='AngularJS'"