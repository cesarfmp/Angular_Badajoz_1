class PadreController {
    
    // Inyeccion de dependecias
    constructor($scope,$http) {
        this.$scope = $scope;
        this.$http = $http;
        this.aviso = "";
        this.provincias =[];
    }

    // Es el constructor, para evitar los problemas de instaciacion
    $onInit() {
        var me = this;
       
        this.oDatos = {
            //nombre: "Cesar"
        }

        this.$scope.$on('evtBorrado', this.responderBorrado.bind(this));

        this.$http({
            method: 'GET',
            url: 'http://restcountries.eu/rest/v1/region/africa'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                console.log(response)

                me.provincias =response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });    
    };    

    responderBorrado () {
        this.aviso = "El hijo ha borrado";
        this.oDatos.nombre ="";
    }
   
    //$onChanges (changesObj) { };
    //$onDestroy() { };
}

// Nos creamos un componente para la cabecera que va a pertenecer al modulo shared
// Para hacer referencia a este componente usamos app-cabeza por llamarse AppCabeza
// Podemos usar la plantilla directamente en vez de la url
angular.module('sharedModule')
        .component('appPadre', {
            templateUrl:'./main/padre-partial.html',
            controller: PadreController,
            //controllerAs: '$ctrl',  --> por defecto usar $ctrl
        });

    