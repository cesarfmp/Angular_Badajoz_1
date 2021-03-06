class ListaController {
    
    // Inyeccion de dependecias
    constructor() {}

    // Es el constructor, para evitar los problemas de instaciacion
    $onInit() {
        //this.nombreNuevo = ""; // No hace falta porque hay ya unng-model que lo inicializa
        this.arrayNombres = new Array();
        console.log(this);
    };    

    btnAnadir() {
        this.arrayNombres.push(this.nombreNuevo);
        console.log(this);
    }
    //$onChanges (changesObj) { };
    //$onDestroy() { };
}

// Nos creamos un componente para la cabecera que va a pertenecer al modulo shared
// Para hacer referencia a este componente usamos app-cabeza por llamarse AppCabeza
// Podemos usar la plantilla directamente en vez de la url
angular.module('sharedModule')
        .component('appLista', {
            templateUrl:'./shared/lista-partial.html',
            controller: ListaController,
            //controllerAs: '$ctrl',  --> por defecto usar $ctrl
        });

    